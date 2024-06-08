// const coding = ["js","ruby","java","python","cpp"]

// what does for each return do it return anything?
//for each desnot return anything

// const values = coding.forEach((item)=>{
// console.log(item);
// return item;
// })

// console.log(values)


const myNums = [1,2,3,4,5,6,7,8,9,10]
// for filter we use condition
// const newNums =  myNums.filter((num)=>num >4)

//imppp::::::::: because we start a scope we have tp use the return keyword
// const newNums =  myNums.filter((num)=>{
//      return num>4
// })

//using for each
// const newNums = []
// myNums.forEach( (num)=>{
//     if(num >4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books =[
    {title: 'Book One' , genre:'fiction' , publish:1981,edition:2001},
    {title: 'Book two' , genre:'non -fiction' , publish:1982,edition:2002},
    {title: 'Book three' , genre:'history' , publish:1983,edition:2003},
    {title: 'Book four' , genre:'geography' , publish:1984,edition:2004},
    {title: 'Book five' , genre:'history' , publish:1985,edition:2005},
]
// real world project //database
let userBooks = books.filter((bk)=>bk.genre ==="history") 

 userBooks = books.filter((bk)=>{
    return bk.publish >= 1982 && bk.genre ==="history"
})

console.log(userBooks);