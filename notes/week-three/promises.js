/**
 * What is a Promise in Javascript
 * ========
 * In JavaScript, a promise is a built-in object that represents the eventual completion or failure of 
 * an asynchronous operation. It is a way to handle asynchronous code more elegantly and manage callbacks. Promises have three states: 

1. **Pending:** Initial state, neither fulfilled nor rejected.
2. **Fulfilled:** The operation completed successfully.
3. **Rejected:** The operation encountered an error or failed.

You can use promises to perform tasks asynchronously and then specify what to do when the task is completed or if an error occurs, making your code more organized and easier to read.

 *  
 */
const SERVER_DATA = [
  { id: 1, name: "Bruce" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Rey" },
];

// Function that returns a Promise to simulate fetching data from a server
function getServerData() {
  return new Promise((resolve, reject) => {
    //   call api
    setTimeout(() => {
      resolve(SERVER_DATA);
      // reject("There was a big problem here");
    }, 2000);
  });
}

function getUserNames(users) {
  return new Promise((resolve, reject) => {
    const result = users.map((user) => user.name);
    // call api
    setTimeout(() => {
      resolve(result);
      // reject("There was a big problem here");
    }, 2000);
  });
}

getServerData().then((result) => {
  console.log(result);
  getUserNames(result).then((names) => {
    console.log(names);
  });
});
