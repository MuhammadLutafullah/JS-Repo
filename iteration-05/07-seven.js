// forEach not return any value map return value and Filter also return value
// condition base work is done in Filters and updated our array is done in map

let myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mapValue = myarr.map((item) => item + 10);
// console.log(mapValue);

// When we use more than one method is called chaining like we use map with map or map with filter

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//                             First item having 10       Second item having 11
let updatedNumArr = numArr
  .map((item) => item * 10)
  .map((item) => item + 2)
  .filter((item) => item % 2 === 0);
if (updatedNumArr.length === 0) {
  //   console.log("not a single number");
} else {
  //   console.log(`Double Map final Value is ${updatedNumArr}`);
}

// Reduce in Js with normal Function:

// let reduceArr = [1, 2, 3];

// let myTotal = reduceArr.reduce(function (accumelator, currentValue) {
//     console.log(`acc is ${accumelator} or curntVal is ${currentValue}`);
//   return accumelator + currentValue;
// }, 0);

// console.log(myTotal);

// ************************** Reduce with Arrow Function:    {UES IN ADD TO CART FUNCTIONALITY}

let reduceArray = [1, 2, 3, 4, 5];

let myTotal = reduceArray.reduce((accumelator, currentValue) => {
  //   console.log(`Our acc is ${accumelator} and our currentVal is ${currentValue}`);
  return accumelator + currentValue;
}, 0);

// console.log(myTotal);

// Reduce With Shopping Cart Array:

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

let cartTotal = shoppingCart.reduce((accumelator, currentValue) => {
  console.log(
    `your accumelator is ${accumelator} and your currentValue is ${currentValue.price}`
  );
  return accumelator + currentValue.price;
}, 0);
console.log(cartTotal);
