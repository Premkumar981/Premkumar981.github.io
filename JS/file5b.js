// arrow functions
// function greet(){
//     console.log("This is regular function");
// }
// greet();

// const greet = 10;
// const greet = () => {
//     console.log("This is arrow function");
// };
// greet();

// const add = (a,b) => {
//     return a+b;
// }
// const result = add(4,5);
// console.log(result);

const add = (...args) => {
    console.log(args)
};
add(4,5,4,6,6,3)