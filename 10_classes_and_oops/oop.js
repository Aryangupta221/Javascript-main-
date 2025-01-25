// //const user ={
//     username:"aryan",
//     loginCount : 8,
//     signedIn: true,
//     getUserDetail: function(){
//         //console.log("got user detail");
//         //console.log(`username:${this.username}`);
//         console.log(this);
//         // this shows talking about current context
        
        
//     }
//}

//console.log(user);
//console.log(user.loginCount);
//console.log(user.getUserDetail());

//console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username= username;// left side variable
    this.loginCount= loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

   // return this
    
}
const userOne = new User("aryan",12,true)
const userTwo = new User("aff",11,false)
console.log(userOne.constructor);
//console.log(userTwo);

