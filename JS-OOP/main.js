// Imports and Modules
import { square, diag } from "./lib.js";

console.log(square(11));
console.log(diag(4, 3));

//create object
let dog = {
  name: "Apollo",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + /*dog.numLegs*/ this.numLegs + " legs.";
  },
};
console.log(dog);
console.log(dog.name);
console.log(dog.numLegs);
console.log(dog.sayLegs());

// Constructor Function
// function Dog() {
//   (this.name = "Apollo"), (this.color = "tan"), (this.numLegs = 4);
// }
// let myDog = new Dog();
// console.log(myDog);
// console.log(myDog.name);
// console.log(myDog.color);

//Extend Constructors to Receive Arguments
// function Dog(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 4;
// }
// let terrier = new Dog("Peanut", "white");
// console.log(terrier);
// console.log(terrier.name);
// console.log(terrier.color);

// Verify an Object's Constructor with instanceOf
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// without constructor
// let myHouse = {
//   numBedrooms: 6,
// };
// with constructor
let myHouse = new House(4);
console.log(myHouse instanceof House);

// Understand Own Properties
// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let canary = new Bird("Tweety");
// let ownProps = [];
// Only change code below this line
// for (let property in canary) {
//   if (canary.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }
// console.log(ownProps);

// Use Prototype Properties to Reduce Duplicate Code
// function Dog(name) {
//   this.name = name;
//   Dog.prototype.numLegs = 4;
// }
// let beagle = new Dog("Snoopy");
// console.log(beagle);
// console.log(beagle.numLegs);

// Iterate Over All Properties
// function Bird(name) {
//   this.name = name; // own property
// }
// Bird.prototype.numLegs = 2;

// let duck = new Bird("Donald");
// let ownProps = [];
// let prototypeProps = [];
// for (let property in duck) {
//   if (duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }
// console.log(ownProps);
// console.log(prototypeProps);
// console.log(Object.keys(duck));

// Understand the Constructor Property
// function Cat(name) {
//   this.name = name;
// }
// let persian = new Cat();
// console.log(persian.constructor);
// console.log(persian.constructor === Cat);
// function joinCatFraternity(candidate) {
//   if (candidate.constructor === Cat) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Change the Prototype to a New Object
// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype = {
//   numLegs: 4,
//   eat: function() {
//     console.log("yum yum yum")
//   },
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// }
// console.log(Cat.prototype)

// Set the Constructor Property when Changing the Prototype - define the constructor property
// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype = {
//   constructor: Dog,
//   numLegs: 4,
//   eat: function () {
//     console.log("yum yum yum");
//   },
//   describe: function () {
//     console.log("My name is " + this.name);
//   },
// };
// console.log(Dog);
// console.log(Dog.prototype);

// // Understand Where an Object's Prototype Comes From
// function Cat(name) {
//   this.name = name;
// }
// let tabby = new Cat("Hello Kitty");
// console.log(tabby);
// console.log(Cat.prototype.isPrototypeOf(tabby));
// console.log(typeof(Cat.prototype))
// console.log(Object.prototype.isPrototypeOf(Cat.prototype)) // Object.prototype is the prototype of Cat.prototype

// Use Inheritance So You Don't Repeat Yourself
// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype = {
//   constructor: Cat,
//   // eat: function() {
//   //   console.log("nom nom nom");
//   // }
// };

// function Bear(name) {
//   this.name = name;
// }

// Bear.prototype = {
//   constructor: Bear,
//   // eat: function() {
//   //   console.log("nom nom nom");
//   // }
// };

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log("nom nom nom");
//   },
// };
// console.log(Animal.prototype);

// Inherit Behaviors from a Supertype

// function Animal() {}
// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log("nom nom nom");
//   },
// };
// let seagull = Object.create(Animal.prototype);
// let minpin = Object.create(Animal.prototype);
// console.log(seagull);
// console.log(minpin);

// Set the Child's Prototype to an Instance of the Parent
// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log("nom nom nom");
//   },
// };

// function Dog() {}

// // Only change code below this line
// Dog.prototype = Object.create(Animal.prototype)
// let beagle = new Dog();
// console.log(beagle)

// Reset an Inherited Constructor Property
// function Animal() {}
// function Bird() {}
// function Dog() {}

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// // Only change code below this line
// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;
// console.log(Bird.constructor);
// console.log(Dog.constructor);

// let duck = new Bird();
// let beagle = new Dog();

// Add Methods After Inheritance
// function Animal() {}
// Animal.prototype.eat = function () {
//   console.log("nom nom nom");
// };

// function Dog() {}

// // Only change code below this line
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function () {
//   console.log("Woof!");
// };
// // Only change code above this line
// let beagle = new Dog();
// beagle.eat();
// beagle.bark();

// Classes and Object Constructors
// class House {
//   constructor(color) {
//     this.color = color;
//   }
//   getFurniture() {
//     return "sofa";
//   }
// }

// const houseObject = new House("red");
// const houseObject2 = new House("blue");

// console.log(houseObject.color);
// console.log(houseObject.getFurniture());

// console.log(houseObject2.color);
// console.log(houseObject2.getFurniture());

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
      return `Hello I am ${name}`;
    },
  };
}
const person = personFactory("Steve");
console.log(person.talk());

const fetchUsers = fetch("./users.json");
const fetchColors = fetch("./colors.json");

Promise.all([fetchUsers, fetchColors])
  .then((values) => {
    return Promise.all(values.map((response) => response.json()));
  })
  .then(([users, colors]) => {
    // array destructuring
    console.log(users);
    console.log(colors);
  })
  .catch((err) => {
    console.log("Found an error!");
    console.log(err);
  });

// First
const getCovidData = async () => {
  console.log("Processing...");
  const request = await fetch("https://covid19.mathdro.id/api");
  const data = await request.json();
  return data;
};

// Second
const getMoreAPIDataWithUrl = async () => {
  const request = await fetch("https://covid19.mathdro.id/api/confirmed");
  const data = await request.json();
  return data;
};

const callDataInOrder = async () => {
  const covidData = await getCovidData();
  console.log("covid data", covidData);
  document.getElementById("total-cases").innerText = covidData.confirmed.value;
  const detailData = await getMoreAPIDataWithUrl(covidData.confirmed.detail);
  console.log(typeof detailData);
  console.log("detail data", detailData);
  //document.getElementById("country").innerText = detailData[0]["countryRegion"];
  //document.getElementById("confirmed").innerText = detailData[0].confirmed;
  const countryData = detailData.map((element) => {
    return { country: element.countryRegion, cases: element.confirmed };
  });
  console.log(countryData);
  let result = [];
  countryData.reduce(function (res, value) {
    if (!res[value.country]) {
      res[value.country] = { country: value.country, cases: 0 };
      result.push(res[value.country]);
    }
    res[value.country].cases += value.cases;
    return res;
  }, {});
  console.log(typeof result);
  console.log(result);
  document.getElementById("country").innerText = result[11].country;
  document.getElementById("confirmed").innerText = result[11].cases;
};

callDataInOrder();
