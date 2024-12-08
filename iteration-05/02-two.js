// While Loop:

// Syntex:
// while (condition) {

// }

let i = 0;
while (i <= 10) {
  console.log(`${i} iteration of While Loop`);
  i = i + 1;
}

// While Loop with Array:

let myArray = ["ahmad", "ali", "gulfarm"];
let j = 0;
while (j < myArray.length) {
  console.log(`j's current value is : ${myArray[j]}`);
  j = j + 1;
}

// Do-While:
let score = 1;
do {
  console.log(`your score is ${score}`);
  score++;
} while (score <= 10);
