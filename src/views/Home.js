import { Box, Grid,TextField,Chip,Stack } from '@mui/material';

const Home =()=>{

    return (
        
        <>
            <Box display="flex" justifyContent='end' flexDirection="row" gap="5" marginTop="1vh">
                <Stack direction="row" spacing={1}>
                    <Chip label="100" color="primary"/>
                    <TextField id="outlined-basic" label="Filter podcasts..." variant="outlined" size="small" />
                </Stack>
               
            </Box>
            <Box display="flex" flexDirection="row" justifyContent='center'>
                <Box width="70vw">
                <Grid container spacing={{ xs: 1}} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(100)).map((_, index) => (
                        <Grid item xs={2} sm={3} md={3} key={index} display="flex" flexDirection="row" justifyContent='center' >
                            <p>xs=2</p>
                        </Grid>
                    ))}
                </Grid>
                </Box>
            </Box>
       </>
     
      );
}

export default Home;