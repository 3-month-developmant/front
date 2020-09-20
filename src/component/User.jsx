import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Paper, makeStyles, CardMedia } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
const User=()=>{
    const useStyles=makeStyles((theme)=>({
        button: {
            margin: theme.spacing(1),
        },submitPaper:{
            padding:10,
            margin:10
        },menuPaper:{
            padding:10,
            height:500,
            margin:10
        },profile:{
            height:400,
            padding:10,
            margin:10
        },profilePicture:{
            height:300
        }
    }));
    const handleClick=(e)=>{
        
    }
    const classes = useStyles();
    return(    
        <div>
            <Grid container spacing={0}>
                <Grid item xs={2} sm={2} style={{height:'100%'}}>
                    <Paper className={classes.submitPaper}>
                        <IconButton
                            variant="contained"
                            color="primary"
                            disableElevation
                            className={classes.button}
                            onClick={handleClick}>
                            <SendIcon/>
                        </IconButton>
                    </Paper>
                    <Paper className={classes.menuPaper}>
                        MENU
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Card className={classes.profile}>
                        <CardMedia
                            className={classes.profilePicture}
                            image="P_20191030_200932.jpg"
                        >
                            
                        </CardMedia>
                        <p>須野原爽太</p>
                        <a>あいうえおかきくけこさしすせそ</a>
                    </Card>

                        
                    
                </Grid>
            </Grid>
        </div>
    );
}
export default User;