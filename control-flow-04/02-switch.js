// Switch is used in redux handle multiple conditions:
// Switch is like safe or vault there are many cases but only 1 key if key is matched than case is open:

// Syntax of switch:

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

let month = 1;
switch (month) {
  case 1:
    console.log("Your month is January");
    break;
  case 2:
    console.log("Your month is Feb");
    break;
  case 1:
    console.log("Your month is March");
    break;

  default:
    console.log("Invalid month Name ");
    break;
}

let maheena = "Feb";
switch (maheena) {
  case "January":
    console.log("Your maheena is January");
    break;
  case "Feb":
    console.log("Your maheena is Feb");
    break;
  case "March":
    console.log("Your maheena is March");
    break;

  default:
    console.log("Invalid maheena Name ");
    break;
}
