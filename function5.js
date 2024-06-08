//arrow function
//es6 2015
// this keyword//
// prototype and prototype inheritance 

//no this in arrow function

const user = {
    username: "hitesh",
    price:"999",
    welcomeMessage: function(){
        //this refers to the current context
        //current context is inside the curly braces , current scope
        //this is used for current context 
        console.log(this);
        return console.log(`${this.username}, welcome to website`); 
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//interview question
// console.log(this) // empty object is returned in node object {} //in console in inspect it shows windows.because in windows it is the windows object 
// in browser the global object is the windows object
// in node the global object is the empty object {}


// function chai(){
//     let username ="hitesh"
//     console.log(this.username); //undefined 
//     //in functions we can not access this
// }
// chai() //when this is printed inside function in node environment we get alot of values


// const chai = function () {
//     let username ="hitesh"
//     console.log(this.username); //undefined
// }

// chai() //undefined


// arrow function
// es6 one more methid
const chai = ()=>{
        let username ="hitesh"
        // console.log(this.username); //undefined
        console.log(this); //we can print this inside the arrow function we get the curly braces {} as the output
    }
    
// chai() //undefined

//explicit return // we have to use the return keyword
// const addTwo = (num1,num2)=>{
//     return num1+ num2
// }

// console.log(addTwo(3,4));

//
// () =>{} //arrow fnction now we can hold this in a variable by giving it a name
// const addtwo  = () =>{}

//implicit return
// const addTwo = (num1,num2)=> num1+ num2
    
//technique used in react alottttt 
//if we wrap in curly braces we have to use return keyword
//but if we wrap in parenthesis we do not have to use the return keyword.
// const addTwo = (num1,num2)=> (num1+ num2)

// imp: note to return an object in implicit return we do have to use the {} brackets
const addTwo = (num1,num2)=> ({username:"hitesh"})
console.log(addTwo(3,4));

const myArray = [2,5,6,7,8]

// myArray.forEach(function (){})
// myArray.forEach(()=>{})
