// Assignment 2

const str = "Hello, world!";
const num = 42;
const bool = true;
const nil = null;
let undef;
const sym = Symbol("unique");

console.log(str, typeof str);
console.log(num, typeof num);
console.log(bool, typeof bool);
console.log(nil, typeof nil);
console.log(undef, typeof undef);
console.log(sym, typeof sym);

// Challenge 2

function typeDetective(value) {
    const result = {
      value,
      typeof: typeof value,
      isNull: value === null,
      isNaN: Number.isNaN(value),
      isInfinity: value === Infinity || value === -Infinity,
      isNegativeZero: Object.is(value, -0),
      isArray: Array.isArray(value),
      isObject: typeof value === "object" && value !== null && !Array.isArray(value),
      isPrimitiveWrapper: value instanceof String || value instanceof Number || value instanceof Boolean
    };
    return result;
  }
  
  const testValues = [
    "hello",
    new String("hello"),
    42,
    new Number(42),
    true,
    new Boolean(false),
    null,
    undefined,
    NaN,
    Infinity,
    -0,
    {},
    [],
    Symbol("x"),
    () => {},
  ];
  
  testValues.forEach((val, index) => {
    console.log(`Test ${index + 1}:`, typeDetective(val));
  });
  

