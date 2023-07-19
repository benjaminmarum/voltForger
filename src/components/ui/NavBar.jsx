import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PortraitIcon from '@mui/icons-material/Portrait';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import CodeIcon from '@mui/icons-material/Code';

import themeUI from '../../theme';


function Navbar() {

    return (
        <AppBar position="static" color="secondary" sx={{
            p: 2, 
            backgroundColor: themeUI.palette.background.secondary,
            color: themeUI.palette.secondary.contrastText,
            height: '5vh',
            display: "flex",
            justifyContent:"center",
        }}>
            <Toolbar>
                <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'start',
                    flexGrow: 1 
                    }}>
                    <Typography variant="h7" component="div">
                    ⚡VoltForge⚡
                    </Typography>
                </Box>
                <IconButton color="inherit" aria-label="menu" component={RouterLink} to="/">
                    <HomeIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="menu" component={RouterLink} to="/user">
                    <PortraitIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="menu" component={RouterLink} to="/game">
                    <VideogameAssetIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="menu" component={RouterLink} to="/dev">
                    <CodeIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
