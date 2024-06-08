//prototype starts here

let myName = 'hitesh     '



console.log(myName.trim().length);

let myHeros= [ "spiderman","throw"]

let heroPower = {
    thor: "hammer",
    spiderman: "sliing",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }

}

Object.prototype.hitesh  = function(){
    console.log(`hitesh is presenet in all objects`);
}

Array.prototype.Heyhitesh = function(){
    console.log(`abdullah says hello`);
}



// heroPower.hitesh()

// myHeros.Heyhitesh()
//array has been given power
// heroPower.Heyhitesh()

//inheritance
const User ={
    name:"chai",

}

const Teacher = {
    makeVideo:true
}

const TeachingSuport = {
    isAvailable:false
}

const TASupport = {
    makeAssignent: "js ASSIGNMENT",
    fullTime: true,
    __proto__: TeachingSuport
}

Teacher.__proto__ = User

//modern syntax
//prototypal inheritance
Object.setPrototypeOf(TeachingSuport, Teacher)

let anotherUsername =  "chai aur code       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"abdullah".trueLength()
"iceTea".trueLength()