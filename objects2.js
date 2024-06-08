//objects part2 singleton or how to use constructor

// const tinderUser =new Object() //singleton
const tinderUser = {}// non-singleton object

tinderUser.id = "1234"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser); //empty 
//objects inside objects

const regurlarUser = {
    email: "some@{google.com",
    fullName:{
        userFullName: {
            firstName : "hitesh",
            lastName : "hitesh",
        },
    }

}

// console.log(regurlarUser.fullName);
// console.log(regurlarUser.fullName.userFullName);
// console.log(regurlarUser.fullName.userFullName.firstName);

//optional chaning
// console.log(regurlarUser.fullName?.userFullName.firstName); //protection when we get a response from an api

const obj1 = {1:"a", 2:"b"}
const obj2 = {1:"a", 2:"b"}
const obj4= {5:"a", 6:"b"}

// const obj3 = {obj1 ,obj2}
// console.log(obj3); // same array project obj inside object

//to solve this 
// const obj3 =  Object.assign(obj1 ,obj2)
// const obj3 =  Object.assign(target ,source) //here better to use an empty array as target
// const obj3 =  Object.assign({}, obj1 ,obj2,obj4) //better to use

const obj3 = {...obj1,...obj2} // 90% of the time this is used 
// console.log(obj3);

//when value comes from database //array of objects

const users=[
    {
        id: "1",
        email: "h@gmail.com",
    },
    {
        id: "1",
        email: "h@gmail.com",
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // datatype is array //all keys are in array //very imp when usign databases
console.log(Object.values(tinderUser)); // datatype is array //all values are in array //very imp when usign databases
console.log(Object.entries(tinderUser)); // datatype is array //all entries are in array //less usage

// when value dont exist , there could be a crash
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // if this property is available or not

