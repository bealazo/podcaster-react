import {useContext,useEffect,useState} from "react";
import {Grid,Paper,Typography,Box,Divider} from '@mui/material';
import { useLocation } from "react-router-dom";
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/StoreReducer';


const EpisodeDetails =()=>{

    const location = useLocation();
    const dataepisode = location.state?.episode;
    const [store, dispatch] = useContext(StoreContext);
    const [html, setHtml] = useState("")

    useEffect(() => {
        dispatch({type:types.is_loading, payload:true}); 
        setHtml(dataepisode.content)
        dispatch({type:types.is_loading, payload:false}); 
    }, [html])

  
    return (
        
        <Grid item xs={9}>                
         <Paper elevation={1} sx={{ minWidth: 700,height:"auto", textAlign:"left", padding:"10px"}}>
             <Box marginBottom="2vh">
             <Typography  variant="h5" fontWeight="bold">
               {dataepisode.title}                   
             </Typography>
             <Typography  variant="body" dangerouslySetInnerHTML={{__html: html}}></Typography>
             </Box>
             <Divider/>
             <Box marginTop="2vh">
                    <audio controls style={{minWidth:"100%"}}>
                        <source src={dataepisode.urlrep} type="audio/ogg" />
                        <source src={dataepisode.urlrep} type="audio/mpeg" />
                        <source src={dataepisode.urlrep} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
            </Box>     
                   
          </Paper> 
              
        </Grid>
       
      );
}

export default EpisodeDetails;