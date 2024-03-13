// function createDelay(milliseconds) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("delayCompleted");
//     }, milliseconds);
//   });
// }
// createDelay.then((value) => {
//   console.log(value);
// });

const callAPİ = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(response);
};
callAPİ();
