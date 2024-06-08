//array
//elements can be different as well
//js arrays are resizeable
// arrays are not associative arrays
// in array in javascript copy operator makes a shallow copy
// learn shallow copy (copy whose properties share the same reference point) vs deep copy(properties do not share the same reference point)
// const myArr = [0,1,2,3,4,5,true, "hitesh"] 
const myArr = [0,1,2,3,4,5] 
const myHeroes = ["shaktiman", "hitesh"] 

 const myArr2=new Array(1,2,3,4)
// console.log(myArr[0]);

//Array methods
// myArr.push(6)
// myArr.pop()
// myArr.unshift(9); // time consuming to shift all the values//
// myArr.shift(); // remove the 9 we add

// console.log(myArr.includes(9)); //questionare true or false
// console.log(myArr.indexOf(9)); // -1 bc it does not exist

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr); // type of changes
// console.log(typeof newArr); // type changes

//slice, splice 
console.log("A ", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
// splice changes the original array ------imp or interview slice vs splice
console.log("C", myArr);
console.log(myn2);



