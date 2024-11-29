// Destructuring of an Object:

let userDetails = {
  name: "GUlFARM",
  "full name": "GULRAM PAII",
  age: 24,
  location: "FSD",
  isLoggedin: false,
  lastLoginDays: ["monday, saturday"],
};

// First way get get there value with dot notation and store them in a variavle:

// let user_name = userDetails.name;
// console.log(user_name);

// Now the Easy way in this way we can change the key of name is present in the userDetails Object also:

const { age, name: naam, "full name": fullName } = userDetails;
console.log(naam, age, fullName);
