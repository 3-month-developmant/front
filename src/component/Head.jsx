import React from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItem from '@material-ui/core/ListItem'
import { Container } from '@material-ui/core';
import Link from '@material-ui/core/Link';
const Head=()=>{
    const [anchorEl,setAnchorEl]=React.useState(null);
    
    const handleClick=(e)=>{
        setAnchorEl(e.currentTarget);
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
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    メニュー
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} href='/'>Home</MenuItem>
                    
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <MenuItem onClick={handleClose}><Link href="/DelAccount">DeleteAccount</Link></MenuItem>
            
                
            </Menu>
            </div>
            </div>
        </div>
        
    );
}

export default Head;