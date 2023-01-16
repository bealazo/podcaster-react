import {Link} from "react-router-dom";
import {Typography,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow } from '@mui/material';


const PodcastDetails =(props)=>{

    
    return (
     
        <>
            <Paper elevation={1} sx={{ minWidth: 650,height:"auto", textAlign:"left", padding:"10px"}}>
                    <Typography  variant="h5" fontWeight="bold">
                    Episodes: {props.podcastresume.episodes.length>0?props.podcastresume.episodes.length:null}                   
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
                    {props.podcastresume.episodes.length>0?props.podcastresume.episodes.map((episode) => (
                        <TableRow
                            key={episode.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                          
                             <TableCell component="th" scope="row">
                                <Link
                                to={`/podcast/${props.podcastresume.id}/episodes/${episode.id}`} state={{episode: episode}}  style={{textDecoration: 'none'}}                         
                                 >
                                    {episode.title}
                                </Link>
                                </TableCell>
                           
                            <TableCell align="right">{episode.date}</TableCell>
                            <TableCell align="right">{episode.duration}</TableCell>
                          
                        </TableRow>
                    )):null}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    
      );
}

export default PodcastDetails;