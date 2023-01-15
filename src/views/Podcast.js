import {useState,useEffect,useContext} from "react";
import {Grid} from '@mui/material';
import { useLocation } from "react-router-dom";
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';
import { isOutOfDate,API_URL,CORS_PREFIX } from "../utils/Utils";
import PodcastResume from "../components/PodcastResume";
import PodcastDetails from "../components/PodcastDetails";


const Podcast =()=>{
    
    const location = useLocation();
    const datapodcast = location.state?.podcast;
    const [store, dispatch] = useContext(StoreContext);
    const [podcastresume, setPodcastresume] = useState({});

    useEffect(()=>{    
      
        dispatch({type:types.is_loading, payload:true}); 
       
        async function getPodcastById(){              
            console.log("entre al useEffect")
               await fetch(`${CORS_PREFIX}${API_URL}/lookup?id=${datapodcast.id}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    const p = data.results[0];
                    let podcastresume = {
                      id: p.trackId,
                      artwork: p.artworkUrl600,
                      name: p.trackName,
                      feedUrl: p.feedUrl,
                      artistName: p.artistName,
                      summary:datapodcast.summary
                    };
                    setPodcastresume(podcastresume);
                    // Se desactiva el spinner                   
                    dispatch({type:types.is_loading, payload:false});
            
                    })
                    .catch(
                    error => console.log(`Error while fetching podcast: ${error}`)
                    )  
        }
        getPodcastById();
    },[])


    return (
        <Grid container spacing={2} marginTop="1vh">       
            <Grid item xs={3}>
                {podcastresume.id?<PodcastResume podcastresume={podcastresume}/>:null}
            </Grid>
            <Grid item xs={9}>
               {podcastresume.id?<PodcastDetails podcastresume={podcastresume}/>:null}             
            </Grid>
        </Grid>
      );
}

export default Podcast;