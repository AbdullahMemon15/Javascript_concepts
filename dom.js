// document.getElementById("title")
// <h1 class=​"heading" id=​"title">​DOM learning on chai aur code​</h1>​
// document.getElementById("title").id
// 'title'
// document.getElementById("title").class
// undefined
// document.getElementById("title").className

// document.getElementById("title").getAttribute
// ƒ getAttribute() { [native code] }
// document.getElementById("title").getAttribute("id")
// 'title'
// document.getElementById("title").getAttribute("class")
// 'heading'


// document.getElementById("title").setAttribute("class","test") // this always overwrites // ppl make this mistake they override
// undefined

// title.style.backgroundColor = "green"
// 'green'

// title.textContent
// 'DOM learning on chai aur code'
// title.innerHTML
// 'DOM learning on chai aur code'
// title.innerText
// 'DOM learning on chai aur code'

// title.textContent vs title.innerText vs inner.HTML
//text content shows even the hidden content
// innerText shows only the visible content
// inner.HTML shows both visible and hidden content AS WELL AS THE TAGS -- mainly the tags

// document.querySelector("#title")
// document.querySelector(".heading")

// document.querySelector('input[type="password"]')



// document.querySelector('ul')
// <ul>​…​</ul>​

// const myul = document.querySelector('ul')
// undefined
// myul.querySelector('li')
// <li>​…​</li>​
// myul.querySelector('li:first-child')
// <li>​::marker​"aaa"</li>​
// myul.querySelector('li:last-child')
// <li>​::marker​"ccc"</li>​

// const turngreen =myul.querySelector('li')
// undefined
// turngreen.style.backgroundColor = "green"
// 'green'
// turngreen.style.padding = "10px"
// '10px'
// turngreen.innerText = "5454"
// '5454'

//query selector gives one value

// const tempList = document.querySelectorAll('li')
//here templist is not a pure array , its a nodelist so no map is available

// tempList.style.color = 'green'
// VM5874:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:22
// (anonymous) @ VM5874:1Understand this error
// tempList[0].style.color = 'green'


// const tempList = document.querySelectorAll('li')
// undefined
// tempList[0].style.color = 'green'
// 'green'
// tempList.forEach(function (l){
//   l.style.backgroundColor ="green" 
// })

//for nodeList use foreach bc its not an array and we can not use map


// document.getElementsByClassName('listItem')
// HTMLCollection(4) [li.listItem, li.listItem, li.listItem, li.listItem]




// const tempClassList = document.getElementsByClassName('listItem')
// undefined
// tempClassList
// HTMLCollection(4) [li.listItem, li.listItem, li.listItem, li.listItem]

// tempClassList.forEach(function(li){
//     console.log(li)
// })
// VM7276:1 Uncaught TypeError: tempClassList.forEach is not a function
//     at <anonymous>:1:15
// (anonymous) @ VM7276:1Understand this error

// we can not use foreach bc its an html collection

// const myConvertedArray =  Array.from(tempClassList)
// (4) [li.listItem, li.listItem, li.listItem, li.listItem]
//wwe can use this to convert it into an array

// myConvertedArray.forEach(function(li){
//     li.style.color='orange'
// }) 
