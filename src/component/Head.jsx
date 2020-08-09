import React from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItem from '@material-ui/core/ListItem'
import { Container } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { render } from 'react-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';


const Head=()=>{
    const [anchorEl,setAnchorEl]=React.useState(null);
    
    const handleClick=(e)=>{
        setAnchorEl(e.currentTarget);
    }
    const handleCloseHome=(e)=>{
        setAnchorEl(null);
        window.location.href="/";
        
    }
    const handleCloseDel=(e)=>{
        setAnchorEl(null);
        window.location.href="/DelAccount";
    }
    const Logout=(e)=>{
        setAnchorEl(null);
        window.location.href="/Signin";
    }
    const handleClose=(e)=>{
        setAnchorEl(null);
    }
    
    return(
            <div>
                <div class="headerparent">
                <div class="header">
                    <span class="sysname">Claimer</span>
                </div>
                <div class="menu">
                <IconButton aria-controls="simple-menu" 
                    aria-haspopup="true" 
                    onClick={handleClick}
                >
                    <MenuIcon/>
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
    
     
    
}



export default Head;