// What retrun forEach:

let languages = ["HTML", "CSS", "Javascript", "SCSS", "Jquery"];

// To check the return of forEach we store it in a variable:

// let forEach_Func = (item) => {
//   console.log(`values from forEach_func is ${item}`);
// };
// let forEachReturn = languages.forEach(forEach_Func);

// console.log(forEachReturn);

// Modify code from line no: 7 to line no: 12

// let forEach_Func = (item) => {
//   console.log(`values from forEach_func is ${item}`);
//   return item;
// };
// let forEachReturn = languages.forEach(forEach_Func);

// console.log(forEachReturn);

// forEach don't return anything to us

// Filter also take callback as an Argument like forEach and they return us values:

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filterNumber = myNums.filter((item) => {
  return item > 5;
});

// console.log(filterNumber);
// Filter don't change our Original Array
// console.log(myNums);

// Clean Code:

let filter_Func = (item) => item > 5;

let filterNumber2 = myNums.filter(filter_Func);

// console.log(filterNumber2);

// Now same thing with forEach:

let newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const insertArr = [];

newNums.forEach((item) => {
  if (item > 4) {
    return insertArr.push(item);
  }
});

// console.log(insertArr);

// Both Methods are correct with Filter or With forEach:

// Filter in Detail With Example:

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((item) => item.genre === "History");
// Override userBooks Variable Here.....
userBooks = books.filter(
  (item) => item.genre === "History" && item.publish > 1900
);
// if userBooks having 0 length than we handle this

if (userBooks.length === 0) {
  console.log("There is no book about this genre and Date");
} else {
  console.log(userBooks);
}
