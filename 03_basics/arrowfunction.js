const user = {
    username : "aryan",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }//this shows current context of value
    
    
}

//  user.welcomeMessage()
//  user.username="sam"
//  user.welcomeMessage()
//console.log(this);
// 

const chai = () => {
    let username ="aryan"
    console.log(this.username);
    
}
chai()
// u cant use this in a function or arrow function

// const addTwo = (num1,num2) =>{
//     return num1+ num2
// }
//const addTwo = (num1,num2) => ( num1+ num2)
//implicit return
const addTwo = (num1,num2) => ( {username : "aryan"})//for object we use parenthesis
console.log(addTwo(3,4));
