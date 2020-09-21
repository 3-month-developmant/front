import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

const Menu = () => {
  // 投稿ボタン用
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const useStyles = makeStyles(() => ({
    submitPaper: {
      padding: 10,
      margin: 10,
    },
    menuPaper: {
      padding: 10,
      height: 500,
      margin: 10,
    },
    postContent: {
      position: 'relative',
      top: 0,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.submitPaper}>
        <IconButton
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          onClick={handleClickOpen}
        >
          <SendIcon />
        </IconButton>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" margin={3}>
          <DialogTitle id="form-dialog-title">投稿を作成する</DialogTitle>
          <TextField
            rows={3}
            padding={3}
            className={classes.postContent}
            multiline
          />
          <DialogActions>
            <IconButton onClick={handleClose}>
              <SendIcon />
            </IconButton>
          </DialogActions>
        </Dialog>
      </Paper>
      <Paper className={classes.menuPaper}>
        MENU
      </Paper>
    </div>
  );
};

export default Menu;
