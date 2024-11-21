// Conversion inNumber from string:
let score = "33";
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*

"33" => 33 
"33abc" => NaN (not a number)
"33" => 33
true = 1
false = 0
null = 0
undefine = NaN(not a number)

*/

// Conversion in Boolean from number:

let useIsLoggedIn = 1;

let valueInBoolean = Boolean(useIsLoggedIn);
console.log(valueInBoolean);

/*

1 => true
0 => false
"" => false
"anyVaalue" = true

*/
