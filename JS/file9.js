//array methods
// const points = [2, 5, 3, 2, 1, 8];
// const score = [10, 20, 50, 20];
// console.log(score);
// console.log(score[0]);
// score.push(70);
// console.log(score);
// console.log(score.length);
// for (let i = 0; i < score.length; i++) {
//     console.log(score[i]);
// }
// points.forEach((value) => {
//   console.log(value);
// });
// points.forEach((value, index) => {
//   console.log(value,index);
// });
// points.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });
// const points = [1,4,3,5,6,8,7];
// points.forEach((value, index, arr) => {
//     console.log(value);
// });

// const points = [1,4,3,5,6,8,7];
// const newArr = points.map((value, index, arr) => (value+=5));
// console.log(newArr);

// const points = [1,4,3,5,6,8,7];
// const newArr = points.filter((value, index, arr) => value > 2);
// console.log(newArr);

// const points = [1,4,3,5,6,8,7];
// const result = points.find((value) => value > 5);
// console.log(result);

// const points = [1,4,3,5,2,8,7];
// const result = points.find((value) => value === 2);
// console.log(result);

// const points = [1,4,3,5,6,8,7];
// const result = points.reduce((sum, value) => {
//     return sum + value;
// },0);
// console.log(result);

const points = [1,4,3,5,6,8,7];
const newArr = points.map((value) => 5);
console.log(newArr);