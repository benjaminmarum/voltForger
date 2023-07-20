// Game.jsx
import React, { useContext } from "react";
import { Stage, Layer } from 'react-konva';
import { GameContext } from './GameProvider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import GameObjectComponent from './GameObjectComponent';

function Game() {
  const { gameObjects } = useContext(GameContext);
  return (
    <Box
      position="absolute"
      top="calc(50vh - 540px)"  // 50% of the viewport height minus half the height of the Stage
      left="calc(50vw - 960px)"  // 50% of the viewport width minus half the width of the Stage{100}  // 100px from the left of the page
      width={1920}  // The width of the Stage
      height={1080}  // The height of the Stage
    >
      <Stage width="100%" height="100%" >
        <Layer>
          {gameObjects.map((row, y) => row.map((gameObject, x) =>
            <GameObjectComponent key={`${x},${y}`} gameObject={gameObject} />
          ))}
        </Layer>
      </Stage>
    </Box>
  );
};

export default Game

