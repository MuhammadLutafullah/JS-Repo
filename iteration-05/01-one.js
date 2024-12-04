// For loop:

// Syntex of For Loop:

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// let limit = 10;
// for (let index = 0; index < limit; index++) {
//   console.log(`${index} iteration of For Loop`);
// }

//*********************** */ If satement in For Loop: **************************

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     console.log(`${i} is Good number`);
//   }

//   console.log(`${i} first iteration of IF-ELSE For Loop`);
// }

// Nested For Loop:

for (let i = 0; i <= 10; i++) {
  //   console.log(`${i} our Outer Loop Value`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`our INNER Loop ${j} our Outer Loop Value ${i}`);
    // Table is printed
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

// ************************ For Loop on Array *************************

let myArray = ["superman", "batman", "flash"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  let heroName = myArray[index];
  console.log(heroName);
}

// break and continue
// break jumps outside the loop body and continue keyword not jump only 1 time when 5 is detectedr

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);

// }
//  ************************ First time 5 is detected and Print in the array rather than that this is skipped:
let continueArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 1, 2, 3, 4];
for (let i = 0; i < continueArray.length; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${i}`);
}
