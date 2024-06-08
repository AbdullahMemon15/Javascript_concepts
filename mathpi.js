const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// yes we can take the descrtor values and change the value of the flags
// we can also hard coded value to our own framework so that when others use our framework they can not change the values
// yes we can do that  , we cna take the properties/flags and change theor values as well

// const myNewObject = Object.create(null)

const chai = {
    name: 'ginger ale',
    price :250,
    isAvailable: true,
    //we dont want to show this bc we want key value pair to solve this we use if else 
    orderChai: function(){
        console.log(`chai nahin bani`);
    }
}
//does this have decriptor values

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false,
})
// console.log(descriptor.writable)
// console.log(descriptor)
// console.log(Math.PI)

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

 //for of is easier for objects
for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== "function"){
        console.log(` ${key} : ${value}`);
    }
}