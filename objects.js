//singleton
// when we declare by literals it does not become singleton
// Object.create //singleton is made cosntructor method

const mySym = Symbol("key1") // use symbol as a key interview question

//key and value pair
const JsUser = {
    name: "hitesh",
    "full name": "Hitesh Chaudhary",
    // mySym: "mykey1",// not correct shows string
    [mySym]: "mykey1", // correct
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
} //object




// console.log(JsUser.email);  // there is another way
// console.log(JsUser["email"]); //better way
// console.log(JsUser.full name); //this doesnot work with spaces
// console.log(JsUser["full name"]); 

// console.log(JsUser.mySym); //
// console.log (typeof JsUser.mySym); //datatype is String here which is wrong

// console.log(JsUser[mySym]);
// console.log (typeof JsUser[mySym]); //datatype is still symbol  here which but way is correct //when we print the object we see the symbol 

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // to freeze the value
JsUser.email = "hitesh@mircosoft.com" //does not work because of freeze but does not give an error
// console.log(JsUser);

//functions 

JsUser.greeting = function () {
    console.log("hello js user");
}

JsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting); // function is not executed but is returned as [Function (anonymous)]
console.log(JsUser.greeting()); // two ouput shown one is undefined and other is the output of the fucntion this is becuase its execited two times even in the browser 
console.log(JsUser.greetingTwo()); // two ouput shown one is undefined and other is the output of the fucntion this is becuase its execited two times  even in the browser 
