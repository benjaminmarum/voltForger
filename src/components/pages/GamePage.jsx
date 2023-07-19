// GamePage.jsx
import React, { useState } from 'react';  // Import useState hook
import { Box, Grid, Paper } from '@mui/material';
import themeUI from '../../theme';
import { width } from '@mui/system';

import Game from '../game/Game';
import { GameProvider } from '../game/GameProvider'; // Import GameProvider

function GamePage() {
    // Create a state variable to track whether the game has started
    const [gameStarted, setGameStarted] = useState(false);
    const [loading, setLoading] = useState(false);
    // A Box is a basic component in Material-UI. It's a blank container that can
    // have custom styles applied to it. Here we're giving it a height of 100vh
    // (which means 100% of the viewport height), a background color, and center-aligned text.
    function startGame() {
        setLoading(true);
        setGameStarted(true);
        // After 3 seconds, set loading to false
        setTimeout(() => {
            setLoading(false);
        }, 6000);
    }
    return (
        <GameProvider> 
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
                {loading ? (
                    <div>Loading...</div>
                ) : gameStarted ? (
                    <Game />
                ) : (
                    <button onClick={startGame}>Start Game</button>
                )}
            </div>
        </Box>
        </GameProvider>  // Close the GameProvider tag
    );
}

export default GamePage;
