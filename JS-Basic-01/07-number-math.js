// Number Define in a normal why:

const score = 103;
// console.log(score);

// Number Define if we sure about our value is  number type:

const score2 = new Number(107);
// console.log(score2);

// REMINDER Line 3,8 write on Console of Google and Show the Difference ;

// Convert our score2 in String:

// console.log(score2.toString().length);
// console.log(typeof score2);

// values after points mainly used in E-commarence Sites or Calculations:

const score3 = new Number(100);

// console.log(score3.toFixed(2));

// precision use to round-off our values:

const otherNumber = 23.879;
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(2));

// toLocalString is used for comma's in our value default it set comma's according to US standards but we can also change them
// and convert our number into String :

// const amount = 1000000000;
// US standard

// console.log(amount.toLocaleString());

// India Standard

// console.log(amount.toLocaleString("en-IN"));

// Pakistan Standard

// console.log(amount.toLocaleString("en-pk"));

// ************************************** Maths ************************************//

// absolute value is used to remove - from the value
// console.log(Math.abs(-4));

// Round-Off our Value :
// console.log(Math.round(4.7));

// In ceil we use higher value:
// console.log(`our ceil value is ${Math.ceil(4.1)}`);

// In floor we always choose low value:

// console.log(`our Floor Value is ${Math.floor(4.9)}`);

// to find min value:

// console.log(`our Min value is ${Math.min(2, 4, 3, 6, 7, 8)}`);

// to find max value//

// console.log(`our Max value is ${Math.max(2, 4, 3, 6, 7, 8)}`);
