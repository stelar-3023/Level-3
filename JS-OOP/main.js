// Imports and Modules
import { square, diag } from "./lib.js";

console.log(square(11));
console.log(diag(4, 3));

// Classes and Object Constructors
class House {
  constructor(color) {
    this.color = color;
  }
  getFurniture() {
    return "sofa";
  }
}

const houseObject = new House("red");
const houseObject2 = new House("blue");

console.log(houseObject.color);
console.log(houseObject.getFurniture());

console.log(houseObject2.color);
console.log(houseObject2.getFurniture());

// Prototypes
const dude = {
  // __proto__: {}  ---> Object: { things to be inherited }
};

const human = {
  kind: "Human",
};
const Steve = Object.create(human);
console.log(Steve);
Steve.age = 45;
Steve.lastName = "Larsen";
console.log(Steve.kind);

// Prototype only belongs to Constructor Functions or Classes
function Dude(name) {
  this.name = name;
}
const me = new Dude("Steve");
console.log(me);
console.log(me.prototype);
console.log(Dude.prototype);
console.log(me.__proto__ === Dude.prototype);

// Factory Functions - creates objects and returns them
// const wife = {
//   name: "Dawn",
//   talk() {
//     return `Hello I am ${this.name}`
//   }
// }
// console.log(wife.talk())
function personFactory(name) {
  return {
    name,
    talk() {
      return `Hello I am ${name}`
    }
  }
}
const person = personFactory("Steve")
console.log(person.talk())