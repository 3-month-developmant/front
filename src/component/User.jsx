import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const User=()=>{
    
    return(    
        <Container>
            <Typography component="h1" variant="h5">
            Claimer Home
            </Typography>
            <Grid
                Container
                direction="row"
                justify="center"
                alignItems="center"
            >
                
            </Grid>
            <Divider />
            <Box component="span" m={1}>
            </Box>
            <Divider />
            <Link href='/Signin'>ClaimerにSignin</Link>
            
        </Container>
    );
}
export default User;