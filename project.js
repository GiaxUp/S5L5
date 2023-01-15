let lettera = document.querySelectorAll("svg g[stroke-linecap='butt']");
console.log(lettera);
let intervallo = setInterval(() => {
  let randomNumber = Math.floor(Math.random() * lettera.length);
  let ranLett = lettera[randomNumber];
  ranLett.getElementsByClassName.transition = "1.2s";
  if (ranLett.getAttribute("opacity") == 1) {
    ranLett.setAttribute("opacity", "0");
  } else {
    ranLett.setAttribute("opacity", "1");
  }
}, 40);

const fermati = () => {
  clearInterval(intervallo);
};

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
