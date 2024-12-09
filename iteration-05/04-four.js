// For in loop
let userDetail = {
  name: "AHMAD",
  address: "FSD",
  age: 23,
};
// Simple For in Loop
for (const key in userDetail) {
  console.log(key);
}

// Try to get value also but...
for (const { key, value } in userDetail) {
  //   console.log(`your key is ${key} and value is ${value}`);
}

// when we dealing with object in for in loop to get values we use this method:

for (const key in userDetail) {
  console.log(`${key} is ${userDetail[key]}`);
}

// For in loop with Array:

let myArr = [1, 3, 5, 7, 9];

for (const key in myArr) {
  console.log(`index is ${key} and value is ${myArr[key]}`);
}

// For in loop with String:

let name = "AHMAD";

for (const key in name) {
  console.log(`index is ${key} and value is ${name[key]}`);
}

// For Arrays,strings we use for of loops and for objects we use for in loop because objects are not iterables
