const marvel_heroes =["thor","iron man","spiderman"]
const dc_heroes =["batman","flash","superman"]
//marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);


// console.log(marvel_heroes[3][1]);//not a good way to access it 

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);
//easy option 
//using spread option glass break all pieces 
const all_new_heores = [...marvel_heroes,...dc_heroes]

console.log(all_new_heores);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)// flat option helps in flatting and opening array inside array
console.log(real_another_array);


console.log(Array.isArray("aryan"));
console.log(Array.from("aryan"));
console.log(Array.from({name : "aryan"}));//curly bracket denote object 


let score1 = 100
let score2 = 200
let score3 = 300
//convert above into array
console.log(Array.of(score1,score2,score3));
