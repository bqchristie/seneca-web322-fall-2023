// Copy solution from simple.pronmise to start.
// Add a new Method called prepareRecipe than takes a recipe and returns
// a promise once that promise is resolved print the result to teh screen.
function getRecipe() {
  return new Promise((resolve, reject) => {
    console.log("I promise to get you cake!");

    setTimeout(() => {
      resolve("Chocolate cake");
      reject("I have no cake");
    }, 2000);
  });
}

function prepareRecipe(recipe) {
  return new Promise((resolve, reject) => {
    console.log("I promise to prepare teh recipe");

    setTimeout(() => {
      resolve(`Here is you ${recipe}`);
    }, 2000);
  });
}

getRecipe().then((recipe) => {
  prepareRecipe(recipe).then((food) => {
    console.log(food);
  });
});
