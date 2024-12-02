// Scopes of Nested Functions:
// child access parent variables but parent is not able to access their child variables:
function one() {
  let username = "AHMAD";
  function two() {
    let pageType = "website";
    console.log(
      `username variable access from child to parent username is: ${username}`
    );
  }
  two();
  //   console.log(pageType);
}
one();

// Sceopes of nested IF same as we see in nested Functions:

if (true) {
  let firstName = "AHMAD";
  if (firstName === "AHMAD") {
    let lastName = " BBA";
    console.log(firstName + lastName);
  }
}

// *************************** Two methods to store function a variable :

// ************* First method:

// define function > sotre in variable

function addone(num) {
  return num + 1;
}

// IF YOU CUT OR PASTE LINE NO: 37 BEFORE THE FUNCTION EXECUTION THEN THEY EXECUTE:
let addOne = addone(4);
console.log(addOne);

// ************ Second Method ***********

// Store in variable or define function at a time:

let addTwo = function addtwo(num) {
  return num + 2;
};

// IF YOU COPY OR PASTE LINE NO: 49 BEFORE THE FUNCTION EXECUTION IF THROUGH AN ERROR
console.log(addTwo(5));
