
//for in loops
// for each loop
// for of loop

//for of loop
//higher order function
//array specific loops
 //["","",""]
 //[ {},{} ,{}] // objects

//  const arr = [1,2,3,4,5]

//  for (const iterator of object) {
    
//  }
// object is not js object , mean what thing do we want to loop over

//  for (const num of arr) {
//     console.log(`${num}`);
//  }

//  const greetings = "hello world"

//  for (const greet of greetings) {
//     if(greet ==" "){
//         continue;
//     }
//     console.log(`each char is ${greet}`);
//  }

//mapss 
//maps follow order and have unique values

// const map = new Map()
// map.set('IN', "India")
// map.set('US', "United states of America")
// map.set('PK', "Pakistan")
// map.set('IN', "Indiaa")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
 //array destructure key and value
// for (const [key,value] of map) {
//     console.log(key,":-", value);
// }

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'SPIDERMAN'
// }

// there is a way to iterate over object so this throws an error
// for (const [key,value] of myObject) {
//     console.log(`${key} and value is ${value}`);
// }

// ------------------objectss--------------
// const myObject = {
//     js : "javascrit",
//     cpp: "C++",
//     rb:"Ruby",
//     swift: "Swift"
// }
// for (const key in myObject) {
//         console.log(`${[key]} shortcut is for ${myObject[key]}`);
// }
//for in loop can be used for object and others

// const programming = ["js","ruby","cpp","py"]
// for (const key in programming) {
//         console.log(programming[key]);
//         // console.log(key); // we get the index with key in for in for arrays a drawback
// }


//no iteration on maps like this
// const map = new Map()
// map.set('IN', "India")
// map.set('US', "United states of America")
// map.set('PK', "Pakistan")
// map.set('IN', "Indiaa")
// for (const key in map) {
//     console.log(key);   // nothing shows // maps is not iterable so we can not write it like this
// }

// object ---- > for in
//array --> for of and others

//array map and for each is used alot

// const coding = ["js","ruby","java","python","cpp"]
// for each is higher order function
// . for methods
// callback so no name for the function
//function is inside the array so we can use val or num

// coding.forEach(function (val){
//     console.log(val);
// })

// another method using arrow function
// coding.forEach( (item)=>{
//     console.log(item);
// })

//function

// function printMe(item){
//     console.log(item);
// }
// //reference for the function is passed not executed no printme()
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

//[{},{},{}] // common scenario used in for each

const myCodings = [
    { languageName: "java",
        languageFileName: "js"
    },
    { languageName: "c++",
        languageFileName: "cp"
    },
    { languageName: "ruby",
        languageFileName: "ruby"
    },
    { languageName: "swift",
        languageFileName: "sf"
    },
]

//iteration of an array containg objects

myCodings.forEach((item)=>{
    // console.log(item.languageName,item.languageFileName);
    console.log(item.languageName);
})
