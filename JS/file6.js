// objects
const student = {
    name: "Prem",
    age: 21,
};
console.log(student)
console.log(student.name)

student.city = "Jalandhar"
console.log(student)
student.city = "Hyderabad"
console.log(student)
console.log(student.name)
console.log(student["name"])

delete student.city
console.log(student)
console.log(Object.keys(student))
const keys = Object.keys(student)
console.log(keys)
const values = Object.values(student)
console.log(values)