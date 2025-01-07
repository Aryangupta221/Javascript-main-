//singleton
//object literals\

const mySym = Symbol("key1")


const jsUser = {
    name:"Aryan",
    "full name" :"aryan gupta",
    [mySym]: "mykey1",
    age : 22,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn : false,


    lastLoginDays:["Monday","Saturday"]
}


// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "aryan@chatgpt.com"


//console.log(jsUser);

jsUser.greetingTwo = function()
{
    console.log(`hello js user,${this.name}`);



    
}
    

console.log(jsUser.greetingTwo);

