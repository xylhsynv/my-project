const color = "red"
switch (color) {
    case 'red':
        console.log("stop");
        break;
    case "green ":
        console.log("go");
        break;
    case "yellow ":
        console.log("caution");
        break;
    default:
        console.log("unknown colors");
        break;
}
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i], [j]);
    }
}

const product = {
    name: "xeyal",
    price: 18,
    inStock: true
}
for (let key in product) {
    console.log('${key}:${product[key]}');
}

if (product.price < 50 && product.inStock) {
    console.log("Available");
} else {
    console.log("Unavailable");
}


