// Game.jsx
import React, { useContext } from "react";
import { Stage, Layer } from 'react-konva';
import { GameContext } from './GameContext';
import Grid from '@mui/material/Unstable_Grid2';

import GameObject from './GameObject';

function Game() {
  const { gameObjects, cameraX, cameraY } = useContext(GameContext);


  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer offsetX={-cameraX} offsetY={-cameraY}>
        <Grid container spacing={2}>
          {gameObjects.map((gameObjectData, index) => (
            <Grid item key={index} xs={1}>
              <GameObject data={gameObjectData} />
            </Grid>
          ))}
        </Grid>
      </Layer>
    </Stage>
  );

}

export default Game
