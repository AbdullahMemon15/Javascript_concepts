// nested scope and closures
// closures ----- DOM

//example parent taking icecream from children which is cruel
// child taking icecream from parent which is fine

function one() {
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //webiste is not accessible here its scope ended inside 
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "hitesh"
    if (username ==="hitesh") {
        const website = "youtube"
        //console.log(username+website);
    } 
    // console.log(website); //error
}

// console.log(username); //error

// ++++++++++++++++++ interesting

addone(5)
function addone(num) {
    return num + 1
}


//called expression //functions
// addTwo(5) //addTwo can not be used here 
//hoisting concept
//execution concept
const addTwo = function(num){
    return num+2
}

addTwo(5)
