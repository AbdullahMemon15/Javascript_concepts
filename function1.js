// console.log("i");
// console.log("t");
// console.log("e");

function sayMyname(e)  {
    console.log("h");

}

// sayMyname; //refrence
// sayMyname(); //executionaddTwoNumber()


// function definition has parameters
//when function is called is called arguments // we can also say values
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// addTwoNumbers() //nan no argument


// const result =  addTwoNumbers(3,5) 
// console.log("Result:",result); // problem here
// addTwoNumbers(3,"4") //problem
// addTwoNumbers(3,"a") //problem need to check 
// addTwoNumbers(3,null) //problem //checking numbers

function addTwoNumbers(number1,number2){

    return number1 + number2
    // let result =number1 +number2
    // return result;
    // console.log(number1+number2);// unreachable code after return
}

const result =  addTwoNumbers(3,5) 

// console.log("Result:",result); // problem here when no return in function?

//defaunt value if no value is passed.
function loginUserMessage(username ="hitesh"){
    // if(username === undefined){
    //     console.log("Please enter a username")
    //     return
    // }
// if(udefined){ so we use not operator

// }
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
//undefined is taken as false value
loginUserMessage("abdullah") // problem we have returned the value but we have not printed anything in the function 
// console.log(loginUserMessage()); //undefined logged in when no value is passed 
console.log(loginUserMessage("abdullah")); 
console.log(loginUserMessage()); // testing the if here

//we can use if statment to use the value for the argument
