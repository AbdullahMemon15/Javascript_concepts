const score = 400;
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // ecommerce website or applications 
 
// const otherNumber = 1123.8966 // asnswer in e
const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3)); // returns a string

const hundreds = 10000000
// console.log(hundreds.toLocaleString()); // 10,000,000 // US standards commas
// console.log(hundreds.toLocaleString('en-IN')); // 10,000,000 // indian standards commas

// ++++++Maths+++++++++

// console.log(Math); //object

// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.round(Math.random()));
// console.log(Math.floor([4.5]));
// console.log(Math.ceil([4.5]));
// console.log(Math.max(2,4,6,24,1,2,-33));
// console.log(Math.min(2,4,6,24,1,2,-33));

console.log(Math.random()); //0 and 1
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) +min) //formula //+1 to avoid 0 case
//dsa
// Number.MIN_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER
// Number.MAX_VALUE
// Number.MIN_VALUE
