const name ='hitesh'
const repoCount = 50

// console.log(name + repoCount + '123');

//string interpolation . back ticks benefits string interpolation.  placeholder for variables can be injected
// console.log(`hello my name is ${name} and my repo count is ${repoCount}` );

// object is invoked (behind the scene)
const gameName= new String('hitesh-hc-com')

// console.log(gameName.__proto__); //to look at the object

// console.log(gameName.toUpperCase()); // it hasnot changed the original string (refer stack vs heap video)

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newString1 = "     hitesh     " //for forms space or emails
console.log(newString1);
console.log(newString1.trim());

const url = "https://hitesh.com/hitesh%20chaurdhary" //url encoding

console.log(url.replace('%20','-')); 
  
console.log(url.includes('sundar')); //false

console.log(gameName.split('_'));
