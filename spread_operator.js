const arr = [1,2,3];
const arr2 = [4,6,9,6];

const res = Math.max.apply(Math, arr);
console.log(res); //3

const resSpread = Math.max(... arr);
console.log(resSpread); //3

const resSpread2 = Math.max(...arr, ...arr2);
console.log(resSpread2); //9

const resSpread3 = Math.max(10, ...arr, 4, 6, ...arr2);
console.log(resSpread3); //10

const shallowCopy = [... arr];
console.log(shallowCopy); //[1,2,3]

const shallowCopy2 = [... arr, ...arr2];
console.log(shallowCopy2); //[1,2,3,4,6,9,6]