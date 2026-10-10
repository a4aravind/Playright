// == loose comparison
// 1. == (loose equality) operator compares values for equality after performing type coercion if necessary.
console.log(5 == '5');

// === strict comparison
// 2. === (strict equality) operator compares values for equality without performing type coercion. It checks both the value and the type of the operands.
console.log(5 === '5');

console.log(5 != "5");
console.log(5 !== "5");
console.log(5 === 5);