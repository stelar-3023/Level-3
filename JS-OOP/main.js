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
  document.getElementById("country").innerText = result[0].country;
  document.getElementById("confirmed").innerText = result[0].cases;
};

callDataInOrder();
