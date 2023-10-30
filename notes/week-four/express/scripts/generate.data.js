const fs = require("fs");
const { faker } = require("@faker-js/faker");

// Function to generate a fake user
function generateUser(id) {
  return {
    id,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    dob: faker.date.past(),
    company: faker.company.name(),
    phone: faker.phone.number(),
  };
  return {};
}

// Function to generate a fake user
function generateProduct(id) {
  return {
    id,
    name: faker.commerce.productName(),
    isbn: faker.commerce.isbn(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
  };
  return {};
}

// Function to generate a list of fake users
function generateUsers(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(generateUser(i));
  }
  return users;
}

function generateProducts(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(generateProduct(i));
  }
  return users;
}

// Number of fake users to generate
const numberOfUsers = 1000; // Change this as needed
const numberOfProduct = 1000; // Change this as needed

// Generate the list of fake users
const userList = generateUsers(numberOfUsers);
const productList = generateProducts(numberOfProduct);

// Write the list of users to a JSON file
let jsonFileName = "./data/fakeUsers.json";
fs.writeFileSync(jsonFileName, JSON.stringify(userList, null, 2));

jsonFileName = "./data/fakeProducts.json";
fs.writeFileSync(jsonFileName, JSON.stringify(productList, null, 2));

console.log(
  `Generated ${numberOfUsers} fake users and saved to ${jsonFileName}`
);
