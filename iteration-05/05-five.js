//  For each loop:
let languages = ["HTML", "CSS", "Javascript", "SCSS", "Jquery"];
// print line no: 2 in console of Google and see in array methods we have forEach also:

// forEach take arrow function as Argument:

// languages.forEach((value) => {
//   console.log(`Our Current Language is ${value}`);
// });

// we define an function whose simple print the given value and cal it in forEach:
let printValues = (value) => {
  //   console.log(`Our Language is ${value}`);
};

languages.forEach(printValues);

// on line no:7 forEach having three values 1:index 2:value 3:whole array

languages.forEach((index, value, myarr) => {
  //   console.log(`key is ${value} value is ${index} and our Array is ${myarr}`);
});

// forEach with common structure of array [{}, {}, {}]

let myCode = [
  {
    name: "AHMAD",
    address: "FSD",
  },
  {
    name: "ALI",
    address: "LHR",
  },
  {
    name: "GULFARM",
    address: "PK",
  },
];

console.log(myCode);

// Access our name or address with forEach:
// myCode.forEach((item) => {
//   console.log(`Your name is ${item.name} and address is${item.address}`);
// });

// Clean Code:

let funcOfMyCode = (item) => {
  console.log(`Your name is ${item.name} and address is ${item.address}`);
};

myCode.forEach(funcOfMyCode);
