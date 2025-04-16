// Assignment 1: Call Stack

// 🔹 Basic Task
function first() {
  console.log("first");
  second();
}
function second() {
  console.log("second");
  third();
}
function third() {
  console.log("third");
  return;
}
first(); // Call Stack: first -> second -> third

// 🔹 Challenge Task
function factorial(n) {
  console.log(`Calling factorial(${n})`);
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(4));
