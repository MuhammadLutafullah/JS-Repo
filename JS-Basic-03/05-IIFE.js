// IIFE: Immediately Invoked Function Expression
// Variables and functions declared inside the IIFE do not pollute the global scope. This helps prevent variable name conflicts.

// named IIFE:

(function code() {
  console.log("DB CONNECTED");
})();

// un-named IIFE:

let name = "AHMAD";
(() => console.log(`DB CONNECTED TWO USER IS ${name}`))(name);
