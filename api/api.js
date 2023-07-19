useEffect(() => {
    // Fetch the game data from the server
    fetch('./../data/gameData.json')
        .then(response => response.json())
        .then(data => {
            const gameObjs = [];
            for (let y = 0; y < data.length; y++) {
                for (let x = 0; x < data[y].length; x++) {
                    // Create a game object based on the type
                    let gameObject;
                    switch (data[y][x].type) {
                        case 'resource':
                            if (data[y][x].resourceType === 'gold') {
                                gameObject = new Gold(x, y, `/path/to/sprite${data[y][x].sprite}.png`);
                            } else if (data[y][x].resourceType === 'iron') {
                                gameObject = new Iron(x, y, `/path/to/sprite${data[y][x].sprite}.png`);
                            }
                            break;
                        case 'building':
                            if (data[y][x].buildingType === 'mine') {
                                gameObject = new Mine(x, y, `/path/to/sprite${data[y][x].sprite}.png`);
                            } else if (data[y][x].buildingType === 'storage') {
                                gameObject = new Storage(x, y, `/path/to/sprite${data[y][x].sprite}.png`);
                            }
                            break;
                        default:
                            gameObject = new GameObject(x, y, `/path/to/sprite${data[y][x].sprite}.png`);
                            break;
                    }
                    gameObjs.push(gameObject);
                }
            }
            setGameObjects(gameObjs);
        });
}, []);