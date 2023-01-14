let element = document.getElementById("navHeader").offsetHeight;
console.log(element);
const navbar = document.getElementById("navBar");
const li = document.getElementById("navButton");
window.onscroll = () => {
  if (window.scrollY > element) {
    navbar.classList.add("navBarGreen");
    li.classList.add("navButtonGreen");
  } else {
    navbar.classList.remove("navBarGreen");
    li.classList.remove("navButtonGreen");
  }
};
