var usernameData = false;
function inputValid(e) {
  if (e.target.value.length < 3) {
    console.log(e.target.nextElementSibling);
    e.target.nextElementSibling.innerText = "atleast 3 character required";
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
    password.nextElementSibling.innerText = "Roll Number doesn't exist";
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

  username.value = "";
  password.value = "";
  usernameData = false;
}
var usersData = [
  {
    username: "umercrusher55",
    password: "55667799",
  },
  {
    username: "razausman",
    password: "52kk341",
  },
];

var slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("cd-img-code");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}
showSlides();

