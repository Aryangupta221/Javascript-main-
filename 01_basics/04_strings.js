const name ="aryan"
const repoCount = 50

console.log(name + repoCount +"value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
// this is modern way of writing


const gameName = new String('aryan-c')

//console.log(gameName[0]);// 0th key accessed i.e a printed
//console.log(gameName.__proto__);

// console.log(gameName.length);// length of string aryanc
// console.log(gameName.toUpperCase());//converted aryanc to upper case but doesnt change original value
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));


const newString =gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "  aryan   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aryan.com/aryan@gupta"
