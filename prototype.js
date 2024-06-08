//mechanism of js
//prototype
//prototypal inheritance

//behavior of function in js
//we get new and classes due to prototype
//prototypal behavior
//prototypal inheritance

//array is an object
// array---> object--->null 
// string --- >object--->null 
//inheritance behavior

//is function object?? or is function 
// function is a function as well as function is also an object

function multiplyBy5 (num){
    return num*5
}


multiplyBy5.power =2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

//object protype is null we cam use getter and setters though

function createUser (username,score){
    // this gives us the current context
    this.username = username
    this.score = score
    // console.log("");
}

createUser.prototype.increment = function (){
    score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}
// this does not have context... context means who as called u for ex mother and father calling u at the same time. so to explain the context we use the this keyword (who ever has called you do its works this means jis ney bhi bulaya)
// const chai = createUser("chai",25)
// const tea = createUser("tea",250)

//problem and iterview question
//properties have been injected but the when the value is transfered form function tot he variable // we need to use the new keyword to tell it we have new prototypes injected
const chai = new createUser("chai",25)
const tea =  new createUser("tea",250)
chai.printMe()
tea.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/