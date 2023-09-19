# Handling Ansynchronus Code

## What is a callback?

In JavaScript, a callback is a function that is passed as an argument to another function and is intended to be executed after the completion of that function. Callbacks are commonly used in asynchronous operations to handle the result or response of those operations.

[callback sample](./callbacks.js)

### What is "callback hell"?

Callback hell, also known as "pyramid of doom," is a term used in programming to describe a situation where multiple nested callback functions are used within asynchronous code, making the code difficult to read, understand, and maintain. It commonly occurs in languages that rely heavily on callbacks for handling asynchronous operations, such as JavaScript.

[callback hell sample](./callbacks.js)

## What is a Promise?

In JavaScript, a promise is a built-in object that represents the eventual completion or failure of an asynchronous operation. It is a way to handle asynchronous code more elegantly and manage callbacks. Promises have three states:

1. **Pending:** Initial state, neither fulfilled nor rejected.
2. **Fulfilled:** The operation completed successfully.
3. **Rejected:** The operation encountered an error or failed.

You can use promises to perform tasks asynchronously and then specify what to do when the task is completed or if an error occurs, making your code more organized and easier to read.

[promise sample](./promises.js)

### What is promise chaining?

[promise chaining](./promises.chaining.js)

### callback hell!

[promise callback hell](./promises.callback.hell.js)

### Async/Await

[promises async/await](promises.async.await.js)

## A Useful tool to visualize how the V8 Enngine runs

This will not be on the test but it is really a great way to
start undertsating how javascript code is processed.

This is awesome!
[Javascript Visualizer](https://www.jsv9000.app/)
