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

// // Override Inherited Methods
// function Bird() { }

// Bird.prototype.fly = function() { return "I am flying!"; };

// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// // Only change code below this line
// Penguin.prototype.fly = function() {
//   return("Alas, this is a flightless bird.")
// }

// // Only change code above this line
// let bird = new Bird();
// let penguin = new Penguin();
// console.log(penguin.fly());
// console.log(bird.fly());

// Use a Mixin to Add Common Behavior Between Unrelated Objects
// let bird = {
//   name: "Donald",
//   numLegs: 2
// };

// let boat = {
//   name: "Warrior",
//   type: "race-boat"
// };

// // Only change code below this line
// let glideMixin = function(obj) {
//   obj.glide = function() {
//     console.log("Glide!");
//   }
// };
// glideMixin(bird)
// glideMixin(boat)
// boat.glide()
// bird.glide()

// Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
  // this.weight = 15;
  let weight = 15; // private variable

  this.getWeight = function () {
    return weight;
  };
}
let red = new Bird();
console.log(red.getWeight());

// Understand the Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("A cozy nest is ready");
})();

// Use an IIFE to Create a Module
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();
funModule.singMixin(dog);
dog.sing();

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

// Functional Programming
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => "greenTea";

const prepareBlackTea = () => "blackTea";

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(tea4GreenTeamFCC);
console.log(tea4BlackTeamFCC);
// Only change code above this line

// Understand the Hazards of Using Imperative Code
// tabs is an array of titles of each site open within the window
var Window = function (tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push("new tab"); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  // Only change code below this line

  var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
};

// Let's create three browser windows
var workWindow = new Window([
  "GMail",
  "Inbox",
  "Work mail",
  "Docs",
  "freeCodeCamp",
]); // Your mailbox, drive, and other work sites
var socialWindow = new Window(["FB", "Gitter", "Reddit", "Twitter", "Medium"]); // Social sites
var videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

// Avoid Mutations and Side Effects Using Functional Programming
// The global variable
var fixedValue = 4;

function incrementer() {
  // Only change code below this line
  return fixedValue+1;
  // Only change code above this line
}
var newValue = incrementer();
console.log(newValue);
console.log(fixedValue);

// Pass Arguments to Avoid External Dependence in a Function
// The global variable
var fixedValue2 = 4;

// Only change code below this line
function incrementer2 (num) {
  return num + 1;
  // Only change code above this line
}
console.log(fixedValue2)
var differentValue = incrementer2(fixedValue2)
console.log(differentValue)

// Refactor Global Variables Out of Functions
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

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
