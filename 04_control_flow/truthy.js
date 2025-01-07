const userEmail ="a@gmail"
if (userEmail) {
    console.log("got user email");
    
}else {
    console.log("dont have user email");
    
}
const userEmail2 = []
if (userEmail2) {
    console.log("got user email");
    
}else {
    console.log("dont have user email");
    
}

//falsy values
//false,0,-0,BigInt 0n, "",null,undefined,NaN
//truthy values // which are predifined true
// "0",'false'," ",[],{}, function(){}
if (userEmail2.length) {
    console.log("empty");
    
    
}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
    
    
}

// Nullish coalescing operator (??):null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);

const iceTeaPrice = 100
iceTeaPrice >= 80? console.log("morethan 80") : console.log("more than 80")


