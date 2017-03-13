/*
 * ES6 Arrow Function Example
 *
 * You may use an arrow function in the place of anonymous functions.
 * */


let names = ['Sarah', 'Curtis', 'Ryan'];

/*
names.forEach(function(name) {
  console.log('forEach', name);
});

names.forEach((name) => { // multiple statements
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name)); // just one statement


const returnMe = (name) => name + '!'; // 'name' automatically gets returned
console.log(returnMe('Chris'));
 */

/*
* Major difference between anonymous functions and arrow functions:
*
* Anonymous functions have a 'this' binding.
* Arrow functions take on their parent's  'this' binding.
*
* See the two objects below for an example of each:
* */

const person = { // 'this' refers to the person object
  name: 'Chris',
  greet: function () {
    const that = this; // in order to use 'person.name' in the anonymous function we do this assignment
    names.forEach(function (name) {
      // inside this anonymous function, 'this' no longer references to the 'person' object
      console.log(that.name + ' says hi to ' + name);
    });
  }
}

//person.greet();

// the above example using an arrow function (which uses its parent 'this' binding)
const person2 = {
  name: 'Chris',
  greet: function() {
    names.forEach((name) => { // arrow function
      console.log(this.name + ' says hi to ' + name);
    });
  }
}

//person2.greet();

function add(a, b) {
  return a + b;
}

// addStatement
const addStatement = (a, b) => {
  return a + b;
}

// addExpression
const addExpression = (a, b) => console.log(a + b);

addExpression(1, 3);
//console.log(add(1, 4));
//console.log(add(9, 0));