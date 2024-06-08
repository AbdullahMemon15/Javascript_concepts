// code execution in javascript
//the call stack (memeory how things are executed and come back after)

// execution context

// Javascript execution context
// 1. Global execution context
// 2. Function/FUNCTIONAL execution context
//mongoose --->>> Eval Execution Context

//first thing MADE is Global EC ---> THIS VARIBALE IS PUT IN THE GEC
// BROWSERS ec is different (WINDOW OBJECT) ESPECIALLY IN REACT SERVER SIDE PROBLEM FOR EX , EC FOR BUN, DINO ,NODE IS DIFFERENT

//JS IS SINGLE THREADED
// GLOBAL  execution context
// Function/FUNCTIONAL execution context
//mongoose --->>> Eval Execution Context

// {}

//memory creation phase or just creation phase
// memory is allocated for the variables , no execution

//step1 Global Execution or Global environment allocated into (this)
//phase 2 creation phaseor memory phase.. all variables are collected and stored

// let val1 =10
// let val2 =5
// function addNum(num1,num2){
//     let total = num1 + num2
//     return total;
// }
// let result1 = addNum(val1,val2);
// let result2 = addNum(10,2)

//Val1 -> undefined
//Val2 -> undefined
//addnum -> definition
//result1 -> undefined
//result2 -> undefined
// this is called first cycle

//step 3 execution phase or call stack phase
// val1 =10
// val2 =5
//addNum which is a function ->>>> we have another new variable  environment  + execution thread, which  is created
// however many times the function is executed called(new EXECUTION CONTEXT --> MEMORY CREATION PHASE AND EXECUTION PHASE)

//addNum
//result1 = 15
//result2 = repeated procedure for result 2 as for result 1 ---> NVE + THREAD -- > mEMORY PHASE , EXECUTION PHASE

//imp:  the new execution context is also deleted after it has been executed

//MEMORY PHASE FOR REUSULT1 , WHICH IS REPEATED FOR RESULT2 
// VAL1 ->  undefined
// VAL2 ->  undefined
//TOTaL -> UNDEFINED


//EXECUTION CONTEXT
// num1->10
//num2 ->5
//total ->15

//returned value (total) is returned to the global execution context


//step 4 return phase or call stack phase
//


//FUNCTION INSIDE FUNCTION
// ONE() TWO() THREE()
//TWO CALLED INSIDE ONE() AND THREE INSIDE TWO CALLED.....  WE USE lIFO LAST IN FIRST OUT



