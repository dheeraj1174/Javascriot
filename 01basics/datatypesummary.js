//primitve (call by value hote hn)


//7 types : String,Number,Boolean,null,undefined,Symbol,Bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let useremail;//undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id===anotherId);

const bignumber = 234324989238402n;




//Reference(Non primitve)
//Array,objects,functions
//javascript is a dynamically type language


const heros = ["shaktiman","naagraj","doga"];

let myobj ={
    name:"hitesh",
    age:22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof heros);
console.log(typeof score);
console.log(typeof myFunction);
console.log(typeof myobj);
