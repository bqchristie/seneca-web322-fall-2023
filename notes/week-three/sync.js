/**
    What is synchronous vs asynchronous code code?

     In coding, synchronous code executes one task at a time in a 
     sequential order, while asynchronous code allows multiple
     tasks to run concurrently, and you can continue with other 
     tasks without waiting for each one to finish.

     Async code is particularly useful in situations where you
     don't want to block your program while waiting for somethin
     to complete, like when making network requests, reading files, 
     or handling user input in a responsive way. It allows your 
     program to remain more efficient and responsive.

     

*/

const A_LONG_TIME = 9000000000;

// Sync example

function longRunningTask() {}
console.log("start");
longRunningTask();
console.log("end");
