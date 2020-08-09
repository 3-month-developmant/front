import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
}));

const handleClick=(e)=>{

}
const Home=()=>{
    const classes = useStyles();
    return(    
        <Container>
            <span class="post">
                <IconButton
                    variant="contained"
                    color="primary"
                    disableElevation
                    className={classes.button}
                    onClick={handleClick}
                >
                    <SendIcon/>
                </IconButton>
            </span>

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
            <span class="post">
                <IconButton
                    variant="contained"
                    color="primary"
                    disableElevation
                    className={classes.button}
                    onClick={handleClick}
                >
                    <SendIcon/>
                </IconButton>
            </span>
        </Container>
    );
}
export default Home;