// GamePage.jsx
import React, { useState } from 'react';  // Import useState hook
import { Box, Grid, Paper } from '@mui/material';
import themeUI from '../../theme';
import { width } from '@mui/system';

function GamePage() {
    // Create a state variable to track whether the game has started
    const [gameStarted, setGameStarted] = useState(false);
    // A Box is a basic component in Material-UI. It's a blank container that can
    // have custom styles applied to it. Here we're giving it a height of 100vh
    // (which means 100% of the viewport height), a background color, and center-aligned text.
    return (
        <Box sx={{
            width: '80vw',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            backgroundColor: themeUI.palette.background.main,
            //backgroundImage: `url(${Background})`,
            color: themeUI.palette.secondary.main,
        }}>

            <div>
                <h1>Game Page</h1>
                {gameStarted ? <Game /> : <button onClick={() => setGameStarted(true)}>Start Game</button>}
            </div>

        </Box>
    );
}

export default GamePage;
