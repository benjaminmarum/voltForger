// GameObject.jsx
import React, { useEffect, useState } from "react";
import { Image } from 'react-konva';
import useImage from 'use-image';

function GameObject({ data }) {
  const { x, y, imageUrl } = data;
  const [image] = useImage(imageUrl);

  return <Image x={x} y={y} image={image} />;
}

export default GameObject;