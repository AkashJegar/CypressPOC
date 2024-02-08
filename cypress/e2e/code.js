 
 /*let x=10; 
 let y=20;

   if(x+y>20)
   {
    console.log('x+y grether than 20')
   }
   */

const { sum, capitalize, isString } = require("cypress/types/lodash");

  
   /*let x=10;
   let y=20;

   if(y>x)
   {
    console.log('y is bigger than x')
   }else
   {
    console.log('x is bigger than y')
   }
   */

   /*let x=5;
   let y=10;

   if(x+y>10)
   {
    console.log('Akash jegar')
   }
   */

   /*let x=20;
   let y=50;

   if(x>y)
   {
    console.log('x is big')
   }else if(y>x)
   {
    console.log('y is big')
   }else
   {
    console.log("both equal")
   }
   */

   /*let day=1;
   switch(day)
   {
    case 1:
      console.log('Monday');
      break;

      case 2:
        console.log('Tuesday');
        break;

        case 3:
          console.log('Wednesday');
          break;

          default:
            console.log("Holiday")
   }
   */

  /* let i=1;
 for (i=1;i<=100;i+=2)
 {
  console.log(i)
 }
 */

 /*let i=200;
 do
 {
  console.log(i)
  i++
 }while(i<=400)
 {
  console.log('end of the do while loop');
 }
 */

//  for(i=1;i<=100;i=i++)
//  {
//   if(i%2==0)
//   {
//     console.log(i)
//   }
//  }
 
 //const prompt = require("prompt-sync")();
 //let a = prompt("enter a number: ")
//console.log(a)


 /*function isPrime(number) {
  if (number <= 1) {
    return false; // 1 and all negative numbers are not prime
  }
  
  if (number <= 3) {
    return true; // 2 and 3 are prime
  }
  
  if (number % 2 === 0 || number % 3 === 0) {
    return false; // Divisible by 2 or 3
  }
  
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  
  return true;
}

// Example usage:
const numberToCheck = 17;
if (isPrime(numberToCheck)) {
  console.log(numberToCheck + " is a prime number.");
} else {
  console.log(numberToCheck + " is not a prime number.");
}
*/
/*const a=10;
const b=20;

const sum= a+b;

console.log('sum of' +a+ 'and'  +b+ 'result: sum');


function addNumbers(num1,num2) {
  return num1+num2;

}
var num1=10;
var num2=20;

var aj= addNumbers(num1, num2);
console.log('the sum of ', num1, 'and', num2, 'is:', sum)
*/

/*const a=10;
const b=20;

var sum=a+b;
console.log('the sum of the', +a+'and', +b+ 'result:', sum);
*/
/*const a=10;
const b=20;
const c=30;
let largest;

if(a>b && a>c){
    largest=a;
}else if(b>a && b>c){
    largest=b;
}else{
    largest=c;
}
console.log('largest no is' + largest);
*/

/*const aj="akash";

const ak= aj.toUpperCase();
console.log(ak);
*/


/*describe('Print to Console Test', () => {
    it('should print text to the console', () => {
      // Perform some actions
      cy.visit('https://www.demoblaze.com/');
      cy.get('#nava').should('contain', ' PRODUCT STORE');
  
      // Print text to the console
      cy.log('Text printed to the console:  PRODUCT STORE');
      // Continue with other test steps
      // ...
    });
  });
  */

let a=10;
let b=20;
let c=30;

console.log(`before swap a=${a}, b=${b}, c=${c}`);
[a,b,c]=[c,a,b];
console.log(`after the swap a=${a}, b=${b}, c=${c}`);
 

