import React, { useState } from 'react';
import {
  Avatar, CardContent, IconButton, makeStyles,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { red } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Favorite from '@material-ui/icons/Favorite';

const CardComponent = (uid, name, date, text) => {
  const useStyles = makeStyles((theme) => ({
    postPaper: {
      position: 'relative',
      flexDirection: '',
      justifyContent: 'flex-end',
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    avater: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
    },
  }));
  const [flag, setFlag] = useState(Boolean);
  const classes = useStyles();

  const handleClick = () => {
    setFlag(!flag);
  };
  const moveUserPage = () => {
    window.location.href = `/${uid}`;
  };
  return (
    <Card
      elevation={1}
      className={classes.postPaper}
    >
      {/* ユーザ名とアイコン */}
      <CardHeader
        avatar={
          <Avatar display="flex" className={classes.avater} onClick={moveUserPage}>T</Avatar>
                }
        title={name}
        subheader={date}
      />
      <CardContent>
        <br />
        {text}
        <br />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          color={flag ? 'secondary' : ''} // "" or "secondary"
          onClick={handleClick}
          aria-label="add to favorites"
        >
          <Favorite />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
