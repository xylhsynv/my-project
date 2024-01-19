const studentProfile = {
    name:'xeyal',
    age:18,
    course:'bbs',
    hobbies:['xeyal',18,'bbs']

}
delete studentProfile['course']
const{name:studentName,age}= studentProfile
const { name,...rest}=studentProfile
//console.log(rest);

const grades=[85,92,78,95]

console.log(grades[0]);
console.log(grades[1]);

const additionalInfo={
    adderss:'bileceri',
    phoneNuber: 775037461,
}
const completeProfil={
    ...studentProfile,...additionalInfo
}
console.log(completeProfil);