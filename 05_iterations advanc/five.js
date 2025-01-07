//const coding = ["js","ruby","java","python","cp"]


// coding.forEach( function (item) {
//     console.log(item);
    
// }  )
// coding.forEach( (item) => {
//     console.log(item);
    
// })
// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const myCoding = [
    
    {
        languagename : "javascript",
        langfilename: "js"
    },

    {
        languagename : "java",
        langfilename: "java"
    },

    {
        languagename : "python",
        langfilename: "python"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languagename);
    
})