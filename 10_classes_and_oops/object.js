function multiplyByfive(num){
    return num*5;
}
multiplyByfive.power =2
console.log(multiplyByfive(5));
console.log(multiplyByfive.power);
console.log(multiplyByfive.prototype);

function createUser(username,score){
    this.username= username
    this.score = score
}
createUser.prototype.increament = function(){
    console.log(`new score is ${ this.score+=1}`);
    
   
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}
const chai = new createUser("chai",25)
const tea = new createUser("tea",220)
chai.printMe()
tea.printMe()
chai.increament()
tea.increament()