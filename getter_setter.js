class User {
    constructor (email,password) {
        this.email = email;
        this.password = password;

    }
    get email () {
        return this._email.toUpperCase();
    }
    set email (value) {
        this._email = value;
    }
    get password(){
        // return this._password.toUpperCase();
        return `${this._password}hitesh`;
    }
    // we need tp set both getters and setters 
    set password(value){
        this._password = value;
    }
}

const hitesh = new User("h@hitesh.ai","ghg")
console.log(hitesh.password);
console.log(hitesh.email);

//properties that we dont want to give access to fpr example password
//every class has getters and setters
