//Basic
function generateMapBasic(width, height, gameObjectClasses, distribution) {
    const map = [];
    for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
            const gameObjectClass = chooseRandomly(gameObjectClasses, distribution);
            row.push(new gameObjectClass(x, y));
        }
        map.push(row);
    }
    return map;
}

//Intermediate: Chunked game objects
function generateMapIntermediate(width, height, gameObjectClasses, distribution) {
    const map = [];
    for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
            let gameObjectClass;
            if (Math.floor(x / 10) % 2 === 0 && Math.floor(y / 10) % 2 === 0) {
                gameObjectClass = Gold;
            } else {
                gameObjectClass = Iron;
            }
            row.push(new gameObjectClass(x, y));
        }
        map.push(row);
    }
    return map;
}

//Advanced: Variable chunk sizes
function generateMapAdvanced(width, height, gameObjectClasses, distribution) {
    const map = [];
    let currentType = null;
    let chunkSize = 0;
    for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
            if (chunkSize === 0) {
                currentType = chooseRandomly(gameObjectClasses, distribution);
                chunkSize = Math.floor(Math.random() * 10) + 1; // Random chunk size between 1 and 10
            }
            row.push(new currentType(x, y));
            chunkSize--;
        }
        map.push(row);
    }
    return map;
}

//Advaced: Grid-based distribution
const generateGrid = () => {
    // Generate a 100x100 grid
    const grid = [];
    for (let y = 0; y < 100; y++) {
        const row = [];
        for (let x = 0; x < 100; x++) {
            // Determine the major type for this 10x10 subgrid
            let majorType;
            if (Math.floor(x / 10) % 2 === 0 && Math.floor(y / 10) % 2 === 0) {
                majorType = Gold;
            } else {
                majorType = Iron;
            }

            // Mostly generate the major type, but occasionally generate a random type
            let gameObjectClass;
            if (Math.random() < 0.8) {
                gameObjectClass = majorType;
            } else {
                gameObjectClass = gameObjectClasses[Math.floor(Math.random() * gameObjectClasses.length)];
            }

            // Add the game object to the row
            row.push(new gameObjectClass(x, y));
        }
        // Add the row to the grid
        grid.push(row);
    }
    console.log(grid);
}

//Expert: Noise-based distribution
function generateMapExpert(width, height, gameObjectClasses, distribution) {
    const map = [];
    for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
            const noiseValue = noise(x, y);
            let gameObjectClass;
            if (noiseValue < 0.33) {
                gameObjectClass = Gold;
            } else if (noiseValue < 0.66) {
                gameObjectClass = Iron;
            } else {
                gameObjectClass = Wood;
            }
            row.push(new gameObjectClass(x, y));
        }
        map.push(row);
    }
    return map;
}

function generateMapMaster(width, height, gameObjectClasses, distribution) {
    const map = [];
    let currentType = null;
    let chunkSize = 0;
    for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
            if (chunkSize === 0) {
                const noiseValue = noise(x, y);
                if (noiseValue < 0.33) {
                    currentType = Gold;
                } else if (noiseValue < 0.66) {
                    currentType = Iron;
                } else {
                    currentType = Wood;
                }
                chunkSize = Math.floor(Math.random() * 10) + 1; // Random chunk size between 1 and 10
            }
            row.push(new currentType(x, y));
            chunkSize--;
        }
        map.push(row);
    }
    return map;
}

function generateMapGrandmaster(width, height, gameObjectClasses, distribution) {
    const map = [];
    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        let gameObjectClass;
        if (x > 0 && y > 0 && (map[y-1][x-1] instanceof Iron || map[y-1][x] instanceof Iron || map[y][x-1] instanceof Iron)) {
          gameObjectClass = Gold; // Gold is more likely to appear near Iron
        } else {
          gameObjectClass = chooseRandomly(gameObjectClasses, distribution);
        }
        row.push(new gameObjectClass(x, y));
      }
      map.push(row);
    }
    return map;
  }
  
//Grandmaster: Map class
  class Map {
    constructor(width, height, gameObjectClasses, distribution) {
      this.width = width;
      this.height = height;
      this.gameObjectClasses = gameObjectClasses;
      this.distribution = distribution;
      this.map = this.generateEmptyMap();
    }
  
    generateEmptyMap() {
      const map = [];
      for (let y = 0; y < this.height; y++) {
        const row = [];
        for (let x = 0; x < this.width; x++) {
          row.push(null); // Initially all spots are null
        }
        map.push(row);
      }
      return map;
    }
  
    generateView(playerX, playerY, viewWidth, viewHeight) {
      const view = [];
      for (let y = playerY - viewHeight / 2; y < playerY + viewHeight / 2; y++) {
        const row = [];
        for (let x = playerX - viewWidth / 2; x < playerX + viewWidth / 2; x++) {
          if (this.map[y][x] === null) {
            const gameObjectClass = chooseRandomly(this.gameObjectClasses, this.distribution);
            this.map[y][x] = new gameObjectClass(x, y);
          }
          row.push(this.map[y][x]);
        }
        view.push(row);
      }
      return view;
    }
  }
  
  // Then, in your game logic, you would create a Map object and call generateView() every time the player moves:
  const gameMap = new Map(1000, 1000, gameObjectClasses, distribution);
  let playerX = 500;
  let playerY = 500;
  let view = gameMap.generateView(playerX, playerY, 100, 100);