// Two main types of Declare Objects in Js:
//(1)= Literal:
// Objects created with literals are independent and don’t naturally support singleton behavior.
// (2) = Constructor
// Objects created with constructor are dependent and support singleton behavior.

// First Object is Declare and Acces ther Keys:

// let userDetails = {
//   name: "GUlFARM",
//   "full name": "GULRAM PAII",
//   age: 24,
//   location: "FSD",
//   isLoggedin: false,
//   lastLoginDays: ["monday, saturday"],
// };

// Two ways to acces keys of an Object

// console.log(userDetails.name);
// console.log(userDetails["full name"]);
// console.log(userDetails.lastLoginDays);

// Use Sybol primitive DatsType in Objcet (interview Question)

let mySymbol1 = Symbol("hello1"); // Symbol
let mySymbol2 = Symbol("hello2"); // Symbol

let userDetails = {
  name: "GUlFARM",
  "full name": "GULRAM PAII",
  mySymbol1: "Hello World", // Here, mySymbol1 is treated as a string key
  [mySymbol2]: "Hellozzzz World", // mySymbol2 is used as a symbol key
  age: 24,
  location: "FSD",
  isLoggedin: false,
  lastLoginDays: ["monday, saturday"],
};

console.log(userDetails.mySymbol1); // Output: Hello World (this key is treated as a string)
console.log(typeof userDetails.mySymbol1); // Output: string (it's treated as a string here)

console.log(userDetails[mySymbol2]); // Output: Hellozzzz World (this key is treated as a symbol key)
console.log(typeof userDetails[mySymbol2]); // Output: string (but the key was a symbol)

// Chnage Value in Objects:

// let userDetails = {
//   name: "GUlFARM",
//   "full name": "GULRAM PAII",
//   age: 24,
//   location: "FSD",
//   isLoggedin: false,
//   lastLoginDays: ["monday, saturday"],
// };

// We access the value with dot notation and change the value in the Object
// userDetails.name = "AHMAD";
// console.log(userDetails.name);

// if you want nobody change the Objects value then use Freeze for it:

// Object.freeze(userDetails);
// userDetails["full name"] = "XYZ";

// See value is not change due to the Use of Freeze
// console.log(userDetails["full name"]);

// Add a function in the object and see the use of this :

// let userDetails = {
//   name: "GUlFARM",
//   "full name": "GULRAM PAII",
//   age: 24,
//   location: "FSD",
//   isLoggedin: false,
//   lastLoginDays: ["monday, saturday"],
// };

// Function Just Show the sms:
// userDetails.smsFromUser = function () {
//   console.log("Hello Everyone");
// };
// let otherUserDetails = {
//   name: "AHMAD",
// };
// Function Show sms and name of user which is getting from userDetails Object
// Here this is used because we add function in userDetails and access name from the same Object of userDetails Object:
// userDetails.smsFromUser2 = function () {
//   console.log(`Hello Everyone ${this.name} is Here`);
//   console.log(`Hello Everyone ${otherUserDetails.name} is Here`);
// };
// console.log(userDetails.smsFromUser());
// console.log(userDetails.smsFromUser2());
