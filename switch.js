//switch

// key is the value that we want to check
// value is the value that we want to check against
// if the key is equal to the value, then return true
// otherwise, return false

// const month = "march"

// switch (month) {
//     case "jan":
//             console.log("January");
//         break;
//     case "feb":
//             console.log("Feburary");
//         break;
//     case "march":
//             console.log("March");
//         break;
//     case "april":
//             console.log("April");
//         break;

//     default:
//         console.log(`no case matched`);
//         break;
// }

//truthy values and falsy

// const userEmail = "h@hitesh.ai"

// if(userEmail){
//     console.log('got the user email');
// }else{
//     console.log('dont have user email');
// }

const userEmail =[]

//falsy value 
// false ,0 , -0 (interviews), bigInt 0n , "" , null ,undefined, NaN

//truthy values
// truth "0" (if 0 is in string) , "false", " " (space inside string) , [] , {} , function(){} ,

//detect if array is empty
if(userEmail.length === 0 ){
    console.log("array is empty");
}

const emptyObject = {};
 //detect if object is empty
if(Object.keys(emptyObject).length ===0){
    console.log("Object is empty");
}
//some imp inputs and outputs
// false ==0
// true

//false  == ""
//true

// 0==""
//true 

//  Nullish Coalescing operator (??) null undefined

// made for null and undefined

let val1;
// val1 = 5 ?? 10
// soemtimes when we use firebase or database we get two responses , for those special case we use this
//case for database
// checks the value for the null (safety check for null)
// val1 = null ?? 10;

// val1 = undefined ??15

val1 = null ?? 10 ??20

console.log(val1); 


//nullish  and ternary are different

//condtion ? true :false

const iceTea =100
iceTea >= 80 ? console.log("less than 100")  : console.log("more than 100");;