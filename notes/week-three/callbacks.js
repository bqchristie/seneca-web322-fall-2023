/**
 * Callback is just a function that is passed to
 * another function to be excecuted when the called
 * function is complete
 *
 */

//  A very simple example we have seen already in setTimeout

// Lets look at two functions that need to run in a certain sequence.

function authenticate(userId, callback) {
  //assume this takes a while
  setTimeout(() => {
    callback(userId === 1);
  }, 2000);
}

function getNumberData(isAuthenicated) {
  if (!isAuthenicated) throw Error("You are not authorized");
  console.log([1, 2, 3, 4, 5]);
}

function getAlphaData(isAuthenicated) {
  if (!isAuthenicated) throw Error("You are not authorized");
  console.log(["A", "B", "C", "D"]);
}

// Application
authenticate(1, getNumberData);
authenticate(1, getAlphaData);
