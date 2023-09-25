// Copy the solution from nested.promise and do the promisses in a chain.
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

getRecipe()
  .then(prepareRecipe)
  .then((food) => {
    console.log(food);
  })
  .catch((err) => {
    console.log(err);
  });
