// Copy the solution from chained.promise and try using await

function getRecipe() {
  return new Promise((resolve, reject) => {
    console.log("I promise to get you cake!");

    setTimeout(() => {
      resolve("Chocolate cake");
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

async function bake() {
  const recipe = await getRecipe();
  console.log(recipe);
  const food = await prepareRecipe(recipe);
  console.log(food);
}

bake();
