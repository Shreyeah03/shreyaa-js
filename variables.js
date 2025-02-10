const accountId = 144555
let accounemail = "shreyak@gmail.com"
var accountPassword = "12345"
acountCity = "Jamnagar"
let accountState ;
// accountId = 2 // not allowed 
accounemail = "h@hc.com"
accountPassword = "212121"
acountCity = "Anand"
console.log(accountId);

/* 
prefer not to use var because of issue in 
block scope and functional scope
*/

console.table([accountId, accounemail,accountPassword,acountCity,accountState])