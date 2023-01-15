import { Box, Grid,TextField,Chip,Stack } from '@mui/material';
import {useEffect,useState} from "react";
import {useContext} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';
import {isOutOfDate,API_URL} from "../utils/Utils";
import PodcastCard from "../components/PodcastCard";

const Home =()=>{

    const[podcasts,setPodcasts]=useState([]);
    const[filteredPodcasts,setfilteredPodcasts]=useState([]);
    const [search, setSearch] = useState ("");

    const [store, dispatch] = useContext(StoreContext);

    useEffect(()=>{

        dispatch({type:types.is_loading, payload:true});
        async function getPodcasts(){
        await fetch(`${API_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let podcasts = [];
            data.feed.entry.forEach(p => {
                let podcast = {
                  id: p.id.attributes["im:id"],
                  img: p["im:image"][2].label,
                  name: p["im:name"].label,
                  author: p["im:artist"].label,
                  summary: p.summary ? p.summary.label : "No description"
                };
                podcasts.push(podcast);
              });
              setPodcasts(podcasts)
              setfilteredPodcasts(podcasts) 
              dispatch({type:types.is_loading, payload:false});           
            })
            .catch(
              error => console.log(`Error while fetching podcasts: ${error}`)
            ) 
        } 
        getPodcasts();     
    },[])

    const handleChange = (e) => {
       
        let filteredPodcasts = podcasts.filter((podcast) => {

            if (podcast.name.toUpperCase( ).includes (search.toUpperCase( ))||podcast.author.toUpperCase( ).includes (search.toUpperCase( ))) {
            
            return true;
            
            }
            
            return false;
            
            });
        setSearch (e.target.value);        
        setfilteredPodcasts(filteredPodcasts);
    };

    

    return (
        
        <>
            <Box display="flex" justifyContent='end' flexDirection="row" gap="5" marginTop="1vh">
                <Stack direction="row" spacing={1}>
                    <Chip label="100" color="primary"/>
                    <TextField value = {search} onChange = {handleChange} id="outlined-basic" label="Filter podcasts..." variant="outlined" size="small" />
                </Stack>
               
            </Box>
            <Box display="flex" flexDirection="row" justifyContent='center' marginTop="3vh">
                <Box width="70vw">
                <Grid container spacing={{ xs: 1}} columns={{ xs: 4, sm: 8, md: 12 }} >
                    {filteredPodcasts.map((p, index) => (
                        <Grid item xs={2} sm={3} md={3} key={index} display="flex" flexDirection="row" justifyContent='center'marginTop="10vh" >
                           <PodcastCard podcast={p}/>
                        </Grid>
                    ))}
                </Grid>
                </Box>
            </Box>
       </>
     
      );
}

export default Home;