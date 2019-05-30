/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: When in the global scope, the value of "this" will be the window/console Object.
* 2. Implicit Binding: Whenever a function is called by a preceding dot, the object before that dot is "this".
* 3. New Binding: When ever a constructor function is used.
    This refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding: Whenver JavaScript's call or apply method is used, "this" is explicitly defined.  WE can override what the constructor objects get set to.
    Calling the object explicityly with a new context using .call and .apply.
*
* write out a code example of each explanation above
*/

// Principle 1

function sayName(name) {
    console.log(this)
    return name;
}
sayName("Alduin")

// Principle 2

const myObj = {
    greeting: 'Hello',
    sayHello: function (name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayHello('Alduin');

// Principle 3

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const monk = new CordialPerson('Alduin');
const alduin = new CordialPerson('Monk');

alduin.speak();
monk.speak();

// Principle 4

const person = {
    name: 'Alduin'
}

const skills = ['set fires', 'eat sheep', 'kill knights'];

function introduce(skills) {
    'use strict';
    console.log(`Hello! My name is ${this.name}, and I like to ${skills}`)
}

introduce.call(person, skills);