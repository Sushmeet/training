const createUser = document.querySelector(".CreateUser");

createUser.addEventListener("submit", e => {
  e.preventDefault();
  const name = createUser.querySelector('.Name').value;
  const email = createUser.querySelector('.Email').value;
  post('/createUser', { name, email });
});

console.log("CreateUser", createUser);

function post(path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}
