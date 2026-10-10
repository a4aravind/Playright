let million = 1_000_000; // 1 million
console.log(million); // Output: 1000000

let binaryNumber = 0b1010_1101; // Binary representation of 173
console.log(binaryNumber); // Output: 173

let hexNumber = 0xFF_FF_FF; // Hexadecimal representation of 16777215
console.log(hexNumber); // Output: 16777215


let bigInt = 1_000_000_000_000n; // 1 trillion
console.log(bigInt); // Output: 1000000000000   
console.log(typeof bigInt); // Output: bigint

let bigInt1 = BigInt(1_000_000_000_000); // 1 trillion as BigInt
console.log(bigInt1); // Output: 1000000000000n

let bigInt2 = BigInt(45);
console.log(bigInt2); // Output: 45n
