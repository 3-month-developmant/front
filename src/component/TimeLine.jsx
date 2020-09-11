import React from 'react';
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
            padding:10
        }
    }))
    let time_line=[];
    for(let i=0;i<sample.length;++i){//タイムラインを結合する
        time_line.push(<Paper
            className={useStyles.postPaper}
        >
                {sample[i].name}
                <br/>
                {sample[i].text}
                <br/>
                {sample[i].date}
            </Paper>);
    }
    return time_line;
}
export default TimeLine;