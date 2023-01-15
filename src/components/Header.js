import {useContext, useEffect, useState} from 'react';
import { StoreContext } from '../store/StoreProvider';
import { Grid,Divider,Typography,CircularProgress } from '@mui/material';
import {Link} from "react-router-dom";

const Header =()=>{

    const [store, dispatch] = useContext(StoreContext);
    console.log(store)
    
    return (
        <>
            <Grid container spacing={2} marginTop="1vh">
                <Grid item xs={10}>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <Typography variant="h5" color="primary">Podcaster</Typography>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    {store.isLoading&&
                    <CircularProgress/>}                    
                </Grid>        
            </Grid>
            <Divider />
         </>
      );
}

export default Header;