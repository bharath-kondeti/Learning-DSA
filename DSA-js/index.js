// Let's see very basics for programming.

// String, Numbers and boolean are the most important and basic data types in any language.

console.log('Hello World');

let x = 10;
let y = 20;

let firstName = 'Bharath';
let lastName = 'Kondeti';

// String Addition
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Math Addition
let z = x + y;
console.log(z);

// If we observe here, the same + plus behaves differently when used in different contexts. It concatenates if a string is involved in one of the operands or it can also perform a math additon if two operands are numbers.

// Let see some mixed operand type solutions
let testName = fullName + z;
console.log(testName);
// Bharath Kondeti30 will the output. If you see, it has concatenated the string. This means, the JS engine automatically converts the other operand to a string if one operand is already a string.


let testStr = true;
console.log(testStr);

// Arrays
let arr = [2, 9, 2];
console.log(arr);

let obj = {
  a: 1,
  b: 'Bharath'
};

console.log(obj);
console.log(obj.b);
