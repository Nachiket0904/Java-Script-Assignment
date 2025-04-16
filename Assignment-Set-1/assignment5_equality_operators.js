// Assignment 5: Equality Operators

// 🔹 Basic Task
function compareValues(a, b) {
  return {
    a,
    b,
    "==": a == b,
    "===": a === b,
    typeofA: typeof a,
    typeofB: typeof b
  };
}
console.log(compareValues(0, "0"));
console.log(compareValues(0, false));
console.log(compareValues("", false));
console.log(compareValues(null, undefined));
console.log(compareValues({}, {}));
console.log(compareValues(new String("hello"), "hello"));
console.log(compareValues(NaN, NaN));

// 🔹 Challenge Task
function deepEquals(a, b) {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (typeof a === "object" && a !== null && b !== null) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (let key of keysA) {
      if (!deepEquals(a[key], b[key])) return false;
    }
    return true;
  }
  return false;
}
console.log(deepEquals({ x: 1 }, { x: 1 }));
console.log(deepEquals([1, 2], [1, 2]));
