// destructuring of ARRAY used in react

const course = {
    name: "jsinHundhi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
// const {courseInstructor} = course
// console.log(courseInstructor)


const {courseInstructor: instructor} = course
console.log(instructor)

//props in react .instead of using props.company we use {company} as parameter for the prop // same concept we use destructuring
// const navbar = ({company}) =>{

// }
// navbar(company ="hitesh")

//api concepts //for ex menu card //api when we get values from backend ...prev xml now json


//json syntax
// {
//     "name: "hitesh",
//     "coursename: "js in hindhi",
//     "price: "free",
// }
//fetch methods from apis 
//convert json into obects

//sometimes we get apis in terms of object
// josn //javascript object notation
// [
//     {},
//     {},
//     {}
// ]
