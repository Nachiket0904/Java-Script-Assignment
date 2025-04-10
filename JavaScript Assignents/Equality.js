//Assignment 4

// Implicit Conversion
console.log("5" + 2);    // "52"
console.log("5" - 2);    // 3
console.log(true + 1);   // 2

// Explicit Conversion
console.log(Number("10"));    // 10
console.log(String(20));      // "20"
console.log(Boolean(0));      // false

//Challenge 4
// Duck Typing
function printTitle(obj) {
    if (obj.title) {
      console.log("Title:", obj.title);
    }
  }
  
  printTitle({ title: "Book" });
  printTitle({ name: "Pen" });
  
  // Type Guard
  function isNumber(val) {
    return typeof val === "number";
  }
  
  function add(a, b) {
    if (isNumber(a) && isNumber(b)) {
      return a + b;
    }
    return "Invalid input";
  }
  
  console.log(add(3, 4));     // 7
  console.log(add(3, "4"));   // Invalid input
  