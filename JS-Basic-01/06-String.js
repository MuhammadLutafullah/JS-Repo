//  Declare a String

const playerName = new String("Ahmad");
console.log(playerName.__proto__);
console.log(playerName.length);
console.log(playerName.toUpperCase());
console.log(playerName[0]);
console.log(playerName.charAt(2));
console.log(playerName.indexOf("m"));

// Declare another String:
const anotherPlayer = new String("GulFarm");

let subString = anotherPlayer.substring(0, 3);
console.log(subString);

// We give values in Negative - in Slice method:
let sliceString = anotherPlayer.slice(-7, 3);
console.log(sliceString);

// Use of trim Method to remove extra Spaces:

let userName = "    Ahmad     ";
userName = userName.trim();
console.log(userName);
// console.log(userName.trim());

console.log(userName.length);

// Use replace method :

let url = "https://ahmad.com%20LutafUllah";

// Hint : %20  = space browser convert space into %20 i want to add - intead of %20:
let updatedURL = url.replace("%20", "-");
console.log(updatedURL);

// include for checking the value is present or not:

console.log(updatedURL.includes("ahmad"));
console.log(updatedURL.includes("ahmadz"));

// use of Split convert our values on the base of sperator in an Array:

let messageIs = "dcsdcmc nonodscnsdo njdndnj ndj";
console.log(messageIs.split(" "));
console.log(messageIs.split(" ", 3));

let messageIs2 = "aaa-ddd-ffff-wwww-ggg";
console.log(messageIs2.split("-"));
console.log(messageIs2.split("-", 3));
