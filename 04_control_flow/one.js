// // if 
// const isUserloggedIn = true

// const temperature = 55
// if (temperature<50 ){
//     console.log("less than 50");
    
// // for type checking use ===



// } else {
//     console.log("not less than 50");
    
// }

// console.log("temperature is greater than 50");

// //<, >,<=,>=, == ,!=, ===
// const score = 200
// if(score>100){
//     let  power ="fly"// variable should be outside scope
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`);// not execute outisde 

//const balance =1000
//if(balance>500) console.log("test");//implict scope print in single line
//nesting
// if (balance <500) {
//     console.log("less than 500");
    

    
// } else if (balance<740 ){
//     console.log("less than 740");
// }else if (balance <900){
//     console.log("less than 900");
// }else if(balance< 1200){
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false 
const loggedInFromEmail=true
if (userLoggedIn && debitcard && 2==3) {
    console.log("allow to buy course");
    
    
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
    
}// if single condition is true log statement printed