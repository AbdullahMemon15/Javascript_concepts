class User  {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
    //static stops this property from geting access
    static createID(){
        return `3243`
    }
}

const hitesh = new User("hitesh")
//  console.log (hitesh.createID())

class Teacher extends User {
    constructor(username,email) {
        super(username)
        this.email = email; 

    }
}

const iphone = new Teacher("iphone","iphone@gmasil.com")
iphone.logMe()
// unable to access because of using  static keyword in the super class
console.log(iphone.createID());
