// Assignment 4: Typing Systems

// 🔹 Basic Task
let x = "5" + 2; // Coercion
console.log(x); // "52"

let y = Number("123"); // Explicit
console.log(y); // 123

function speak(animal) {
  if (animal.sound) {
    console.log(animal.sound);
  }
}
speak({ sound: "meow" }); // Duck typing

function compare(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
console.log(compare({ a: 1 }, { a: 1 })); // true

// 🔹 Challenge Task
function isNumber(val) {
  return typeof val === "number";
}

function validateArgs(fn, validator) {
  return function(...args) {
    for (let i = 0; i < args.length; i++) {
      if (!validator[i](args[i])) {
        throw new Error("Invalid argument at position " + i);
      }
    }
    return fn(...args);
  };
}

const sum = validateArgs((a, b) => a + b, [isNumber, isNumber]);
console.log(sum(2, 3));
