// Note: Cumulative Generator
// import { Gold, Iron, Woods, HeavyWoods, JungleWoods, HeavyJungle, Water, DeepWater, Plains, Hills, Desert, IronMine, GoldMine, LumberjackStation, SolarFarm, RoboHub, Storage, Factory, Ruins } from '../../src/components/game/GameObject';

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
console.log(sum); // This will print the sum of all values in the object