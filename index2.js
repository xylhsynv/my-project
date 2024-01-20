const employeeDetails={
    fullName:'',
    position:'',
    yearsOfExperiencezz:'',
    skills:[],
       contact:{
        email:'',
        phone:'',
    }
}
delete employeeDetails.contact['email']

console.log(employeeDetails);

employeeDetails.department=''

const{fullName:employeeName,position,contact}=employeeDetails

const{fullName,...rest}=employeeDetails
console.log(rest);

const projectScores=[
    {
    projectId:24,
    score: 11,
    }
]
console.log(projectScores[0]);
console.log(projectScores[1]);

const personalInfo={
    homeAddress:'',
    emergencyContact:'',
    maritalStatus:'',
}

const emergencyContact={
    ...employeeDetails,...personalInfo
}
console.log(emergencyContact);

