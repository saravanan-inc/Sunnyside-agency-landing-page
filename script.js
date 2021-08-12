const button = document.querySelector("#menu");
const mobileNav = document.querySelector("#mobileNav");

mobileNav.style.display = "none";
button.style.opacity = 1;

button.onclick = function () {
  if (mobileNav.style.display == "none") {
    mobileNav.style.display = "block";
    button.style.opacity = 0.5;
  } else {
    mobileNav.style.display = "none";
    button.style.opacity = 1;
  }
};

function navbarBug(x) {
  mobileNav.style.display = "none";
  //   if (x.matches) {
  //     mobileNav.style.display = "none";
  //   }
}

let x = window.matchMedia("(max-width: 991px)");
navbarBug(x);
x.addListener(navbarBug);
