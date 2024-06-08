const marvel_heroes = ["thor", "ironman","spiderman"]
const dc_heroes = ["superman", "flash","batman"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// console.log(marvel_heroes[3][1]);
 
// push vs concat //push returns the same array vs concat returns a new array.
// const allHeroes = marvel_heroes.concat(dc_heroes) // concat returns a new Array
// console.log(allHeroes);

//spread operator // glass dropped// spreads glass (...dots)
const all_new_heros= [...marvel_heroes, ...dc_heroes]
console.log(all_new_heros);

//rarely used 
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotherArray.flat(Infinity) // paramter needs to be depth // avoid infinity by giving the exact depth

console.log(real_another_array); // all values spread out when there area multiple arrays inside arrays.

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh")) // converts it into array
console.log(Array.from({name:"hitesh"})) // gives us empty array // interesting case for interviews


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) //returns a new array with the set of values



