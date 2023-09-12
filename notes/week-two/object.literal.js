/**
 * Object Literal Notation - basically anything inside {}
 * 
 * Object literal notation is a way to create objects using a 
 * simple and straightforward syntax that resembles a list of key-value pairs. 
 * 
 * Imagine you have a bunch of information you want to store about something, 
 * like a person or a car. Object literal notation lets you organize this
 * information neatly.
 * 
 * 1. create an object
 * 2. add properties
 * 3. add method with function
 * 4. add method with this
 * 6. access properties with []
 * 
 */

this.message = "Hello"

const person = {
    firstName: "Bruce",
    lastName: "Christie",
    sayFullname: function() {
        return this.firstName + this.lastName
    },
}


console.log(person.sayFullname());
console.log(Object.keys(person))

console.log(person.firstName)
console.log(person['firstName'])


const handlers = {
    onclick: ()=>{

    },
    onBlur: ()=>{

    }
}

handlers['onBlur']()



    

