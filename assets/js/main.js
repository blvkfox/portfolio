const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".link");

hamburger.addEventListener("click", () => {
  document.querySelector(".navbar-nav").classList.toggle("open-nav");
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    const menuClasses = [...document.querySelector(".navbar-nav").classList];
    if (menuClasses.includes("open-nav")) {
      document.querySelector(".navbar-nav").classList.remove("open-nav");
    }
  });
}
