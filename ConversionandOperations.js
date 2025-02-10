let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); 

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0 and vice versa

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// ***********************Operations*********************

let value =3
let negValue = -value
console.log(negValue);
let str1 = "hello"
let str2 = "shreya"
let str3 = str1+str2
console.log(str3)
console.log(1+"2")
console.log("1"+2+2);//if string first then convesrion in string form
console.log(1+2+"2");// else integer, thins kind of practice is unhealthy
console.log(+true);//true is boolean in itself


let num1,num2,num3

num1=num2=num3=2+2//not a good pratice, no consistency in code

let gameCounter =100
++gameCounter//refer from ecma 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
console.log(gameCounter)