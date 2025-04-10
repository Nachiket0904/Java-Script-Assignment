//Assignment 3
// Value Types (Primitives)
let a = 10;
let b = a;
b = 20;
console.log("Value Types:");
console.log("a =", a); // 10
console.log("b =", b); // 20

// Reference Types (Objects/Arrays)
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log("\nReference Types:");
console.log("obj1.name =", obj1.name); // Bob
console.log("obj2.name =", obj2.name); // Bob

// Passing Primitives to Functions
function changePrimitive(x) {
  x = 100;
}
let num = 50;
changePrimitive(num);
console.log("\nAfter passing primitive to function:");
console.log("num =", num); // 50

// Passing Objects to Functions
function changeObject(obj) {
  obj.value = 999;
}
let refObj = { value: 123 };
changeObject(refObj);
console.log("\nAfter passing object to function:");
console.log("refObj.value =", refObj.value); // 999


//Challenge 3  
function deepClone(obj, seen = new WeakMap()) {
    if (obj === null || typeof obj !== "object") return obj;
    if (seen.has(obj)) return seen.get(obj);
  
    let clone = Array.isArray(obj) ? [] : {};
    seen.set(obj, clone);
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key], seen);
      }
    }
  
    return clone;
  }
  
  // Test
  const original = {
    name: "Alice",
    age: 25,
    nested: { a: 1 },
    scores: [10, { math: 90 }]
  };
  original.self = original;
  
  const copy = deepClone(original);
  
  console.log("Original:", original);
  console.log("Copy:", copy);
  console.log("Same object?", original === copy);
  console.log("Same nested?", original.nested === copy.nested);
 