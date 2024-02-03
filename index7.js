// function f3() {
//     console.log('fuck xeyal');
// }
// function f4() {
//     f3()
//     console.log('fuck ruslan');
// }
// f3()


// function recurse() {
//     console.log("fucuk");
//     recurse();

// }

// recurse();

// // function recurse() {
// //     if (condition) {
// //         recurse();
// //     }
// //     else {
// //         stop calling recurse()
// //     }
// // }

// // recurse();


// function countDown(number) {
//     console.log(number);

//     const newNumber = number - 1;
//     if (newNumber > 0) {
//         countDown(newNumber)

//     }
// }
// countDown(7)


// function factorial(y) {
//     if (y === 0) {
//         return 1;
//     }
//     else {
//         return y * factorial(y - 1);
//     }
// }
// const num = 3;
// if (num > 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }




// task borclu\\\\\\\\\\\\\\\\\\\\\\\\\\









function greet(name, greeting = 'hello') {
    return greeting + ' ' + name;
}
console.log(greet('salam'));
console.log(greet('fuck', 'shatap'));

const greet = (name, greeting = 'hello') => `${greeting} ${name}`;

const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(1));



const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);



function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }

}


function sumAll() {
    let total = 0;
    for (let index = 0; index < arguments.length; index++) {
        total += arguments[index];
    }
    return total;

};
console.log(sumAll(1, 2, 3, 4, 5));

const first = () => {
    console.log("fuck software");
    second();
    console.log("");
};
const second = () => {
    console.log("dick living");
    third();
    console.log("big dick");
};
const third = () => {
    console.log("there was no living");
    console.log("no big");
};
first();
