import {useState,useEffect,useContext} from "react";
import { Route,Routes} from "react-router-dom";
import {Grid} from '@mui/material';
import { useLocation } from "react-router-dom";
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';
import { isOutOfDate,API_URL,CORS_PREFIX } from "../utils/Utils";
import PodcastResume from "../components/PodcastResume";
import PodcastDetails from "../components/PodcastDetails";
import EpisodeDetails from "../components/EpisodeDetails";
import Parser from "rss-parser";


const Podcast =()=>{
    
    const location = useLocation();
    const datapodcast = location.state?.podcast;   
    const [store, dispatch] = useContext(StoreContext);
    const [podcastresume, setPodcastresume] = useState({episodes:[]});

    useEffect(()=>{    
      
        dispatch({type:types.is_loading, payload:true}); 
         /*
            Si no existe el podcastKey en localStorage o está desactualizado, se hace la petición
            y se actualiza el timestamp del objeto almacenado en el localStorage
             */
   
        const podcastKey = `podcast${datapodcast.id}`;

        if (
        localStorage.getItem(podcastKey) === null ||
        isOutOfDate(JSON.parse(localStorage.getItem(podcastKey)).timestamp)
        ) 
        {       
            async function getPodcastById(){  
              
                await fetch(`${CORS_PREFIX}${API_URL}/lookup?id=${datapodcast.id}`)
                    .then((response) => response.json())
                    .then((data) => {
                
                        const p = data.results[0];
                        let podcastresume = {
                        id: p.trackId,
                        artwork: p.artworkUrl600,
                        name: p.trackName,
                        feedUrl: p.feedUrl,
                        artistName: p.artistName,
                        summary:datapodcast.summary,
                     
                        };                        
                     
                        const parser = new Parser();              
                            let episodes = [];
                            const feed = parser.parseURL(`${CORS_PREFIX}${podcastresume.feedUrl}`, function(err, feed) {
                                if(err){
                                    console.log(err);
                                } 
                                else{
                                   
                                    feed.items.forEach(episode => {
                                    episodes.push({
                                        id: episode.guid,
                                        title: episode.title,
                                        date: parseDate(episode.pubDate),
                                        duration: episode.itunes.duration,
                                        content: episode.content,
                                        urlrep:episode.enclosure!==undefined?episode.enclosure.url:""
                                    });
                                    });  

                                    podcastresume.episodes=episodes;
                                   
                                    setPodcastresume(podcastresume)
                                      // Se añade o actualiza el objeto del localStorage
                                    let lsObject = { value: podcastresume, timestamp: new Date().getTime() };
                                    try {
                                    localStorage.setItem(podcastKey, JSON.stringify(lsObject));
                                    } catch (e) {
                                    console.log("Local storage full, empty Local storage: " + e);
                                    }
                                    dispatch({type:types.is_loading, payload:false}); 
                        
                                }               
                            })
                        
                         
                            
                        })
                        .catch(
                        error => console.log(`Error while fetching podcast: ${error}`)
                        )  
            }
            getPodcastById();
         
        }
        else {
            // Se obtiene la respuesta almacenada en el localStorage y se actualiza el estado
            let lsPodcast = JSON.parse(localStorage.getItem(podcastKey)).value;
            setPodcastresume(lsPodcast);
            // Se desactiva el spinner
            dispatch({type:types.is_loading, payload:false});
          }
    },[])
    const parseDate=(datetoparse)=>{
        let date = new Date(datetoparse);
        return (
            `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        );
    }


    return (
        <Grid container spacing={2} marginTop="1vh">       
            <Grid item xs={3}>
                {podcastresume.id?<PodcastResume podcastresume={podcastresume}/>:null}
            </Grid>
            <Grid item xs={9}>  
            <Routes>
            <Route
                path={`:${podcastresume.id}`}                
                element={podcastresume.episodes.length>0?<PodcastDetails podcastresume={podcastresume}/>:null}
            />
            <Route
                path={`:${podcastresume.id}/episodes/*`}
                element={<EpisodeDetails/>}
            />
          </Routes>            
                   
            </Grid>
        </Grid>
      );
}

export default Podcast;