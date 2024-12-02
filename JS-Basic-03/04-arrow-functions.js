// this is refer the current context:

let userInfo = {
  name: "AHMAD",
  age: 23,
  welcomeMessageIs: function () {
    console.log(`${this.name}, Welcome to your website`);
    // console.log(this);
  },
};

// userInfo.welcomeMessageIs();
// userInfo.name = "GULFARM";
// userInfo.welcomeMessageIs();
// console.log(this);

// NOW TYPE LINE NO: 15 ON BROWSER CONSOLE AND SEE THE OUTPUT:

// ************************* Arrow Function ***************************

function code() {
  let username = "AHMAD";

  // with only this we get a lot of properties
  // console.log(this);

  // this is not work in function as this work in Object
  console.log(this.username);
  console.log(this);
}

code();

//

let arrowFunc = () => {
  let username = `this is from arrow Function ${"AHMAD"}`;
  console.log(this.username);
  console.log(this);
};

arrowFunc();

// NOTE THIS IS NOT WORK IN ARROW FUNCTION BUT WORK IN SIMPLE FUNCTION

// Implicit Function: without {} or return

let impFunc = (num1, num2) => num1 + num2;

console.log(impFunc(4, 7));

// Explicit Function: with return or {}

let add = (a, b) => {
  return a + b;
};

console.log(add(3, 4)); // 7
