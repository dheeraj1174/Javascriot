const name = "hitesh"
const repocount = 50

// console.log(name+repocount+"value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);


const newGame = new String('hitesh h com');

console.log(newGame[0]);
console.log(newGame.__proto__);

console.log(newGame.length);
console.log(newGame.toUpperCase());
console.log(newGame.charAt(2));
console.log(newGame.indexOf('t'));

//new method
const newString = newGame.substring(0,4);
//substring  m negative value nhi chlega mgar slice m chlege
//substring 0 to n-1 tk chlege
console.log(newString);

const anotherstring = newGame.slice(-5,4);
const anotherstring1 = newGame.slice(-8,4);

console.log(anotherstring);
console.log(anotherstring1);
//trim work on whitespace
const newStringOne = "    hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());


//koi link m changes krne ho toh replace k use krna hn
const url = "http://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

//include method use to check element is present in the link or not
console.log(url.includes('sundar'));
console.log(url.includes('hitesh'));


console.log(newGame.split('-'));
console.log(newGame.split(' '));
console.log(newGame.split());








