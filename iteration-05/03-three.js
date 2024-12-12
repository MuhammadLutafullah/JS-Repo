// For of Loop

// Syntex

// for (const element of object) {

// }

// For Loop with Array
let myArr = [1, 3, 5, 7, 9];

for (const num of myArr) {
  //   console.log(num);
}

// For Loop with String

let name = "AHMAD";
for (const i of name) {
  //   console.log(i);
}

// Maps having unique key value pairs :

let map = new Map();

// Insert key values in map
map.set("IN", "india");
map.set("pk", "Pakistan");
map.set("Fr", "France");

console.log(map);

// Applay For of Loop on Map

for (const key of map) {
  console.log(key);
}

// we destructure key of values
for (const [key, value] of map) {
  console.log(`Your key is ${key} Your Value is ${value}`);
}

// For of Loop with Object:

let userDetail = {
  name: "AHMAD",
  address: "FSD",
  age: 23,
};

// Applay For of Loop on Object:

// for (const key of userDetail) {
//   console.log(key);
// }
// For of loop is not applay on Objects because objct is not iterables
