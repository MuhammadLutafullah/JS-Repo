//  Functions

function myName() {
  console.log("A");
  console.log("H");
  console.log("M");
  console.log("A");
  console.log("D");
}

// this is called Reference (in HEAP memorey storage address of myName function) of Function:

myName;

// this is called execution with reference of a function to execute the function:

// myName();

// Addition of numbers with functions

// on Function declaration num1 or num2 called parameter
function sumOfFunction(num1, num2) {
  console.log(num1 + num2);
}

// On calling the function 4,7 is called arguments:

// sumOfFunction(4, 7);

// On Line 23 we can't use return that's why we can't store function in variable:

let result = sumOfFunction(4, 7);

// result is undefine because function don't return anything:
// console.log("Our Result is: ", result);

//  Function with retrun know we store our function in variable with the use of return:

function returnFunction(num1, num2) {
  return num1 + num2;
}

let Result = returnFunction(4, 7);
// console.log("return Result is: ", Result);

// use of IF statement and show sms user is loggedIn or not:

function userIsLoggedIn(username) {
  return `${username} just LoggedIn`;
}

// With Correct Argument:
// let statusOfLoggedIn = userIsLoggedIn("AHMAD");
// console.log(statusOfLoggedIn);

// With inCorrect Argument:
// let statusOfLoggedIn = userIsLoggedIn("");
// console.log(statusOfLoggedIn);

// Now we check the argument is correct or not with IF statement inside the function:

function ifFunction(username) {
  // ! NOT operator chnage True into False and False into True username is False if
  //  argument is empty string "" NOT operator turn False into True and our IF block is executed
  if (!username) {
    console.log(`Enter Valid username`);
    return;
  }
  return `${username} just LoggedIn`;
}

let ifStatusOfLoggedIn = ifFunction("");
console.log(ifStatusOfLoggedIn);
