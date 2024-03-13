let arr1 = ["a", "b", "h", "f"];
let arr2 = ["f", "c", "n"];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const cal = (operator, number1, number2) => {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      console.log("yoxdur");
  }
};
console.log("+", 5, 4);

const persons = [
  { name: "Eli", age: 25, gender: "male" },
  { name: "Aygun", age: 30, gender: "female" },
  { name: "Nurlan", age: 35, gender: "male" },
  { name: "Aysel", age: 40, gender: "female" },
];
const user = persons.find(
  (person) => person.age > 30 && person.gender == "male"
);
console.log(user);

const arr = ["good", "bad", "bad", "bad", "bad"];
const name1 = (arr) => {
  const arr1 = arr.filter((elment) => elment === name1);
  if (arr1.lenght < 1) {
    console.log("fail");
  } else if (arr1.lenght < 3) {
    console.log("publish");
  } else {
    console.log("I smell a series");
  }
};
name1(arr, "good");
