const numbers = [10, 20, 30, 40, 50]
const [firstNumber, secondNumber] = numbers

console.log(secondNumber);
console.log(numbers.length);

const myString = 'xeyal'
const myNumber = 42
const myBoolean = true

console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(numbers);

const sum = firstNumber + secondNumber;
const difference = firstNumber - secondNumber;
const product = firstNumber * secondNumber;
const quotient = firstNumber / secondNumber;
const remainder = firstNumber % secondNumber;

console.log('==', firstNumber == secondNumber);
console.log('===', firstNumber === secondNumber);
console.log('!=', firstNumber != secondNumber);
console.log('!==', firstNumber !== secondNumber);
console.log('<', firstNumber < secondNumber);
console.log('>', firstNumber > secondNumber);
console.log('<=', firstNumber <= secondNumber);
console.log('>=', firstNumber >= secondNumber);

const evenPositfe = firstNumber % 2 === 0 && firstNumber > 0;
console.log(evenPositfe);

const eitherevenPositive = firstNumber % 2 === 0 || firstNumber > 0;
console.log(eitherevenPositive);

const notNegative = !(firstNumber < 0);
console.log(notNegative);


