/**
 * Callback is just a function that is passed to
 * another function to be excecuted when the called
 * function is complete
 *
 */

//  A very simple example we have seen already in setTimeout

// Lets look at two functions that need to run in a certain sequence.

function authenticateAndGet(userId, junk) {
  //assume this takes a while
  setTimeout(() => {
    console.log("Authenticating");
    const authenticated = userId === 1;
    if (authenticated) junk();
    else throw Error("User is not authenticated");
  }, 2000);
}

function getNumberData() {
  const data = [1, 2, 3];
  console.log(data);
}

function getAlphaData() {
  const data = ["A", "B", "C"];
  console.log(data);
}

// // Application
// const isAuthenicated = authenticate(1);

authenticateAndGet(1, getNumberData);
authenticateAndGet(1, getAlphaData);
