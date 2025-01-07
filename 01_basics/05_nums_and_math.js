const score = 300
// console.log(score);

const balance = new Number(100)
console.log(balance);


// console.log(balance.toString().length)
// console.log(balance.toFixed(2));// show decimal number precision 

const otherNumber = 1123.8966

console.log(otherNumber.toPrecision(3));
// precision of 3 means starting from left precised value upto 3

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-in'));
// ++++++++++ maths +++++++++//

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));

console.log(Math.random());
console.log((Math.random()*10) + 1);


const min = 10 
const max = 20

console.log(Math.floor(Math.random()* (max-min + 1))+ min);
// 

