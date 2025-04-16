// Assignment 2: Primitive Types

// 🔹 Basic Task
let str = "hello";
let num = 42;
let bool = true;
let nul = null;
let undef;
let sym = Symbol("sym");

console.log(typeof str, typeof num, typeof bool, typeof nul, typeof undef, typeof sym);

// 🔹 Challenge Task
function typeDetective(value) {
  const type = typeof value;
  if (type === "number" && isNaN(value)) return "NaN";
  if (Object.is(value, -0)) return "-0";
  if (value === null) return "null";
  if (Array.isArray(value)) return "Array";
  if (value instanceof Date) return "Date";
  if (value instanceof RegExp) return "RegExp";
  return type;
}
console.log(typeDetective(NaN));
console.log(typeDetective(-0));
console.log(typeDetective([]));
console.log(typeDetective(null));
console.log(typeDetective(new String("hi")));
