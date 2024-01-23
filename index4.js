const scores = [5, 6, 7, 8, 9]
const [firstScore, secondScore] = scores
console.log(scores);

const student = {
    name: 'xeyal',
    age: 17,
    isEnrolled: true
}
const { name, age } = student
const { ...reest } = student
console.log(student);

console.log(typeof age);
console.log(typeof name);
console.log(typeof isEnrolled);
console.log(typeof firstScore);

console.log(scores.length);


const sum = firstScore + secondScore
const difference = firstScore - secondScore

console.log(">", firstScore > secondScore);
console.log("<", firstScore < secondScore);

const Result = firstScore > 5 && secondScore < 10 && student.age >= 18;
console.log(Result);
const result = firstScore === 6 || secondScore !== 8 || student.age < 21;
console.log(result);
const isEnrolledResult = !student.isEnrolled;
console.log(isEnrolledResult);