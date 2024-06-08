class User {
    constructor(username) {
        this.username = username;

    }

    LogMe(){
        console.log(`user name is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email,password) {
        // knows the super class and uses the this keyword
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

//creatigna  object

const chai = new Teacher("chai","chai@gmail.com","0123")

chai.addCourse()
const masalChai = new Teacher ("masala chai")

masalChai.LogMe()

console.log(chai === masalChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);

