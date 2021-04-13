// Objects
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 2,
//   },
//   draw: function () {
//     console.log("draw"); // method - define logic
//   },
// }; // object literal

// circle.draw();

// Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }
// const circle = createCircle(1);
// circle.draw();

// Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// Circle.call({}, 1);
// Circle.apply({}, [1]);

// const another = new Circle(1);
// console.log(another);

// Value vs Reference Types
// let x = 10;
// let y = x;

// x = 20;
// Primitives are copied by their value
// Objects are copied by their reference
let x = { value: 10 };
let y = x;

x.value = 20;

// let number = 10;
// function increase(number) {
//   number++;
// }
// increase(number);
// console.log(number);
let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);

// Adding / Removing Properties
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);
// Enumerating properties
// enumerate all members in an object
// for (let key in circle) {
//   if (typeof circle[key] !== "function") console.log(key, circle[key]);
// }
// get all of the keys in an object
// const keys = Object.keys(circle);
// console.log(keys);
// check for existence of a method or property in an object
// if ("radius" in circle) console.log("Circle ahs a radius");

// console.log(circle);
// add property
// circle.location = { x: 1 };
// same as above
// circle["location"] = { x: 1 };
// const propertyName = "center-location";
// circle[propertyName] = { x: 1 };
// console.log(circle[propertyName]);

// delete circle["location"];

// Abstraction - hise the details & show only the essentials
// function Circle(radius) {
//   this.radius = radius;

// hide property by setting it to local variable
// let defaultLocation = { x: 0, y: 0 };

// let computeOptimumLocation = function (factor) {
//   // ...
// };
//   this.getDefaultLocation = function () {
//     return defaultLocation;
//   };

//   this.draw = function () {
//     // computeOptimumLocation(0.1);
//     console.log("draw");
//   };
//   Object.defineProperty(this, "defaultLocation", {
//     get: function() {
//       return defaultLocation;
//     },
//     set: function(value) {
//       if (!value.x || !value.y)
//       throw new Error("Invalid Location.")
//       defaultLocation = value;
//     }
//   })
// }
// const circle = new Circle(10);
// circle.getDefaultLocation();
// circle.defaultLocation = 1;
// circle.draw();

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch has already stopped.");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endtime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

// const sw = new Stopwatch()
