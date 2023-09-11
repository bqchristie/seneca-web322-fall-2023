# Week Two Notes

## Steps for setting up Git

1. Make sure you have a github account
2. Create a new repository called: web322-[firstname]-[lastname] (i.e. web322-bruce-christie)
3. From your computer terminal application go to the folder where you put code.

```
git clone https://github.com/bqchristie/web322-bruce-christie.git
cd web32-bruce-christie
git checkout -b assignment-1
git push --set-upstream origin assignment-1
```


After this you will hava repo with a branch named assignment-1 (verify from github).    We will do all of the assignment one work in here.  At the end of the week we will merge bakc to the main branch.


## Object Oriented Javascript

### Object Litreal Notation

In JavaScript, object literal notation is a way to create objects using a curly brace `{}` syntax, like this:

```javascript
var person = {
  name: "John",
  age: 30,
  isStudent: false
};
```

In this example:

- `{}` represents an empty object.
- Inside the braces, you have key-value pairs separated by colons (`:`). These key-value pairs define the properties and their values for the object.
- `name`, `age`, and `isStudent` are the keys (also known as properties or attributes).
- "John," 30, and `false` are the corresponding values.


### Classes

Object literal notation gives us a simple way to create individual objects with their own unique structure.  Classes provide a blueprint for creating multiple objects with a shared structure and behavior. Classes are typically more suitable for larger, more complex applications where you want to reuse and organize your code effectively.



Blueprint: Classes are like blueprints for creating objects. They define a template with properties and methods, and you can create multiple objects based on this template.

Constructor Function: Classes have a constructor function that gets called when you create a new object. This allows you to set initial values for properties.

Reusability: You can create multiple objects of the same class, and they will all have the same structure and methods defined by the class.

Private properties and methods use # to denote their privacy.


#### Inheritance

So, inheritance in JavaScript allows you to create new objects (like our robots) that inherit properties and methods from existing objects, making it easy to reuse code and add extra functionality when needed. It's like building on top of a basic toy robot to create a more advanced one.


#### Lexical this

"Lexical `this`" is a term that refers to how the value of the `this` keyword is determined in JavaScript based on where it is used in your code.

In JavaScript, `this` is like a special word that can change its meaning depending on where it's used. Imagine you have a toy robot, and this robot can do different things depending on where it is in your room.

1. **Global Context**: When `this` is used outside of any functions or objects (in the "global context"), it refers to something like the entire room. It's not inside any specific container (function or object), so it points to the big picture.

2. **Inside a Function**: When `this` is used inside a function, it depends on how that function was called. If you call the function as part of an object, `this` can refer to that object, like a robot inside a toy box. But if you just call the function by itself, `this` may not point to anything special, like a robot without a specific place to go.

Now, "lexical" part means that `this` is determined by where it is written in your code, not where it's called when your program runs. It's like writing instructions for your robot: depending on where you write those instructions, the robot will know what it's supposed to do when the time comes.

So, "lexical `this`" simply means that the meaning of `this` is set based on where it is written in your code (the "lexicon" of your code), and it doesn't change when your program runs. It's like giving your robot specific tasks depending on where you place the instructions in your notebook.