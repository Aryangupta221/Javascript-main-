// primitive


// 7 types : string ,number ,boolean,null,undefined,symbol,BigInt

// reference (non primitive)

//Array,Objects, Functions


// +++++++++++++++++++++++++++++++

// type of memory stack, heap

// Stack (primitive) , Heap (Non- primitive)

let myYoutubename = "aryan"


let anotherName = myYoutubename
anotherName= "aryann"
console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    email : "user@google.com"
    
}
let userTwo = userOne
userTwo.email= "aryan@google.com"
console.log(userOne.email);
console.log(userTwo.email);