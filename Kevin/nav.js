const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarClose = document.querySelector(".sidebarClose"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  dropdown = document.querySelector(".dropdown");

searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;
  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});
