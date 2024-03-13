// function callbackFunction() {
//   console.log("hello World");
// }
// ///Higher order Function
// function higherOrderFunction(func) {
//   console.log("hello World");
//   func();
// }
// higherOrderFunction(callbackFunction);

// const radius = [1, 2, 3];

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };
// const calculateDiametr = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[1]);
//   }
//   return;
// };
// console.log(calculateArea(radius));
// console.log(calculateArea(radius));

// const radius = [1, 2, 3];
// const area = function (radius) {
//   return Math.PI * radius * radius;
// };
// const diameter = function (radius) {
//   return 2 * radius;
// };

// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// console.log(calculate(radius, area));
// console.log(calculate(radius, diameter));

// const arr = [1, 2, 3, 4, 5];
// const result = arr.map((num) => (num += 10));
// console.log(arr);
// // console.log(result);

// const users = [
//   { firstName: "John", lastName: "Doe", age: 25 },
//   { firstName: "Jane", lastName: "Doe", age: 30 },
//   { firstName: "Jack", lastName: "Doe", age: 35 },
//   { firstName: "Jill", lastName: "Doe", age: 40 },
//   { firstName: "Joe", lastName: "Doe", age: 45 },
// ];

// const result = users.map((user) => user.firstName + " " + user.lastName);
// console.log(result);

// const arr = [1, 2, 3, 4, 5, 6];
// const dcBB = arr.filter((num) => num % 2);
// console.log(arr);
// console.log(dcBB);
