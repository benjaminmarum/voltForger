import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
//=========================================================================>
//GameObject Classes
//=========================================================================>
class GameObject {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
  }

  display() {
    console.log(`Displaying game object at (${this.x}, ${this.y}) with sprite ${this.sprite}`);
  }
}
//=========================================================================>
//Resource Classes
//=========================================================================>
export class Resource extends GameObject {
  constructor(x, y, sprite, resourceType) {
    super(x, y, sprite);
    this.resourceType = resourceType;
  }

  display() {
    super.display();
    console.log(`This game object is a resource of type ${this.resourceType}`);
  }
}
//--------------------------------------->
//Gold Class ---------------------------->
export class Gold extends Resource {
  image = 'library/assets/img/pngs'
  constructor(x, y) {
    super(x, y, 'gold.png', 'gold');
  }
}
//Lithium Class ---------------------------->
export class Lithium extends Resource {
  constructor(x, y) {
    super(x, y, 'lithium.png', 'lithium');
  }
}
//Silicon Class ---------------------------->
export class Silicon extends Resource {
  constructor(x, y) {
    super(x, y, 'silicon.png', 'silicon');
  }
}
//Iron Class ---------------------------->
export class Iron extends Resource {
  constructor(x, y) {
    super(x, y, 'iron.png', 'iron');
  }
}
//Wood Class ---------------------------->
export class Jungle extends Resource {
  constructor(x, y) {
    super(x, y, 'jungle.png', 'wood');
  }
}
//HeavyWoods Class ---------------------->
export class DenseJungle extends Resource {
  constructor(x, y) {
    super(x, y, 'DenseJungle.png', 'wood');
  }
}
//Rainforest Class - Heavy ----------->
export class Rainforest extends Resource {
  constructor(x, y) {
    super(x, y, 'Rainforest.png', 'wood');
  }
}
//=========================================================================>
//Landscape Classes
//=========================================================================>
//Water Class -------------------------------->
export class Water extends Resource {
  constructor(x, y) {
    super(x, y, 'water.png', 'water');
  }
}
//Deep Water Class --------------------------->
export class DeepWater extends Resource {
  constructor(x, y) {
    super(x, y, 'deepwater.png', 'deepwater');
  }
}

//Plains Classes --------------------------->
export class Plains extends Resource {
  constructor(x, y) {
    super(x, y, 'plains.png', 'sunlight');
  }
}
// Hills --------------------------->
export class Hills extends Resource {
  constructor(x, y) {
    super(x, y, 'plains.png', 'wind');
  }
}
// Mountains --------------------------->
export class Mountains extends Resource {
  constructor(x, y) {
    super(x, y, 'plains.png', 'wind');
  }
}
// Mountians --------------------------->
export class Desert extends Resource {
  constructor(x, y) {
    super(x, y, 'mountains.png', 'sunlight');
  }
}
//=========================================================================>
//Building Classes
//=========================================================================>
export class Building extends GameObject {
  constructor(x, y, sprite, buildingType) {
    super(x, y, sprite); // Call the superclass's constructor
    this.buildingType = buildingType;
  }

  display() {
    super.display(); // Call the superclass's display method
    console.log(`This game object is a building of type ${this.buildingType}`);
  }
}

//-------------------------------------->
//Iron Mine Class
export class IronMine extends Building {
  constructor(x, y, sprite) {
    super(x, y, sprite);
    this.buildingType = 'ironmine';
    this.spirit = 'ironmines.png'
  }  
  display() {
    super.display(); // Call the superclass's display method
    console.log(`This game object is a building of type ${this.buildingType}`);
  }
}
//-------------------------------------->
//Gold Mine Class
export class GoldMine extends Building {
  constructor(x, y, sprite) {
    super(x, y, sprite);
    this.buildingType = 'goldmine';
    this.spirit = 'goldmine.png'
  }  
  display() {
    super.display(); // Call the superclass's display method
    console.log(`This game object is a building of type ${this.buildingType}`);
  }
}
//-------------------------------------->
//LumberMill Class
export class LumberjackStation extends Building {
  constructor(x, y, sprite) {
    super(x, y, sprite);
    this.buildingType = 'lumberjackStation ';
    this.spirit = 'lumberjackStation.png'
  }  
  display() {
    super.display(); // Call the superclass's display method
    console.log(`This game object is a building of type ${this.buildingType}`);
  }
}
//-------------------------------------->
//SolarFarm Class
export class SolarFarm extends Building {
  constructor(x, y, sprite) {
    super(x, y, sprite);
    this.buildingType = 'solarfarm';
    this.spirit = 'solarfarm.png'
  }  
  display() {
    super.display(); // Call the superclass's display method
    console.log(`This game object is a building of type ${this.buildingType}`);
  }
}
//-------------------------------------->
//Transporter Class
export class RoboHub extends Building {
  constructor(x, y) {
    super(x, y, 'robohub.png', 'robohub');
  }
}
//-------------------------------------->
//Storage Class
export class Storage extends Building {
  constructor(x, y) {
    super(x, y, 'storage.png', 'storage');
  }
}
//=========================================================================>
//Factory Classes
//=========================================================================>
//Storage Class
export class Factory extends Building {
  constructor(x, y) {
    super(x, y, 'factory.png', 'factory');
  }
}
//=========================================================================>
//Maps Classes
//=========================================================================>
//Ruins Class
export class Ruins extends Building {
  constructor(x, y) {
    super(x, y, 'ruins.png', 'technology');
  }
}
//=========================================================================>
export default GameObject;
//=========================================================================>

