/**
 * Accessing elements from the DOM
 */
let bodyItem = document.getElementById("body");
// const btnItem = document.getElementById("btn");
// const removeBtn = document.getElementById("remove-btn");
// const buttons = document.getElementsByTagName("button");

// Select password input and icons
const passCode = document.getElementById("passcode");
const faEye = document.getElementById("fa-eye");
const faEyeSlash = document.getElementById("fa-eye-slash");
// input password field

const togglePasswordIcon = () => {
  if (passCode.type === "password") {
    passCode.type = "text";
    faEyeSlash.style.display = "none";
    faEye.style.display = "block";
  } else {
    passCode.type = "password";
    faEyeSlash.style.display = "block";
    faEye.style.display = "none";
  }
};
// togglePasswordIcon()
faEye.addEventListener("click", togglePasswordIcon);
faEyeSlash.addEventListener("click", togglePasswordIcon);

//toggle navbar icon

const showAndHideNavbarItem = () => {
  // contain
  // add
  // toggle
  navLists.classList.toggle("show");
};

faBars.addEventListener("click", showAndHideNavbarItem);
