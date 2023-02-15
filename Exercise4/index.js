//1. Promise
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}

const message = async () => {
  const msg = await helloWorld();
  console.log(msg);
};
message();

//2. Fetch
let ambilDataUser = () => {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((users) => console.log(users.data))
    .catch((error) => console.log(error));
};
ambilDataUser();

//3. Async Await
let ambilDataUser2 = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const json = await response.json();
    console.log(json.data);
  } catch (error) {
    console.log(error);
  }
};
// ambilDataUser2();

//4. Axios
//Hanya berhasil ketika run di terminal VSCode
const axios = require("axios");
let ambilDataUser3 = async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
// ambilDataUser3();
