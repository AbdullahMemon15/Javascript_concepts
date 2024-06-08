//for
//control d shortcut multi cursor
//array.length property

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     // if(element ==5){
//     //     console.log(`5 is best number`);
//     // }
//     console.log(element);
    
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value ${i}`);
//     for (let j = 1; j <=10; j++) {
//         // console.log(`outer loop value ${i} and inner loop is ${j}`);
//         // console.log(`${i} * ${j} = ${i*j}`);
//     }
    
// }

// let myArray = ["falsh","batman","spuerman"]
// // no out of bounds in jss we get undefined 

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//break and contiue keywords

// for (let index = 1; index <= 20; index++) {
//    if (index ==5) {
//     console.log("detected 5");
//     break;
//    }
//     console.log(`value of i is ${index}`);

// }

for (let index = 1; index <= 20; index++) {
   if (index ==5) {
    console.log("detected 5");
    continue; //aik bar maaf kardo /1 mistake or iteration is ignored // we wont go out of loop
   }
    console.log(`value of i is ${index}`);

}


