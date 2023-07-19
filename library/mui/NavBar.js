import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalculateIcon from "@mui/icons-material/Calculate";
import ImageIcon from "@mui/icons-material/Image";

import themeUI from './../theme';


function Navbar() {

    return (
        <AppBar position="static" color="secondary" sx={{
            p: 2, 
            backgroundColor: themeUI.palette.background.walnut,
            color: themeUI.palette.secondary.main,
            height: '10vh',
            display: "flex",
            justifyContent:"center",
        }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h7" component="div">
                        My App
                    </Typography>
                </Box>
                <IconButton color="inherit" aria-label="menu" component={RouterLink} to="/">
                    <HomeIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="menu" component={RouterLink} to="/form">
                    <AssignmentIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="menu" component={RouterLink} to="/calculation">
                    <CalculateIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="menu" component={RouterLink} to="/drawing">
                    <ImageIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
