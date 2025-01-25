// //es6
// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }
//     encryptPassword(){//method
//         return `${this.password}abc`

//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
   

// }
// const chai = new User("aryan","aryan@google.com","123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());
// behind the scene
function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password

}
user.prototype.encryptPassword=function(){
    return `${this.password}abc`

}
const tea = new user("aryan","aryan@google.com","123")
console.log(tea.encryptPassword());