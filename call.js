function SetUsername (username){
    //complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username,email,password){
    // this is not getting called, its only referenced but not called
    //so we have to use call to call it
    //after execution we need to hold the reference to it for that the method that we use is called .call

    // SetUsername.call(username);
    //we need to give it a reference
    //so we use our own this
    SetUsername.call(this,username);
    this.email =email;
    this.password =password;

}

const chai = new createUser("chai", "face", "123")
console.log(chai);