import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem'
import { Container } from '@material-ui/core';
const Head=()=>{
    const handleClick=(e)=>{
        this.open();
    }
    const handleClose=(e)=>{
        this.close();
    }
    
    return(
        <Container>
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
                
                keepMounted
                
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>ホーム</MenuItem>
                <MenuItem onClick={handleClose}></MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            </div>
            </div>
        </Container>
        
    );
}

export default Head;