// GamePage.jsx
import React, { useState } from 'react';  // Import useState hook
import { Box, Grid, Paper } from '@mui/material';
import themeUI from '../../theme';
import { width } from '@mui/system';

import Game from '../game/Game';
import { GameProvider } from '../game/GameProvider'; // Import GameProvider

function GamePage() {
    
    const [gameStarted, setGameStarted] = useState(false); // Create a state variable to track whether the game has started
    const [loading, setLoading] = useState(false); // Create a state variable to track whether the game is loading

    function startGame() {
        setLoading(true);
        setGameStarted(true);
        // After 3 seconds, set loading to false
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }
    return (
        <GameProvider>
            <Box sx={{
                width: '80vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: themeUI.palette.background.main,
                color: themeUI.palette.secondary.main,
            }}>
                <div>
                    <h1>Game Page</h1>
                    {loading ? (
                        <div>
                            Loading...
                        </div>
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
