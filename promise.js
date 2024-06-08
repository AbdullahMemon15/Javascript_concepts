// promises in js
//promise object represents the eventual completion or failure of an asynchronous operation and its recuring value.
//async await
//promises complete in the future
//promise is one of these states
//pending fullfilled, rejetced
//promises are mostly consumed

// ex
// fetch("https://somethinng.com").then().catch().finally()

//promise is an object ---imp  

//new keywords gives us an instance of an object
// const promiseOne = new Promise()

//promise libraries like q and bluebird old which are now built in 
// const promiseOne   = new Promise() // promises also reduce callback hell
const promiseOne   = new Promise(function(resolve,reject) {
    //do an async call
    //db calls cryptography,network
    setTimeout(function(){
        console.log('async task is complete');
        //resolve is a method 
        resolve();
    },1000)
}) // promises also reduce callback hell

//.then is connected to resolve
promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("async task 2");
        resolve()

    },1000)   
}).then(function(){
    console.log("async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve,reject){
    //resolve is directly connected to the then
    setTimeout(function(){
        resolve({usernames:"chai",email:"chai@example.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false
        if(!error){
            resolve({username:"hites",password: "124365"})
        }else{
            reject("ERROR: SOMETHING WENT WRONG")
        }
    },1000)
})

//call back hell and how to ressolve it 
promiseFour.then((user)=>{  
    console.log("user");
    //where is the return going??
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(err){
    console.log(err)
}).finally(()=> console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hites",password: "124365"})
        }else{
            reject("ERROR: JS WENT WRONG")
        }
    },1000)
})
// promiseFive.then
// asynch awiat can not deal directly with errors
// use try catch block


async function consumePomiseFive(){
    try{
        const response = await promiseFive
        console.log(response);

    }catch(error){
        console.log(error);
    }
}

consumePomiseFive()

// async function getAllUsers(){
//     // we pass fetch a url its a request so we use await because it takes time
//     try{

//         const response =  await fetch("https://jsonplaceholder.typicode.com/users")
//         console.log(response);
//         //fetch object returns a promise
//         //response.json takes time so we have to use await
//         const data = await response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log("E;".error);
//     }
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))

//async await is happening at the end the response for the fetch is coming first and logged first how??
// behind the scene what is happening??  
// fetch in next video now
