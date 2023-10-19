// DRY - DO NOT REPEAT YOURSELF
const API_URL = "http://localhost:3000/api/users";

async function loadUsers() {
  console.log("Loading data");
  const userList = document.getElementById("user-list");
  const userCount = document.getElementById("user-count");

  const response = await fetch(API_URL);
  const usersData = await response.json();
  const users = usersData.data;

  const listItems = users.map((user) => {
    return `<li onclick="loadUser(${user.id})">${user.firstName} ${user.lastName}</li>`;
  });

  userList.innerHTML = listItems.join("");
  userCount.innerHTML = usersData.count;
}

async function loadUser(id) {
  console.log("id" + id);
  const userDetail = document.getElementById("user-detail");

  const response = await fetch(API_URL + "/" + id);
  const user = await response.json();

  const userHhtml = `${JSON.stringify(user, null, 2)}`;

  userDetail.innerHTML = `<h3>${userHhtml}</h3><button onclick="deleteUser(${user.id})">DELETE</button>`;
  console.log(user);
}

async function deleteUser(id) {
  const response = await fetch(API_URL + "/" + id, { method: "DELETE" });
  loadUsers();
}
