function login(array) {
  let username = array[0];
  let password = reverseString(username);
  let cout = 0;

  for (let index = 1; index < array.length; index++) {
    if (array[index] !== password) {
      cout++;
      if (cout > 3) {
        return console.log(`User ${username} blocked!`);
      } else {
        console.log("Incorrect password. Try again.");
      }
    } else {
      console.log(`User ${username} logged in.`);
      return;
    }
  }
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  return console.log(`User ${username} blocked!`);
}
login(["Acer", "login", "go", "let me in", "recA"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
