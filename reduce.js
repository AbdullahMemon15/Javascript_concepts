const myNums = [1,2,3,4,5,6,7,8,9,10]

//easy method
//  const newNums = myNums.map((num)=>{ return num+10})

 // myNums.forEach((num)=>{ num = num +10
 //     console.log(num);
 // })

//map has return 
//filter has true and false

 //chaining
 const newNums = 
 myNums.map((num)=> num *10) 
 //num with value 10 is passed to the chained map 
 .map((num)=> num + 1)
 .filter((num)=>num >= 40)
 
 console.log(newNums);


 //filter is true or false
 // maps ---- condition is returned implicit or explicit
 //maps interesting