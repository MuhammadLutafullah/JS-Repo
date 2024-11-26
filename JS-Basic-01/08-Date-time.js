//  Declare Date instance:

let myDate = new Date();

// this is not easy to read we convert out date:

// console.log(myDate);

// console.log(`Date in toString ${myDate.toString()}`);
// console.log(`Date in toDateString ${myDate.toDateString()}`);
// console.log(`Date in toLoacalDateString ${myDate.toLocaleDateString()}`);
// console.log(`Date in ISO-String ${myDate.toISOString()}`);
// console.log(`Date in JSON ${myDate.toJSON()}`);

//****************** */  Our custom date *******************//

// Date with Single Digit month start with 0:
// let customDate = new Date(2024, 0, 11);

// console.log(customDate);
// console.log(customDate.toDateString());

// Date inthe form of YY-MM-DD month start with 1

// let customDate = new Date("2024-01-26");
// console.log(customDate.toLocaleString());

// ******************** Current Date *******************//

// let currentDate = Date.now();

// console.log(`Current Date is ${currentDate}`);

// console.log(`Current Date in Seconds ${Date.now() / 1000}`);
// console.log(
//   `Current Date in seconds without Dacimal ${Math.floor(Date.now() / 1000)}`
// );
