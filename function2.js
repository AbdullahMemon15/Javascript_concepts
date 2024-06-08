//ecommerce //shopping cart //dont know the argument

//rest and spread same ... depends on use case
// function calculatePrice(...num1) {
//     return num1 //retunrs an array
// }

//interview question
function calculatePrice(val1,val2,...num1) {
    return num1 
}

// console.log(calculatePrice(200,400,500))

//rest operators

//objects
const user = {
    username:"hitesh",
    price: 199,
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price: 399
})


//typesafety of the object needs to be checked for ex when we access anyobject.price from the object but the object has prices instead of price 
//price which is extracted is available or not
//value has the correct type or not that is why ppl like typescript// here we have to use loops to checks this

//using arrays
const myNewArray = [200,300,500,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

