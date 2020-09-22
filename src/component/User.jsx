import React from 'react';
import { makeStyles, CardMedia, Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TimeLine from './TimeLine';
import Menu from './Menu';

const User = () => {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    submitPaper: {
      padding: 10,
      margin: 10,
    },
    menuPaper: {
      padding: 10,
      height: 500,
      margin: 10,
    },
    profile: {
      position: 'relative',
      height: 400,
      padding: 10,
      margin: 10,
    },
    profilePicture: {
      height: 300,
    },
    profileAvatar: {
      position: 'absolute',
      width: theme.spacing(15),
      height: theme.spacing(15),
      top: 188,
    },
  }));
  const handleClick = () => {

  };
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={2} sm={2} style={{ height: '100%' }}>
          <Menu />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <Card className={classes.profile}>
            <Avatar className={classes.profileAvatar} />
            <CardMedia
              object-fit
              className={classes.profilePicture}
              image="P_20191030_200932.jpg"
            />
            <b>須野原爽太</b>
            <p>あいうえおかきくけこさしすせそ</p>
          </Card>
          <TimeLine />
        </Grid>
      </Grid>
    </div>
  );
};
export default User;
