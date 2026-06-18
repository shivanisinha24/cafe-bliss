function validateLogin() {
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPass").value;
  if (email === "" || pass === "") {
    alert("Please fill all fields!");
    return false;
  }
  alert("Login successful!");
  return true;
}

function validateRegister() {
  let name = document.getElementById("regName").value;
  let email = document.getElementById("regEmail").value;
  let pass = document.getElementById("regPass").value;
  if (name === "" || email === "" || pass === "") {
    alert("Please fill all fields!");
    return false;
  }
  alert("Registration successful!");
  return true;
}
