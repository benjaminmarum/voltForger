export function generateWorld() {

    //Define the number of layers
    const numberOfLayers = 1;

    // Define your game object classes here...
    const gameObjectClasses = [Gold, Iron, Lithium, Silicon, Jungle, DenseJungle, Rainforest, Water, DeepWater, Plains, Hills, Mountains, Desert, IronMine, GoldMine, LumberjackStation, SolarFarm, RoboHub, Storage, Factory, Ruins];
    // Define Distribution of map objects
    const resourceDistribution = {
        Gold: 0.025,
        Iron: 0.075,
        Lithium: 0.025,
        Silicon: 0.025,
        Jungle: 0.12,
        DenseJungle: 0.075,
        Rainforest: 0.05,
        Water: 0.12,
        DeepWater: 0.05,
        Plains: 0.15,
        Hills: 0.075,
        Mountains: 0.075,
        Desert: 0.125,
        Ruins: 0.01,
    };
    const sum = Object.values(resourceDistribution).reduce((a, b) => a + b, 0);
    // Verify that the distribution adds up to 1
    console.log(sum);
    if (sum !== 1) {
        throw new Error("The distribution does not add up to 1");
    }
    // Generate a cumulative distribution
    // Generate a cumulative distribution
    let cumulativeDistribution = [];
    let sum2 = 0;
    for (let key in resourceDistribution) {
        sum2 += resourceDistribution[key];
        cumulativeDistribution.push(sum2);
    }
    console.log(cumulativeDistribution);
    // Create a 2D array of random game objects
    let gameWorld = [];
    for (let y = 0; y < worldSize; y++) {
        const row = [];
        for (let x = 0; x < worldSize; x++) {
            // Generate a random number between 0 and 1
            const rand = Math.random();
            // Find the index of the first class in the cumulative distribution that is greater than the random number
            const index = cumulativeDistribution.findIndex(d => d > rand);

            // Create a new game object of the selected class and add it to the row
            row.push(new gameObjectClasses[index](x, y));
        }
        // Add the row to the grid
        gameWorld.push(row);
    }
}