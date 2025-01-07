//array

const myArr = [0,1,2,3,4,5]

const myHeroes = ["iron man", "dc"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);
// array methods
// myArr.push(6)// push element 6 in array
// console.log(myArr);

// myArr.push(7)
// console.log(myArr);

myArr.pop()
console.log(myArr);// popped 5

//myArr.unshift(9)//shift 9 to start 
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));//-1 means not exist
// console.log(myArr.indexOf(3));

//slice and splice 

console.log("A",myArr);
const myn1 = myArr.slice(1,3)// start from 1 and not include 3 
console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,3)
console.log("C",myArr);

console.log(myn2);
//splice manipulate oiginal array
