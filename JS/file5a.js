// function arguments and return
function greet(student){
    console.log(`Hello ${student}`)
}
greet("Prem")

// function add(a,b){
//     return a+b;
// }

// let result = add(3,5);
// console.log(result);

function add(){
    console.log(arguments)
    console.log(arguments.length)
}
add(1,2,3,4,5,6,7,7,88)