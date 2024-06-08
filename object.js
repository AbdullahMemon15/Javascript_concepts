// javascript and classes
// OOP
// Object
// collection of properties(variables) and methods (functions)
// toLowerCase
// why use OOP
// parts of OOP
// Object literal

// Constructor function
// Prototypes
// Classes
// Instances (new, this)
// 4 pillars
// Abstraction (hide details for ex fetch) Encapsulation (wrap up data / hide ) Inheritance Polymorphism (one method can do lots of task ex console.log)

// ###############imp ##############

//js is a protype based language imppppp not oop or fucntional programing language
//its classe are syntatic sugar over existing prototype based inheritance mechanisms. in other words it provides a more familar syntax for class based lnaguages such as java or c++. but under the hood it works a little bit differently (prototypes)

//oop is a programming paradigm
//promises are object --- we use new key word
//spaghetti code because of which we needed oop

const user ={
    //properties
    username: "hitesh",
    loginCount : "8",
    signedIn: true,
    //methods
    //methods need to be run , we can not just reference
    getUserDetails: function() {
        console.log("git yser details from dtaabase");
        //username not defined?? which username ---> it goes to node stored in js engine . execution context of the function so it does not we are accessing our own data so for that we have to use the this keyword to tell the engine that we are accessing our own data
        // console.log(`username: ${username}`);
        console.log(`userame: ${this.username}`);
        //current context and this knows where to get the values from 
        console.log(this);
    }

}
console.log(user.username);
console.log[user.getUserDetails()]



//printing this is global context instead of the functional context in node environment
// we get empty parenthesis , however when we do the same  is the console of the browser we get the current context which is the window object because the current context global context has lots of values
console.log(this);

//this was object literal now moving on to the constructor functions
//new is a constructor function
//NEW ALLOWS FORM  from one object literal we can create several/multiple instances (which mean memory is not taking much space and all the work is being done) but there are instances we need new context whcih are called constructor function
//new is used for new execution context
// const promiseOne = new Promise()
// const date = new Date();

// fucntion isrun 1 time. it has 1 global execution context

function User(username,loginCount,isLoggedIn) {
    //left is variable right is the value passed
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    //object is return now they can use the  object
    //return this is defined implicitly even if we dont write it
    return this;
}

// const userOne = User("hitesh",12,true)
//user two overrides all the value if we to this problem 
// const userTwo = User("chai aur code",11,false)

//constructor ficntion gives us a new copy to solve this we use a new isntance by using the new keyword

const userOne =new User("hitesh",12,true)
//solve the problem using the new instance by using the new keyword so it has its own copy and does not over ride
//constrcutor function gives us a new instances
const userTwo = new User("chai aur code",11,false)

// when we use the new keyword an empty object is created which is called instance
//step 1 new object created
// step 2 constructor function is called bc of new keyword  (everything we have written in the function is passed on)
// step 3 all the arguments we ha ve written are injected in the this keyword
//step 4 we get it in a function

console.log(userOne);
console.log(userTwo);
// reference to its self fgives us the output  [Function: User]
console.log(userOne.constructor);
// instance of method

