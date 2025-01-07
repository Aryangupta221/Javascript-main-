//const tinderUser = new Object()
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "aryan"
// tinderUser.isLoggedIn = false 



// //way of declaring new object 1st line is singleton 
// //console.log(tinderUser);
// const regularUser ={
//     email: " some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname : "aryan",
//             lastname : "gupta"
//         }
//     }


// }
// console.log(regularUser.fullname.userfullname.firstname);
// //combining objects
// const obj1 = {1: "a",2 : "b"}
// const obj2 = {3 : "c",4: "d"}
// const obj4 = {5: "r",6: "g"}

// //const obj3 = {obj1, obj2}
// // const obj3 = Object.assign({},obj1, obj2,obj4)
// const obj3 = {...obj1,...obj2,...obj4}// spread operator
// console.log(obj3);

// const users = [
//     {
//         id:1,
//         email : "a@gmail.com"

//     },
//     {
//         id:1,
//         email : "a@gmail.com"

//     },
// ]

// users[1].email//[]used to access the first element of array
// // which is in object form so to access 1st element object form we use dot notation
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//the output shows the keys of tinderuser are in array form so we can access it many times
// console.log(Object.values(tinderUser));//array of all values
// console.log(Object.entries(tinderUser));// array of all keys and vlaues
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor : "hitesh"


}
//course.courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor);
//in react
const navbar =  ({company}) => {

}
navbar(company = "aryan")//destructoring

//api concept
// {
//     "name" : "aryan",
//     "courseName": "js in hindi",
//     "price": "free"


// }
[
    {},
    {},
    {}
]
