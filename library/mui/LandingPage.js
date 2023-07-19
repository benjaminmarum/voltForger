// LandingPage.js
import React from 'react';
import { Box } from '@mui/material';
import themeUI from './../theme';

import Background from "../assets/img/abstract-elegant-dark-blue-vector.png"

function LandingPage() {
    // A Box is a basic component in Material-UI. It's a blank container that can
    // have custom styles applied to it. Here we're giving it a height of 100vh
    // (which means 100% of the viewport height), a background color, and center-aligned text.
    return (
        <Box sx={{
            height: '90vh',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            backgroundColor: themeUI.palette.background.main, 
            backgroundImage: `url(${Background})`,
            color: themeUI.palette.secondary.main,
            overflow: 'clip', // Enable scrolling if content overflows
        }}>
            <h1>Landing Page</h1>
        </Box>
    );
}

export default LandingPage;
