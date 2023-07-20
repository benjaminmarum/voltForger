// LandingPage.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import themeUI from '../../theme';
import { GameContext } from '../game/GameProvider';


function LandingPage() {
    //const gameData = useGameWorld();

    function useGameWorld() {
        const [gameData, setGameData] = React.useState(null);
        React.useEffect(() => {
            const data = generateWorld();
            setGameData(data);
        }, []);
        return gameData;
    }

    return (
            <Box sx={{
                height: '85vh',
                width: '90vw',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'center',
                backgroundColor: themeUI.palette.background.main,
                //backgroundImage: `url(${Background})`,
                color: themeUI.palette.secondary.light,
                overflow: 'clip', // Enable scrolling if content overflows
            }}>
                <Typography variant="h6" component="div">
                    My Header
                </Typography>
            </Box>
    );
}

export default LandingPage;
