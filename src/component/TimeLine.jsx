import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container, makeStyles, Paper, TextField } from '@material-ui/core';

const TimeLine=()=>{
    const sample=require('./sample_data.json');
    const useStyles=makeStyles((theme)=>({
        postPaper:{
            position:'relative',
            flexDirection: '',
            justifyContent:'flex-end',
            height:100,
            margin:10,
            padding:10,
            flexGrow:1
        }
    }))
    const classes=useStyles();
    let time_line=[];
    //time_line.push(<Grid>);
    for(let i=0;i<sample.length;++i){//タイムラインを結合する
        time_line.push(<Paper
            elevation={1}
            className={classes.postPaper}
        >
                {sample[i].name}
                <br/>
                {sample[i].text}
                <br/>
                {sample[i].date}
            </Paper>);
    }
    //time_line.push(</Grid>);
    return time_line;
}
export default TimeLine;