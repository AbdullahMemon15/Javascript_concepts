//date jan 1 - 1970 utc in milliseconds

//tc 39 to solve the date pain point in javascript. //proposal//not yet working

//dates

let myDates =new Date() // date object and one of its instance

// console.log(myDates.toString()); // Wed May 15 2024 16:40:51 GMT-0700 (Pacific Daylight Saving Time)


// console.log(myDates.toDateString()); //Wed May 15 2024

// console.log(myDates.toISOString()); //2024-05-15T23:40:51.929Z
// console.log(myDates.toUTCString()); // Wed, 15 May 2024 23:49:30 GMT 

// console.log(myDates.toJSON()); //2024-05-15T23:40:51.929Z

// console.log(myDates.toLocaleDateString()); //   5/15/2024
// console.log(myDates.toLocaleString()); //5/15/2024, 4:42:26 p.m.

// console.log(myDates.toTimeString()); // 16:44:47 GMT-0700 (Pacific Daylight Saving Time)
// console.log(myDates.toLocaleTimeString()); // 4:45:31 p.m.

// console.log(typeof myDates); //interview question // date is an object 

// let myCreatedDate1 = new Date(2023,0,23) // month starts at 0 in js bc its array
// console.log(myCreatedDate1.toDateString());

// let myCreatedDate = new Date(2023,0,23,5,4,2) // month starts at 0 in js bc its array
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14") // month starts at 1 in yyyyddmm
let myCreatedDate = new Date("01-14-2023") // month starts at 1 in india MMDDYYYY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1652520000000 in milliseconds from jan 1 -1970
// console.log(myCreatedDate.getTime()); // we get time in milliseconds we can use for comparing

// console.log(Date.now()); // in millisecond
// console.log(Math.floor(Date.now()/1000)); // in seconds //we can also use Math.round()



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1); // for user sometimes
console.log(newDate.getDay());

// string interpolatin  ``

//important date
// contorl + shift in vs code shows all the properties thanks to intellisense
newDate.toLocaleString('default',{
weekday:'long',
// timeZone: ''
})