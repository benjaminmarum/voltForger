// GameContext.jsx

import React, { createContext, useState, useEffect } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [gameObjects, setGameObjects] = useState([]);
    const [cameraX, setCameraX] = useState(0);
    const [cameraY, setCameraY] = useState(0);

    useEffect(() => {
        // Fetch game data here and update the state accordingly.
        // For the sake of this example, I'll assume you're using fetch to get your data.
        fetch('./../data/gameData.json')  // Assuming gameData.json is in the public folder. If not, change the path accordingly.
            .then(response => response.json())
            .then(data => {
                // Here, data should be the 2D array you provided.
                const gameObjs = [];
                for (let y = 0; y < data.length; y++) {
                    for (let x = 0; x < data[y].length; x++) {
                        // For each cell in the grid, create a game object.
                        // I'm not sure what your game objects look like, so this is just an example.
                        const gameObject = {
                            x,
                            y,
                            sprite: `/path/to/sprite${data[y][x]}.png`  // Assuming sprite images are named by their type
                        };
                        gameObjs.push(gameObject);
                    }
                }
                setGameObjects(gameObjs);
            });
        // For now, let's just initialize some dummy data.
        const gameObjs = Array(10000).fill().map((_, i) => ({ x: i % 100, y: Math.floor(i / 100), sprite: '/path/to/sprite.png' }));
        setGameObjects(gameObjs);
    }, []);

    const handleKeyDown = (event) => {
        switch (event.key) {
            case 'ArrowUp':
                setCameraY(prevY => prevY - 10);
                break;
            case 'ArrowDown':
                setCameraY(prevY => prevY + 10);
                break;
            case 'ArrowLeft':
                setCameraX(prevX => prevX - 10);
                break;
            case 'ArrowRight':
                setCameraX(prevX => prevX + 10);
                break;
            default:
                break;
        }
    };

    const handleKeyUp = (event) => {
        // Add logic here to stop the camera when keys are released.
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <GameContext.Provider value={{ gameObjects, cameraX, cameraY }}>
            {children}
        </GameContext.Provider>
    );
};
