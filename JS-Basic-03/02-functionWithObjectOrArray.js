// addToCart function take more than 1 arguments with the use of rest Operator looks same as spread Operator:

function addToCart(...price) {
  return price;
}

let totalCartPrice = addToCart(22, 33, 11, 55, 77, 99);
// Rest Operator convert out given arguments into an Array with seperated comma's
// console.log(totalCartPrice);

// Object passing as argument to a Function:

let userInfo = {
  name: "AHMAD",
  age: 23,
  price: 99,
};

function handleObject(anyobject) {
  return `The user name is ${anyobject.name} and total price is ${anyobject.price}`;
}

let objFunc = handleObject(userInfo);
// console.log(objFunc);

// Passing Array as an argument of an Function:

let myarr = [11, 33, 55, 77, 99];

function handleArray(getArray) {
  return getArray[2];
}

let arrValue = handleArray(myarr);

console.log(`3rd value of Array is ${arrValue}`);
