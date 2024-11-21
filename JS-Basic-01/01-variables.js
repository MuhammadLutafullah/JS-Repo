const accountId = 123;
let accountEmail = "123@gmail.com";
var accountPassword = "45678";
// Don't Use this way of Declaration
accountCity = "Lahore";
// it shows Output undefine
let accountState;

// First time Declare:
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// Again Declare:
// accountId = 321
accountEmail = "321@gmail.com";
accountPassword = "87654";
accountCity = "FSD";

console.table([accountId, accountEmail, accountPassword, accountCity]);

/*

Prefer not to use var because of issue in block scope or functional scope

*/

/*

Concept clear about let or var or block scope or functional scope

*/

//  var varValue = "i am Var"
// function testScope() {
//     let letValue = "i am Let"

//     if (true) {
//         console.log("inside the if {}", letValue)
//         console.log("inside the if {}", varValue)
//     }
//     console.log("inside the if {}", letValue)
//     console.log("inside the if {}", varValue)
// }
// console.log("inside the if {}", letValue)
// console.log("inside the if {}", varValue)
// testScope()
// console.log(varValue)

// 53: return {} 54: return false on the base of their memorey location:
console.log(({} = {}));
console.log({} == {});
