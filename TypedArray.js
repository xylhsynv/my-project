// function thePlus(Element, index, array) {
//   return Element < 0;
// }
// const int8 = new Int8Array([-10, 20, -30, 40, -50]);
// const positives = new Int8Array([10, 20, 30, 40, 50]);
// console.log(int8.some(thePlus));

// console.log(positives.some(thePlus));

// const uint8 = new Uint8Array([25, 36, 49]);
// const roots = uint8.map(Math.sqrt);
// console.log(roots);

// const uint8 = new Uint8Array([10, 20, 30]);
// uint8.forEach((element) => console.log(element));

// function logArrayElements(elment, index, array) {
//   console.log(`a[${index}]=${elment}`);
// }
// new Uint8Array([0, 1, 2, 3]).forEach(logArrayElements);

// const uint8 = new Uint8Array([70, 20, 100, 65, 76, 88]);
// uint8.sort();
// console.log(uint8);

const customers = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    location: { city: "New York", country: "USA" },
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    location: { city: "Paris", country: "France" },
  },
];

const orders = [
  { orderId: 101, customerId: 1, product: "Laptop", quantity: 1, price: 1200 },
  {
    orderId: 102,
    customerId: 2,
    product: "Smartphone",
    quantity: 2,
    price: 800,
  },
];

// ////map()
// const result = arr.map((num) => num);
// console.log(result);
const xtEmails = customers.map((customer) => customer.email);
console.log(xtEmails);

// ////filter()
// const inJS = arr.filter((num) => num % 2);
// console.log(inJS);
const xtOrder = orders.filter((order) => order.quantity * order.price > 1000);
console.log(xtOrder);

// ///find()
// const found = arry1.find((elment) => elment > 12);
const taskHard = customers.find((customer) => customer.name === "Alice");
console.log(taskHard);

////findIndex()
// const array1 = [5, 8, 14, 140, 48];
// const theAdd = (elment) => elment > 13;
// console.log(array1.findIndex(theAdd));
const result102 = orders.findIndex((order) => order.orderId === 102);
console.log(result102);

// const result = (orderId) => orderId === 102;
// console.log(orders.findIndex(result));

// const arr = [1, 2, 3, 4, 5];
// const csBlue = arr.some((arr) => arr > 3);
// console.log(csBlue);
