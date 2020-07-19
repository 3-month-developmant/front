import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const Home=()=>{
    return(    
        <Container>
        <Typography component="h1" variant="h5">
        Claimer Home
        </Typography>
        <Link href='/Signin'>ClaimerにSignin</Link>
        </Container>
    );
}
export default Home;