//Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


// let myCreatedDate = new Date(2024,1,21);
//5 aur 3 means basically time ko bhi define kr rha hn
// let myCreatedDate = new Date(2024,1,21,5,3);
// let myCreatedDate = new Date("2024-02-20");
let myCreatedDate = new Date("01-04-2024");
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toDateString());



/// time ///
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})

