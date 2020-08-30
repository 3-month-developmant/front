import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import { Container, Paper, TextField } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';


let visibilityState='visible'


const handleClick=(e)=>{

}

const Home=(props)=>{

    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },topPostMark:{
            alignItems:'right'
        },root: {
            flexGrow: 1,
        },submitButton:{
            position:'absolute',
            right:0,
            bottom:0,
            color:"lightblue",
            visibility: visibilityState
        },postPaper:{
            position:'relative',
            flexDirection: '',
            justifyContent:'flex-end',
            height:100,
            margin:10,
            padding:10
        },postContent:{
            position:'relative',
            top:0
        }
    }));
    const handleClickPost=(e)=>{
        
        
    }

    const classes = useStyles();
    return(    
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={0} sm={3} style={{height:'100%'}}>
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
                <Grid item xs={12} sm={6}>
                 
                <Paper onClick={handleClickPost}
                elevation={3}
                className={classes.postPaper}
                >
                    <TextField
                        id="post-text"
                        placeholder="投稿しよう"
                        fullWidth
                        rows={3}
                        multiline
                        className={classes.postContent}
                    />
                    <IconButton
                        variant="contained"
                        color="primary"
                        disableElevation
                        className={classes.submitButton}
                        onClick={handleClick}
                        
                    >
                        <SendIcon/>
                    </IconButton>
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
                <Paper style={{margin:10,padding:10}}>
                    投稿内容
                </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>

                </Grid>
            </Grid>
            
            <Link href='/Signin'>ClaimerにSignin</Link>
            <span class="post">

            </span>
        </div>
        
        
    );
}
export default Home;