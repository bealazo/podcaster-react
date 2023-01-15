import {useEffect,useState} from "react";
import {Link} from "react-router-dom"
import {CORS_PREFIX} from "../utils/Utils";
import {Box,Typography,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow } from '@mui/material';
import Parser from "rss-parser";

const PodcastDetails =(props)=>{

    const [episodes,setEpisodes]=useState([])

      useEffect(()=>{          
        
        async function getEpisodes(){            
           
            const parser = new Parser();
            let episodes = [];
            const feed = await parser.parseURL(`${CORS_PREFIX}${props.podcastresume.feedUrl}`);
            feed.items.forEach(episode => {
              episodes.push({
                id: episode.guid,
                title: episode.title,
                date: episode.pubDate,
                duration: episode.itunes.duration,
                content: episode.content,
                url: episode.enclosure.url
              });
            });
            setEpisodes(episodes);
        }
        getEpisodes();
    },[])

      
    return (
       /*  <Link
        to={`/podcast/${props.podcastresume.id}/episodes/:episodeId`}
        > */
        <>
            <Paper elevation={1} sx={{ minWidth: 650,height:"auto", textAlign:"left", padding:"10px"}}>
                    <Typography  variant="h4" fontWeight="bold">
                    Episodes:
                    </Typography>
                </Paper>       
            
            
            <TableContainer component={Paper} sx={{marginTop:"2vh"}}>
                <Table sx={{ minWidth: 650}} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Duration</TableCell>
                      
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {episodes.length?.map((episode) => (
                        <TableRow
                            key={episode.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {episode.title}
                            </TableCell>
                            <TableCell align="right">{episode.date}</TableCell>
                            <TableCell align="right">{episode.duration}</TableCell>
                          
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    //   </Link> 
      );
}

export default PodcastDetails;