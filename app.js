var usernameData = false;
function inputValid(e) {
  if (e.target.value.length < 3) {
    console.log(e.target.nextElementSibling);
    e.target.nextElementSibling.innerText = "atleast 3 char required";
    e.target.nextElementSibling.style.display = "block";
    return;
  }
  e.target.nextElementSibling.style.display = "none";
  usernameData = true;
}
function submitData(e) {
  e.preventDefault();
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  if (password.value.length < 11) {
    password.nextElementSibling.innerText = "wrong password";
    return;
  }
  password.nextElementSibling.style.display = "none";
  if (!usernameData) return;

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
      username: username.value,
      password: password.value,
    },
  ];
  console.log(usersData);
  username.value = "";
  password.value = "";
  usernameData = false;
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

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("cd-img-code");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000);
}
