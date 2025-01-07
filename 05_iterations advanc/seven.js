const myNums =[1,2,3,4,5,6,7,8,9,10]

//const newNums =myNums.map( (num) =>num +10)
const newNums =myNums
       .map((num) => num *10)// in new array num *10 is added to next array map
       .map((num) => num +1)
       .filter( (num)=> num>=40)
console.log(newNums);
