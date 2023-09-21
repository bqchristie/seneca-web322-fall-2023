/**
 * Remember a Promise simply tells the caller
 *  "I can't answer this now but when I find out I will tell you."
 *  "In the event that i have issues I will let you know"
 *
 *  The caller can keep working on other things until the promise is resolved.
 *
 *  There are three states to a Promise.
 *
 *  1. PENDING - The request is started and the caller is waiting
 *
 *   once the promise is done it's work....
 *
 *  2. RESOLVED - pass the requested data back to call via Resolve
 *
 *   unless something bad happened
 *
 *  3. REJECTED - pass an error back to the the caller via Reject
 *
 *
 *
 *
 *  TASK:
 *  =================
 *   -Write a Promise that will return a message.
 *   -Half the time this method is called it will fail.
 *
 */

function getRecipe() {
  // Return a promise.  Remember when you create a new promise it takes a callback
  // function.  That function will receive two functions as parameters: resolve, reject.
  // write the callbaclk function so that it executes after a 2 second delay.
  // HINTS:
  // - const foundRecipe = Math.random() < 0.5; // 50% chance of finding a recipe
  // - you can make the method async by adding setTimout
}
