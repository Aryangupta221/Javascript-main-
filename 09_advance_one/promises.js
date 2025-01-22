
const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //db calls,crypotography,network related
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
    
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
        

    },1000)
}).then(function(){
    console.log("async 2 is resolve");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "aryan",email:"example@gmail.com"})

    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})

// 4th promise
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        //let error = false

        if (!error) {
            resolve({username:"aryan",password:"123"})
            
        }else{
            reject('error:something went wrong')
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
    
} )
.then((username)=>{
    console.log(username);
    //this is chaining

})
.catch(function(err){
    console.log(err);
    
}).finally(()=>console.log("the promise is either resolved or rejected "))


//promise 5
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        //let error = false

        if (!error) {
            resolve({username:"js",password:"123"})
            
        }else{
            reject('error:js went wrong')
        }
    },1000)

});
async function consumePromiseFive(){
    try {
        const response =await promiseFive
        console.log(response);
    
    } catch (error) {
        console.log(error);
        
        
    }
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =await response.json()
//         console.log(data);
    
//     } catch (error) {
//         console.log("E:",error);
        
        
//     }
// }
// did it with try catch async await now doing itwith .then ,catch

//getAllUsers()
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
    
// })
// .catch((error)=>console.log(error))


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error))
// this is happening firstly 

