// promise
// const f1 = () => {
//     setTimeout(() => {
//         return 5;
//     },1000);
// };
// const f2 = (x) => {
//     console.log(x+6);
// };
// const n = f1()
// f2(n);

// const f1 = () => {
//         return 5;
// };
// const f2 = (x) => {
//     console.log(x+6);
// };
// const n = f1()
// f2(n);

// const f1 = () => {
//     return new Promise((resolve, reject) => {
//         resolve(5);
//     });
// };
// const f2 = (x) => {
//     console.log(x + 6);
// };
// const n = f1();
// f2(n);

// const f1 = () => {
//     return new Promise((resolve, reject) => {
//         resolve(5);
//     });
// };
// const f2 = (x) => {
//     console.log(x + 6);
// };
// const n = f1();
// f1().then((n) => f2(n));

// const f1 = () => {
//     return new Promise((resolve, reject) => {
//         reject("Error: Unable to fetch data");
//     });
// };
// const f2 = (x) => {
//     console.log(x + 6);
// };
// f1()
// .then((n) => f2(n))
// .catch((err) => console.log(err));

// const f1 = (num) => {
//     return new Promise((resolve, reject) => {
//         if(num<0){
//             reject("Invalid");
//         }else{
//             resolve(num);
//         }
//     });
// };
// const f2 = (x) => {
//     console.log(x + 6);
// };
// f1(3)
// .then((n) => f2(n))
// .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((data) => {
//     data.forEach((value) => {
//         console.log(`Name: ${value.name}, Email: ${value.email}`);
//      // console.log(value.name, value.email);
//     });
// })
// .catch((err) => console.log("Something went wrong"));

const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
        data.forEach((value) => {
            console.log(value.name);
        });
}
fetchData();