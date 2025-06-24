// const student = {
//     name: "Prem",
//     age: 21,
// };
// console.log(JSON.stringify(student));

const student = '{"name":"Prem","age":21}';
const newStudent = JSON.parse(student);
console.log(newStudent);
console.log(newStudent.name);