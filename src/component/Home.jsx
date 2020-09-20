/* eslint-disable react/jsx-no-undef */
import React,{useState} from 'react';
import { Paper, TextField } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import 'whatwg-fetch';
import TimeLine from './TimeLine';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
const Home=()=>{
    const [visibilityState,setVisible]=useState("hidden");
    const [text,setText]=useState("");
    //投稿ボタン用
    const [open,setOpen]=React.useState(false);

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
        },menuPaper:{
            padding:10,
            height:500,
            margin:10
        },submitPaper:{
            padding:10,
            margin:10
        },timeLine:{
            padding:40
        }
    }));
    const handleClickPost=(e)=>{
        if(text===""){
            window.alert("不正");
        }else{
            const data={text:text};
            fetch('http://localhost:8080/',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(data),
                mode:'cors'

            }).then(res=>{
                res.json();
            })
        }
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const handleClickOpen=(e)=>{
        setOpen(true);
    }
    const classes = useStyles();
    
    return(   
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={2} sm={2} style={{height:'100%'}}>
                    <Paper className={classes.submitPaper}>
                        <IconButton
                            variant="contained"
                            color="primary"
                            disableElevation
                            className={classes.button}
                            onClick={handleClickOpen}>
                            <SendIcon/>
                        </IconButton>
                        <Dialog open={open} onclose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">投稿を作成する</DialogTitle>
                            <TextField
                                rows={3}
                                multiline
                            />
                            <DialogActions>
                                <IconButton onClick={handleClose}>
                                    <SendIcon/>
                                </IconButton>
                            </DialogActions>
                        </Dialog>
                    </Paper>
                    <Paper className={classes.menuPaper}>
                        MENU
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={10} md={6}>
                
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
                                    if(e.target.value!==""){//入力フォームに入力があれば
                                        setVisible("visible")//ボタンをvisible
                                        setText(e.target.value)//TextFieldの値を取得
                                    }else{
                                        setVisible("hidden")//ボタンをhidden
                                    }
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
                    <TimeLine
                        className={classes.timeLine}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
export default Home;
/*
<Link href='/Signin'>ClaimerにSignin</Link>
<span class="post">
</span>
*/