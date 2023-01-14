import {Grid} from '@mui/material';
import PodcastResume from "../components/PodcastResume";
import PodcastDetails from "../components/PodcastDetails";

const Podcast =()=>{

    return (
        <Grid container spacing={2}>       
            <Grid item xs={4}>
                <PodcastResume/>
            </Grid>
            <Grid item xs={8}>
               <PodcastDetails/>
            </Grid>
        </Grid>
      );
}

export default Podcast;