import useImage from 'use-image';
import { tileSize, worldSize } from '../../../constants';
import { Rect } from 'react-konva';

const GameObjectComponent = ({ gameObject }) => {
    const [image] = useImage(gameObject.sprite);

    if (!image) {
        // The image hasn't loaded yet, render a placeholder
        return (
            <Rect
                x={gameObject.x * tileSize}
                y={gameObject.y * tileSize}
                width={tileSize}
                height={tileSize}
                fill='gray'
            />
        );
    }

    // The image has loaded, render it
    return (
        <Image
            image={image}
            x={gameObject.x * tileSize}
            y={gameObject.y * tileSize}
            width={tileSize}
            height={tileSize}
        />
    );
};