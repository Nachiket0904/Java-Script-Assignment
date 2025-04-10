//Assignment 1
function first() {
    console.log("Inside first()");
    second();
}

function second() {
    console.log("Inside second()");
    third();
}

function third() {
    console.log("Inside third()");
    return;
}



// Challenge 1
first();

function factorialRecursive(n) {
    console.log(`Calling factorialRecursive(${n})`);
    if (n < 0) throw new Error("Negative numbers not allowed");
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
  }
  
  function factorialIterative(n) {
    console.log("Using iterative solution");
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  function safeFactorial(n) {
    try {
      return factorialRecursive(n);
    } catch (err) {
      console.warn("Stack limit reached. Switching to iterative method.");
      return factorialIterative(n);
    }
  }
  
  console.log("Factorial of 5:", safeFactorial(5));

