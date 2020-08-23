import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import { Container, Paper } from '@material-ui/core';
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
    },topPostMark:{
        alignItems:'right'
    },root: {
        flexGrow: 1,
    }
}));

const handleClick=(e)=>{

}
const handleClickPost=(e)=>{
    
    window.alert("post");
}
const Home=()=>{
    const classes = useStyles();
    return(    
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3} style={{height:'100%'}}>
                    <Paper>
                    <IconButton
                        variant="contained"
                        color="primary"
                        disableElevation
                        className={classes.button}
                        onClick={handleClick}
                    >
                        <SendIcon/>
                    </IconButton>
                    </Paper>

                    
                </Grid>
                <Grid item xs={6}>
                 
                <Paper onClick={handleClickPost}
                style={{flexDirection: '',justifyContent:'flex-end',height:50,margin:10}}>
                    <span class="message">
                    投稿しよう！    
                    </span>
                {/*
                <IconButton
                    
                    variant="contained"
                    color="primary"
                    disableElevation
                    className={classes.button}
                    
                    onClick={handleClick}
                >
                    <SendIcon/>
                </IconButton>*/
                }
            
                </Paper>
                <Paper style={{height:100,margin:10}}>
                    投稿内容
                </Paper>
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
            
            <Link href='/Signin'>ClaimerにSignin</Link>
            <span class="post">

            </span>
        </div>
        
        
    );
}
export default Home;