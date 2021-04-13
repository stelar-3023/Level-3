// Imports and Modules
import { square, diag } from "./lib.js";

console.log(square(11));
console.log(diag(4, 3));

// Classes and Object Constructors
class House {
  constructor(color) {
    this.color = color
  }
  getFurniture() {
    return "sofa"
  }
}

const houseObject  = new House("red")
const houseObject2 = new House("blue")

console.log(houseObject.color)
console.log(houseObject.getFurniture())

console.log(houseObject2.color)
console.log(houseObject2.getFurniture())

// Prototypes
const dude = {
  // __proto__: {}  ---> Object: { things to be inherited }
}