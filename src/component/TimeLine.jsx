import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { Avatar, CardContent,IconButton, makeStyles} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { red } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import { MoreVert } from '@material-ui/icons';
import CardActions from '@material-ui/core/CardActions';
import Favorite from '@material-ui/icons/Favorite';
import CardComponent from './Card';

const TimeLine=()=>{
    const sample=require('./sample_data.json');
    const time_line=sample.map(item=>CardComponent(item.name,item.date,item.text));
    return time_line;
}
export default TimeLine;