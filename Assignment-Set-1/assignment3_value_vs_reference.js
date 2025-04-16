// Assignment 3: Value vs Reference

// 🔹 Basic Task
let a = 10;
let b = a;
b = 20;
console.log(a, b); // 10, 20

let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // Bob

function modifyPrimitive(x) {
  x = 50;
}
function modifyObject(o) {
  o.name = "Charlie";
}
let x = 30;
modifyPrimitive(x);
console.log(x); // 30
modifyObject(obj1);
console.log(obj1.name); // Charlie

// 🔹 Challenge Task
function deepClone(obj, seen = new Map()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (seen.has(obj)) return seen.get(obj);

  let copy;
  if (Array.isArray(obj)) copy = [];
  else if (obj instanceof Date) copy = new Date(obj);
  else if (obj instanceof RegExp) copy = new RegExp(obj);
  else copy = {};

  seen.set(obj, copy);
  for (let key in obj) {
    copy[key] = deepClone(obj[key], seen);
  }
  return copy;
}
const original = { data: { nested: [1, 2] } };
const clone = deepClone(original);
console.log(clone);
