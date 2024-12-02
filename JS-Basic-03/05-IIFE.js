// IIFE: Immediately Invoked Function Expression
// Variables and functions declared inside the IIFE do not pollute the global scope. This helps prevent variable name conflicts.

// **************** Syntex is () () *******************
// inside first () our function is declare and the 2nd () is used as function execute:

// named IIFE:

(function code() {
  console.log("DB CONNECTED");
})();

// un-named IIFE:

let name = "AHMAD";
(() => console.log(`DB CONNECTED TWO USER IS ${name}`))(name);
