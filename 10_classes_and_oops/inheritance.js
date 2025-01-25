class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password= password
       

    }
    addcourser(){
        console.log(`a new course added ${this.username}`);
        
    }
}
const chai = new Teacher("aryan","aa@google.com","123")
console.log(chai);

chai.addcourser()
const masalaChai = new User("masala")
masalaChai.logMe()
chai.logMe()
