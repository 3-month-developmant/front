import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, Paper, TextField } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import 'whatwg-fetch';

let visibilityState='visible'

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

const Home=()=>{
    const [text,setText]=useState("");
    const handleClickPost=(e)=>{
        if(text===""){
            window.alert("不正");
        }else{
            fetch('',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringfy({
                    text:text
                })
            })
            window.alert(text);
        }

    }
    const handleClick=(e)=>{
        

    }
    

    const classes = useStyles();
    
    return(   
        
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={0} sm={3} style={{height:'100%'}}>
                    <Paper>
                        <IconButton
                            variant="contained"
                            color="primary"
                            disableElevation
                            className={classes.button}
                            onClick={handleClick}>
                            <SendIcon/>
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={9} md={6}>
                
                <Paper
                    elevation={3}
                    className={classes.postPaper}
                >
                    <TextField

                        id="post_text"
                        placeholder="投稿しよう！"
                        fullWidth
                        rows={3}
                        multiline
                        className={classes.postContent}
                        onChange={
                            (e)=>{
                                setText(e.target.value)//TextFieldの値を取得
                            }
                        }
                    />
                    
                    <IconButton
                        variant="contained"
                        color="primary"
                        disableElevation
                        className={classes.submitButton}
                        onClick={handleClickPost}
                        type="submit"
                    >
                        <SendIcon/>
                    </IconButton>

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