const openMenuIcon = document.querySelector(".open");
const closeMenuIcon = document.querySelector(".close");
const menu = document.querySelector(".nav__hidden");

openMenuIcon.addEventListener("click", () => {
  menu.classList.add("appear");
  closeMenuIcon.classList.remove("hide");
  openMenuIcon.classList.add("hide");
  document.querySelector("html").classList.add("no-scroll");
});

closeMenuIcon.addEventListener("click", () => {
  menu.classList.remove("appear");
  closeMenuIcon.classList.add("hide");
  openMenuIcon.classList.remove("hide");
  document.querySelector("html").classList.remove("no-scroll");
});

menu.addEventListener("click", (e) => {
  if (!e.target.matches(".nav__link")) return;
  menu.classList.remove("appear");
  closeMenuIcon.classList.add("hide");
  openMenuIcon.classList.remove("hide");
  document.querySelector("html").classList.remove("no-scroll");
});
