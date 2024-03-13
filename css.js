// const numbers = [2, 4, 65, 1, 56, 7, 123, 68, 234, 52, 12, 3, 4, 6];

// const output = arr.map ((item) => num * 2 )
// const total
// console.log(arr);
// console.log(number);

// const users = [
//     { name: "Alice", age: 30, interests: ["coding", "hiking"], email: "alice@example.com" },
//     { name: "Bob", age: 25, interests: ["gaming", "reading"], email: "bob@example.com" },
//     { name: "Charlie", age: 35, interests: ["coding", "cooking", "reading"], email: "charlie@example.com" },
//     { name: "Diana", age: 28, interests: ["yoga", "reading", "gardening"], email: "diana@example.com" },
//     { name: "Ethan", age: 40, interests: ["hiking", "photography"], email: "ethan@example.com" },
//     { name: "Fiona", age: 22, interests: ["music", "gaming"], email: "fiona@example.com" },
//     { name: "George", age: 32, interests: ["coding", "gaming", "reading"], email: "george@example.com" },
//     { name: "Hannah", age: 27, interests: ["writing", "yoga"], email: "hannah@example.com" },
//     { name: "Ian", age: 30, interests: ["photography", "cooking"], email: "ian@example.com" },
//     { name: "Julia", age: 24, interests: ["coding", "yoga"], email: "julia@example.com" },
// ];
// const result = users.map ((user) => users.name + ' ' + user.lastname)
// console.log(result);

// const products = [
//     { id: 1, name: "Laptop", price: 1000 },
//     { id: 2, name: "Book", price: 20 },
//     { id: 3, name: "Smartphone", price: 500 },
//     { id: 4, name: "Tablet", price: 300 },
//     { id: 5, name: "Headphones", price: 150 },
//     { id: 6, name: "Keyboard", price: 50 },
//     { id: 7, name: "Mouse", price: 25 },
//     { id: 8, name: "Monitor", price: 200 },
//     { id: 9, name: "Camera", price: 400 },
//     { id: 10, name: "Charger", price: 30 }
// ];

// const updatedProducts = products.map((product) => {
//     const tax = product.price * 0.1;
//     return {
//       ...product,
//       tax,
//       name: `${product.name}-${product.id}`,
//     };
//   });

//   console.log(updatedProducts)

//   const updatedProducts=products.map(product =>({...product,
//     tax: product.price * 0.1,
//     name: ${product.name}-${product.id}
//   }));

//   console.log(updatedProducts);
// const output = users.filter(({age}) => age >= 30)
// console.log(output);

// const products = [
//     { id: 1, name: "Laptop", price: 1000 },
//     { id: 2, name: "Book", price: 20 },
//     { id: 3, name: "Smartphone", price: 500 },
//     { id: 4, name: "Tablet", price: 300 },
//     { id: 5, name: "Headphones", price: 150 },
//     { id: 6, name: "Keyboard", price: 50 },
//     { id: 7, name: "Mouse", price: 25 },
//     { id: 8, name: "Monitor", price: 200 },
//     { id: 9, name: "Camera", price: 400 },
//     { id: 10, name: "Charger", price: 30 }
// ];
// const result=products.filter((products)=>products.price>=50 && products.price<=300)
// console.log(result);

//       const users = [
//         { name: "Alice", age: 30, interests: ["coding", "hiking"], email: "alice@example.com" },
//         { name: "Bob", age: 25, interests: ["gaming", "reading"], email: "bob@example.com" },
//         { name: "Charlie", age: 35, interests: ["coding", "cooking", "reading"], email: "charlie@example.com" },
//         { name: "Diana", age: 28, interests: ["yoga", "reading", "gardening"], email: "diana@example.com" },
//         { name: "Ethan", age: 40, interests: ["hiking", "photography"], email: "ethan@example.com" },
//         { name: "Fiona", age: 22, interests: ["music", "gaming"], email: "fiona@example.com" },
//         { name: "George", age: 32, interests: ["coding", "gaming", "reading"], email: "george@example.com" },
//         { name: "Hannah", age: 27, interests: ["writing", "yoga"], email: "hannah@example.com" },
//         { name: "Ian", age: 30, interests: ["photography", "cooking"], email: "ian@example.com" },
//         { name: "Julia", age: 24, interests: ["coding", "yoga"], email: "julia@example.com" },
//     ];

//     const filteredUsers = users
//   .filter(user => user.age >= 25 && user.age <= 30)
//   .map(user => user.name);

// console.log(filteredUsers);

// const name = "xeyyam";
// console.log(name.at(-1));

// const fullName = "xeyal hwseynov eqdam-oğlu";
// console.log(fullName.split("   "));
const fonPhone = "+994775037461";
const update = fonPhone.replaceAll("74", ".");
console.log(fonPhone, update);
