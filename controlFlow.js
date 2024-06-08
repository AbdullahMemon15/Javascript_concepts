// if
// condition is true  the code inside the scope is executed

const isUserLoggedIn = true
const temperature  = 70

// if(isUserLoggedIn){
//     console.log(isUserLoggedIn);
// }
// < , > , <=, >= , == (value) = assignment , ===  also checks the type and the value, != ,!==

// if(temperature < 50){
//     console.log(`less than 50`);
// }
// else{
//     //conditional code
//     console.log(`temperature is greater than 50`);
// }

// const score =  200
// if(score >100){
//     const power  = "fly"
//     console.log(`User Power: ${power}`);
// }

//var scope is global so code is not safe

//shorthand notation
//implicit scope --one line , we can use two lines by using commas but do not use itt ever

// const balance =1000
// if(balance >500) console.log("test");

// if (balance > 500) {
//     console.log(`less than 500`);
// }else if (balance <750) {
//     console.log(`less than 750`);
// }else{
//     console.log(`less than 1200`);
// }

const UserLoggedIn =true
const debitCard = true
const loggedInFromGoggle = false
const loggedInFromEmail = true

if(UserLoggedIn &&debitCard ){
    console.log(`Allow to buy course`);
}

if( loggedInFromGoggle || loggedInFromEmail){
    console.log(`User Logged in`);
}
