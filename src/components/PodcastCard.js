import * as React from 'react';
import {Link} from "react-router-dom"
import {Card, CardContent, CardActionArea,Typography, Avatar} from '@mui/material';


const PodcastCard=(props)=> {
   
  return (
    <Link
      to={`/podcast/${props.podcast.id}`}  state={{podcast: props.podcast}}    
      style={{textDecoration: 'none'}}
    >
      <Card sx={{ width: 200,height:150, textAlign:"center",overflow:"visible" }}>
        <CardActionArea>
      
          <Avatar
              alt="Podcast Image"
              src={props.podcast.img}
              sx={{ width: 100, height: 100, marginLeft:"25%" , marginTop:"-25%"}}
          />
        
          <CardContent>
            <Typography gutterBottom variant="body" sx={{ fontWeight:"bold" }}>
              {props.podcast.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Author: {props.podcast.author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
export default PodcastCard;