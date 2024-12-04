// in some cases we assume our value is true or false

const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// ********************* Nullish Coalescing Operator (??): null undefined ******************

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;

console.log(val1);

// Backend returns null or undefined
const backendData = null;
const defaultValue = 10;

const result = backendData ?? defaultValue;
console.log(result); // 10 (backendData is null, so it uses defaultValue)

// Backend returns a value
const backendData2 = 5;
const result2 = backendData2 ?? defaultValue;
console.log(result2); // 5 (backendData2 is not null or undefined, so it uses its value)

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
