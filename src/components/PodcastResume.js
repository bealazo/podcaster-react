import {Link} from "react-router-dom"
import {Card, CardContent, CardActionArea,Typography, CardMedia, Divider,Box} from '@mui/material';


const PodcastResume =(props)=>{
  
    return (
        
      <Link
         to={`/podcast/${props.podcastresume.id}`} style={{textDecoration: 'none'}}
      >
      <Card sx={{ width:"20vw",height:"auto", textAlign:"left"}}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="194"
            image={props.podcastresume.artwork}
            alt="Podcast img"
          />
                 
          <CardContent>
            <Divider />
            <Typography  variant="h6" fontWeight="bold">
              {props.podcastresume.name}
            </Typography>
            <Box marginBottom="2vh">
            <Typography variant="body">
              by: {props.podcastresume.artistName}
            </Typography>
            </Box>
            <Divider/>
            <Box marginTop="2vh">
              <Typography variant="body" fontWeight="bold"> 
                Description: 
              </Typography>
            </Box>
            <Box marginTop="2vh"> 
            <Typography variant="body" > 
              {props.podcastresume.summary}
            </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
        
      );
}

export default PodcastResume;