// Game.jsx
import React, { useContext } from "react";
import { Stage, Layer } from 'react-konva';
import { GameContext } from './GameProvider';
import Grid from '@mui/material/Unstable_Grid2';

import GameObjectComponent from './GameObjectComponent';

function Game() {
  const { gameObjects } = useContext(GameContext);
  return (
    <Stage width={window.innerWidth * 0.8} height={window.innerHeight * 0.8}>
      <Layer>
        {gameObjects.map((row, y) => row.map((gameObject, x) =>
          <GameObjectComponent key={`${x},${y}`} gameObject={gameObject} />
        ))}
      </Layer>
    </Stage>
  );
};

export default Game

