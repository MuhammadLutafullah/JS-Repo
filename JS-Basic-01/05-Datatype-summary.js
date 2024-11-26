// There are two types of Data on the base of how they store their values in memorey:

//*********************** Primitive Data Types **********************//:

// These are simple types of data where the value itself is stored directly in memory.

// String, Number, BigInt, Boolean, null, undefine, symbol,

//*********************** Reference Datatypes (Non-primitive Datatypes) **********************//:

// These are more complex types of data where only a reference (address) to the data is stored in memory, not the actual data.

// Array,object,Functions

// ******************** Type of Js or Ts ********************//

// JavaScript is dynamic because types are determined during runtime and can change.

//let x = 10; // x is a number
//x = "Hello"; // Now x is a string

// TypeScript is static because types must be defined before execution, and they cannot change during runtime.

//let x: number = 10; // x must always be a number
//x = "Hello"; // This will cause a compile-time error

// ************** Non-Primitive Datatypes *****************//

// const myArray = ["Ahmad", "Ali", "Gulfarm"];

// let myObj = {
//   name: "Ahmad",
//   age: 23,
// };

// let myFunction = function () {
//   console.log("Hello World");
//   return;
// };

// console.log(myArray);
// console.log(myObj);
// myFunction();

// ******************************** Memorey Types in Js *******************************//

// Stack Used For Store primitive values on reassign they give us the copy of original value

let email = "ahmad@gmail.com";
let updatedEmail = email;
updatedEmail = "ahmadzz@gmail.com";

console.log(email);
console.log(updatedEmail);

// Heap is used for Store Non-primitive Datatypes:

let userDetails = {
  name: "Ahmad",
  email: "ahmad@gmail.com",
};

let updatedUser = userDetails;
updatedUser.name = "ahmadzzz";
updatedUser.email = "ahmadzz@gmail.com";

console.log(userDetails);
console.log(updatedUser);
