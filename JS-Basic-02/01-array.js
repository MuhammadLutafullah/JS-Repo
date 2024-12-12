// Our Array

let array = [0, 1, 2, 3, 4, 5];

// console.log(array);
// access array index and get the element of array according to the requirement here is elements are 0,1,2,3,4,5:
// console.log(array[0]);

// array make two types of copies
// 1 == Shalow Copy  ===> primitive datatypes are not change due to stack memorey but non-primitive
// is changed because the reference points is only copy.

// 2 == Deep Copy ===> Deep copy noting effect on original one because they also duplicate the
// nested structure and create new instances in the memorey

// ********************** Methods in Array *******************************//

let ourArray = [0, 0, 0, 0, 0];
// ************ Push add an element in array at the end **************//
// ourArray.push(6);
// console.log(`added 6 with push method ${ourArray}`);

// ************ Pop method remove last element of an Array: *************//

// ourArray.pop();
// console.log(`remove 6 with Pop method ${ourArray}`);

// *********** Shift Un-Shift shift ==> element add at the start un-Shift element remove from the last ************//

let shiftArray = [1, 1, 1, 1, 2, 2, 2];

shiftArray.unshift(7);
shiftArray.shift();
// console.log(shiftArray);

// ********** include or indexOf ***************//

let incArray = [1, 2, 3, 4, 5, 6, 7];

// console.log(incArray.includes(7));
// console.log(incArray.indexOf(7));

// ************ Join ****************//

let joinArray = [1, 2, 3, 4, 5, 6, 7];

// Convert our Array into string and sperated each element with comma's:

let newjoinArray = joinArray.join(); // ==>  1,2,3,4,5,6,7
// console.log(`Use of join convert our Array into String ${newjoinArray}`);
// console.log(typeof newjoinArray);

// ******************
let name = "AHMAD";
naam = name.split();
// console.log(naam);
// console.log(typeof naam);

// ******************
let nameFull = "AHMAD%LUTAFULLAH";
naam2 = nameFull.split("%");
// console.log(naam2);
// console.log(typeof naam2);

// ************ Slice or Splice *************//

// Slice => make copy of reference tells in Slice() and main array is not changed:

let spArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sliceArray = spArray.slice(1, 5);

// console.log(sliceArray); // ==> make Deep Copy
// console.log(spArray);

// Splice ==> assign real reference and main Array is changed

let spliceArray = spArray.splice(6, 8);
// console.log(spliceArray);  // ==> make Shallow Copy

// console.log(spArray);

// ********** Special Case ***********//

let marvel_heros = ["thor", "ironman", "spiderman"];
let dc_heros = ["batman", "superman", "flash"];

// add dc array to marvel array with push

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// As you see in output it take dc_heros as an element in it and we see nested array in out marvel_heros array

// ******** Use of Concat **********//

// let herosuniverse = marvel_heros.concat(dc_heros);
// console.log(herosuniverse);
// console.log(marvel_heros);
// console.log(dc_heros);

// *********** Spread Operator ********* //

// glass is broken into peices example

let allNewHeros = [...dc_heros, ...marvel_heros];

// console.log(allNewHeros);
// console.log(marvel_heros);
// console.log(dc_heros);

// ****************** Convert String into Array *********************//

// isArray is used to ask Question:
let checkType = Array.isArray("AHMAD");
// console.log(checkType);

//  from is used to convert single String into Array:
checkType = Array.from("AHMAD");
// console.log(checkType);
// console.log(Array.isArray(checkType));

// of Array is Used to convert more than one variable of String into Array :
let score1 = 100;
let score2 = 200;
let score3 = 300;

let combineVariable = Array.of(score1, score2, score3);
// console.log(combineVariable);
