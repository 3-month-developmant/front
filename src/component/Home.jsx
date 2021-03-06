/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import 'whatwg-fetch';
import Menu from './Menu';
import TimeLine from './TimeLine';

const Home = () => {
  const [visibilityState, setVisible] = useState('hidden');
  const [text, setText] = useState('');

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    topPostMark: {
      alignItems: 'right',
    },
    root: {
      flexGrow: 1,
    },
    submitButton: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      color: 'lightblue',
      visibility: visibilityState,
    },
    postPaper: {
      position: 'relative',
      flexDirection: '',
      justifyContent: 'flex-end',
      height: 100,
      margin: 10,
      padding: 10,
    },
    timeLine: {
      padding: 40,
    },
  }));
  const handleClickPost = () => {
    const data = { text };
    fetch('http://localhost:8080/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      mode: 'cors',

    }).then((res) => {
      res.json();
    });
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={2} sm={2} style={{ height: '100%' }}>
          <Menu />
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
                (e) => {
                  if (e.target.value !== '') { // 入力フォームに入力があれば
                    setVisible('visible');// ボタンをvisible
                    setText(e.target.value);// TextFieldの値を取得
                  } else {
                    setVisible('hidden');// ボタンをhidden
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
              <SendIcon />
            </IconButton>
          </Paper>
          <TimeLine
            className={classes.timeLine}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
