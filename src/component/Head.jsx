import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const Head = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseHome = () => {
    setAnchorEl(null);
    window.location.href = '/';
  };
  const handleCloseDel = () => {
    setAnchorEl(null);
    window.location.href = '/DelAccount';
  };
  const Logout = () => {
    setAnchorEl(null);
    window.location.href = '/Signin';
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="headerparent">
        <div className="header">
          <span className="sysname">Claimer</span>
        </div>
        <div className="menu">
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleCloseHome}>Home</MenuItem>
            <MenuItem onClick={Logout}>Logout</MenuItem>
            <MenuItem onClick={handleCloseDel}>DeleteAccount</MenuItem>
          </Menu>
        </div>
      </div>
    </div>

  );
};
export default Head;
