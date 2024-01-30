const numbers = [1, 2, 3, 4, 5]
function calculateSum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log(calculateSum(numbers));
let counter = 0;
while (counter <= 5) {
    console.log(counter);
    counter++;
}
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
let countDown = 5
do {
    console.log(countDown);
    countDown--;
} while (countDown >= 0)
function evaluateGrade(grade) {
    if (grade >= 60) {
        return "pass";
    } else {
        return "fail";
    }
}
console.log(evaluateGrade(59));
console.log(evaluateGrade(89));



