//reduce for shopping cart

// const array1 = [1,2,3,4]

// //0 +1 +2+3+4

// const initialValue = 0
// const sumWithInitial = array1.reduce(
//     (acc, x) => acc + x,initialValue);

//accumulator
// intital value is used in accumulator when it is run the first time
//intial value is asked only the first time is run 
// second time the result is used ans the initial value

// in reduce we are using a callback fucntion
const myNums = [1,2,3]

// const myTotal =  myNums.reduce(function (acc,currVal){
//     console.log(`ACC: ${acc} and currval: ${currVal}`);
//     return acc + currVal
// },0)
// 0 is the start value of the accumulator

// now in arrow fucntion 
const myTotal = myNums.reduce( (acc,curr) => acc+curr ,0)

console.log(myTotal);

const shoppingCart= [
    {
        itemName :"Js course",
        price: 3199,
    },
    {
        itemName :"python course",
        price: 4999,
    },
    {
        itemName :"mobile dev course",
        price: 3999,
    },
    {
        itemName :"data science course",
        price: 12999,
    },
]

const pricetoPay =  shoppingCart.reduce( (acc,item)=>item.price+acc ,0)

console.log("price to pay",pricetoPay)
// we will verfiy in future the price is a number

