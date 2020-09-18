import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { Avatar, CardContent,IconButton, makeStyles} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { red } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import { MoreVert } from '@material-ui/icons';
import CardActions from '@material-ui/core/CardActions';
import Favorite from '@material-ui/icons/Favorite';

const TimeLine=()=>{
    const sample=require('./sample_data.json');

    const useStyles=makeStyles((theme)=>({
        postPaper:{
            position:'relative',
            flexDirection: '',
            justifyContent:'flex-end',
            margin:10,
            padding:10,
            flexGrow:1
        },avater:{
            backgroundColor: red[500],
        }
    }));
    const classes=useStyles();
    let time_line=[];
    
    //const [favoriteState,setFavorite]=useState([]);
    /*const newFavoriteState = (favocolor) =>{
        setFavorite(favocolor);
    }*/
    //time_line.push(<Grid>);
    for(let i=0;i<sample.length;++i){//タイムラインを結合する
        const handleClick=(e)=>{
            //window.alert(i);            /** ここにリアクションボタンの動作処理を記述 */
            /*if(favoriteState[i]===""){
                newFavoriteState("secondary")
            }*/
        }
        //newFavoriteState("");
        time_line.push(
        <Card
            elevation={1}
            className={classes.postPaper}>
                {/*ユーザ名とアイコン*/}
            <CardHeader 
                avater={
                    <Avatar aria-label="recipe" className={classes.avater}>T</Avatar>
                }
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
                title={sample[i].name}
                subheader={sample[i].date}
            />
            <CardContent>
                <br/>
                {sample[i].text}
                <br/>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton 
                    color="primary"
                    onClick={handleClick}
                    aria-label="add to favorites"
                >
                    <Favorite />
                </IconButton>
            </CardActions>
        </Card>);
    }
    //time_line.push(</Grid>);
    return time_line;
}
export default TimeLine;