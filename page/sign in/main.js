let signupForm = document.getElementById("signupForm");
let message = document.getElementById("message");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let terms = document.getElementById("terms").checked;

  message.classList.remove("error");

  if (username === "" || password === "" || confirmPassword === "") {
    message.innerText = "Malumutlarni ohirigacha toldiring";
    message.classList.add("error");
    return;
  }

  if (password !== confirmPassword) {
    message.innerText = "Parollar birbiriga togri kelmayapti";
    message.classList.add("error");
    return;
  }

  if (!terms) {
    message.innerText =
      "16 yoshdan kichik bolsangiz sitega sognupqilish mumkin emas    ";
    message.classList.add("error");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let userExists = users.find((user) => user.username === username);

  if (userExists) {
    message.innerText = "Username already exists";
    message.classList.add("error");
    return;
  }

  let newUser = {
    username: username,
    password: password,
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  message.innerText = "akkaunt muvaffaqiyatli yaratildi";

  signupForm.reset();

  console.log(users);
});
