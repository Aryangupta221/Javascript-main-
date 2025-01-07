function sayMyName(){
    console.log("ar");
    console.log("yan");
}

//sayMyName()//parenthesis is for using and calling
// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);

// }
function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2


}
addTwoNumbers(3,4)//if we dont give no. prblm happen
addTwoNumbers(3,"4")
addTwoNumbers(3,"a")

const result = addTwoNumbers(3,5)
//console.log("result",result);
function loginUserMessage(username= " sam"){
    if(!username){
        console.log("please enter a username");
        return

    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Aryan"));// we have return the function 
// havent print using console log
//console.log(loginUserMessage("hitesh"));
//we have left undefined above so use if else
//console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){//using rest operator
    return num1

}
console.log(calculateCartPrice(200,400,500,2000));
//got an array 
const user ={    // object initiazing
    username: "aryan",
    price: 199
};
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user);// calling function
handleObject({
    username: "sam",// we can also introduce object inside function
    price:399
})
const myNewArray = [200,400,600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));
