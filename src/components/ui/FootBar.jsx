import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Breadcrumbs, IconButton, Link, Typography, Box } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FootMenu from './FootMenu';

import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import GitHubIcon from '@mui/icons-material/GitHub';


import themeUI from '../../theme';


function Footbar() {


    return (
        <Box sx={{
            height: '5vh',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            backgroundColor: themeUI.palette.background.main,
            //backgroundImage: `url(${Background})`,
            color: themeUI.palette.secondary.main,
            overflow: 'clip', // Enable scrolling if content overflows
        }}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                >
                    <GitHubIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Git
                </Link>
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Core
                </Link>
                <FootMenu/>
            </Breadcrumbs>
        </Box>
    );
}

export default Footbar;
