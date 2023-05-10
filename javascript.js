console.log("Hello World");

let value1 = 23;
let value2 = 97;

/* 1 */
console.log(value1 + value2);
/* 2 */
console.log(13 + 17 + 23 + 29 + 31 + 37);
/* 3 */
console.log((4 + 6 + 9) / 77);
/* 4 */
let a = 10;
console.log(a);
console.log(9 * a);
let b = 7 * a;
console.log(b)
/* 5 */
const MAX = 57;
const ACTUAL = MAX - 13;
const PERCENTAGE = ACTUAL / MAX;
console.log(PERCENTAGE);

/* 1 */
function add7(number1) {
  sum = number1 + 7;
  return sum;
}

let value3 = add7(value1);
console.log(value3);

/* 2 */
function multiply(number1, number2) {
  product = number1 * number2;
  return product;
}

console.log(multiply(value1, value2));

/* 3 */
function capitalize(string1) {
  firstLetter = string1.slice(0, 1);
  firstLetter = firstLetter.toUpperCase(firstLetter);
  restOfString = string1.substring(1);
  string1 = firstLetter + restOfString;
  console.log(string1);
}

/* 4 */
function lastLetter(string1) {
  console.log(string1.slice(-1));
}

let myString = "smaTad";
capitalize(myString);
lastLetter(myString);