// Follow along with the examples here

/*
function sayHello() {
    console.log("Hello!");
}

sayHello();
*/
/*)
function sayHelloToGuadalupe() {
    console.log("Hello, Guandalupe!")
}

sayHelloToGuadalupe();

function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }

  sayHelloToLiz();

function sayHelloToSamip(){
    console.log("Hello, Samip!");
}

sayHelloToSamip();
*/
/*
function doSomething(thing) {
    console.log(thing);
}

doSomething("thing"); 
*/
/*
function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Guadalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2")
sayHelloTo(1);

// console.log(firstName)

*/
/*
function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}

say("Goodbye", "Julio")
say("Julio", "hello");


function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
*/


/*
function add(x, y) {
    return x + y;
}

console.log(add(80, 9000));
*/
/*
function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
}
console.log(say("Hello", "Liz"));

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
console.log(say("Hello", "Liz"));    // Need return keyword within the function to allow it to be saved 
 */

/*
function add(x, y) {
    x + y;
}
console.log(add(1, 2)); // will not work because no return keyword (see function 2 above)
*/


/*
const sum = add(num1, num2);
const message = `The sum of your numbers is: ${sum}.`;

const message = `The sum of your numbers is: ${add(num1, num2)}.`;
*/
/*

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Howdy", "partner"));

  */


  
  const numOne = 10;
  const numTwo = 2;
  function divide(numOne, numTwo) {
    return numOne / numTwo;
  }

  function add(numOne, numTwo) {
    return numOne / numTwo;
  }
  

  const numberDivide = divide(numOne, numTwo);
  const message = `The numbers divided is: ${divide(numOne, numTwo)}`;

  console.log(numberDivide);
  console.log(message);

console.log((add(numOne, numberDivide)));

console.log((add(numberDivide, numberDivide)));
