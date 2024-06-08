// iffy
// immediately  invoked function expression


//we do not want polution from global scope

// function chai() {
//     console.log(`Db Connected`);
// }
// chai()

(function chai() {
    console.log(`Db Connected`);
})();

// ()() first parenthesis is the function definition, second is the execution of the function //execution call

//imp::::: interview
//iffy  .iffy is a function that is executed immediately because sometimes we have problem with the global scope  so to remove the pollution of the global scope variable we made use of iffy

// ( ()=>{
//     console.log(`Db connected two`);
// } )()
//doesnot work we need semicolon imppp

// named iffy because it has a name
(function chai(){
    console.log(`Db connected two`);
})();

( ()=>{
    console.log(`Db connected three `);
} )();

// how to add parameters and arguments in iffy
( (name)=>{
    console.log(`Db connected three ${name}`);
} )("hitesh");

//imp::::: two iffy together remember the semi colon
