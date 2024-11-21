var usersData = [
  {
    fname: "Umer",
    lname: "Mehmood",
    name:  "Umer Mehmood",
    username: "WMA25050",
    password: "33578",
    batch: "Web Designer",
  },
  {
    fname: "Raza",
    lname: "Usman",
    name: "Raza Usman",
    username: "WMA25051",
    password: "55872",
    batch: "Web Developer",
  },
];

function userValid(error) {
  if (error.target.value.length < 7) {
    error.target.nextElementSibling.innerText = "atleast 5 char required";
    error.target.nextElementSibling.style.display = "block";
    return;
  }

  error.target.nextElementSibling.style.display = "none";
}

function userpwValid(error) {
  if (error.target.value.length < 5) {
    error.target.nextElementSibling.innerText = "Atleast 8 char required";
    error.target.nextElementSibling.style.display = "block";
    return;
  }

  if (error.target.value.length <= 0) {
    error.target.nextElementSibling.style.display = "block";
    error.target.nextElementSibling.innerText = "Please Input this field";
    return;
  }
  error.target.nextElementSibling.style.display = "none";
}

function submitData(e) {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var error = document.getElementsByClassName("error");

  for (var i = 0; i < usersData.length; i++) {
    if (
      username === usersData[i].username &&
      password === usersData[i].password
    ) {
      document.getElementById(
        "h1"
      ).innerText = `Welcome back ${usersData[i].fname}`;
      document.getElementById("name").innerText = usersData[i].name;
      document.getElementById("rolln").innerText = usersData[i].password;
      document.getElementById("batch").innerText = usersData[i].batch;

      document.getElementsByClassName("student-modal")[0].style.display =
        "flex";

      document.getElementsByClassName("form-body")[0].style.display = "none";
      return;
    } else {
      document.getElementById("h1").innerText = "Student Doesn't Exist";
      document.getElementsByClassName("student-modal")[0].style.display =
        "flex";
      document.getElementsByClassName("data")[0].style.display = "none";
      document.getElementById("ah").style.display = "none";
    }
  }
}

console.log(usersData);
