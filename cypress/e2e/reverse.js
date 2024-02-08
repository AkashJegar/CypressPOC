/// <reference types = "cypress"/>

/*function reversestring(str){

   var aj="";
   for(var i=str.length-1; i>=0; i--)
   {
      new string=str[i];
   }
   return reversestring;
}
*/

const { find, isString } = require("cypress/types/lodash");



/*let count=0
let i,j 
for(j=2;j<=100;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++
  
}

if(count==2)

console.log(j)
count=0


  
}
*/


/*let a=10;
let b=20;

if(a>b){
   console.log('a is a big')
}else{
   console.log('b is big')             ----------- finding a big number in two given numbers
}
*/

//console.log('Hello')                 ------Print a any words

/*const a=10;
const b=20;

const sum=a+b;

console.log('the sum of ' + a  + ' and ' + b + ' is : ' +sum);         ------sum of two numbers
*/


/*const number=prompt('enter the number');

const result= Math.sqrt(number);
console.log('the square root of ${number} is $(result) ');     //----finding the square root(but prompt not defined)
*/



/*function reverseString(str){
   let string="";

   for(let i=str.length-1; i>=0; i--){
      
      new string=str[i]; console.log(str.length)
   }

   return new string;
}
*/

/*const a=-20;
if(a>0)
{
   console.log('positive number')
}else if(a=0)
{
   console.log('a is equal to zero')
}else{
   console.log('a is negative')
}
*/

/*const aj='AkASh';
const uc=aj.toLowerCase();
console.log(uc);
*/


/*function parametrestring(str, replacement='-'){
   return str.tolowerCase().replace(/[^a-zA-Z0-9]/g, replacement);
}

let aj='AKAsh Jegar';
let parametrestring= parametrestring(aj);
console.log(parametrestring);
*/

let inputString = "Hello World! This is a Test String.";
let res= inputString.toLowerCase();
console.log(res);

