usersData = false;
function userValid(error) {
  if (error.target.value.length < 7) {
    error.target.nextElementSibling.innerText = "atleast 5 char required";
    error.target.nextElementSibling.style.display = "block"
    return;
  }

  error.target.nextElementSibling.style.display = "none";
  usersData = true;
}

function userpwValid(error){
    if(error.target.value.length < 5){
        error.target.nextElementSibling.innerText = "Atleast 8 char required";
        error.target.nextElementSibling.style.display = "block";
        return;
    }

    if (error.target.value.length <= 0)
    {
        error.target.nextElementSibling.style.display = "block";
        error.target.nextElementSibling.innerText = "Please Input this field";
        return
    }
    error.target.nextElementSibling.style.display = "none";
    usersData = true;
}

function submitData(e) {
  e.preventDefault();
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var error = document.getElementsByClassName("error");
   
  if (!usersData) return;

  // usersData.push({
  //   username: username.value,
  //   password: password.value,
  // })
  var i = 0;
  while (i < usersData.length) {
    if (usersData[i].username === username.value) {
      alert("username already exist!");
      return;
    }
    i++;
  }

  usersData = [
    ...usersData,
    {
      // 2nd method with spread operator
      username: username.value,
      password: password.value,
    },
  ];

  console.log(usersData);

  username.value = ""; // to empty input
  password.value = "";
}

var usersData = [
  {
    username: "abc1",
    password: "1234567890",
  },
  {
    username: "abc2",
    password: "1234567890354",
  },
];