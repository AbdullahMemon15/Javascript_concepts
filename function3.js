//scope local vs global scopes


// {} // scope with function or if else //with objects the case is different 

var c =300
//global scope available everywhere
if(true){
    //memory is allocated inside the scope
    //block scope //values unavailable outside
    let a  = 10
    const b = 20
    var c = 30
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

//scope in windows and node
// scope in console in browser is different and different in vscode

// avoid var
// console.log(a); //unavilable
// console.log(b); //unavailable
console.log(c); //biggest problem //scope of var //code is imported from other file using same variable causes the problem


//var vs let
