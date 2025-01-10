function DeleteActive(button) {
  // Quita la clase active de todos los botones
  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Agregar la clase active al botón seleccionado
  button.classList.add("active");
}

// Seleccionar todos los elementos del carrusel
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

// Función para mostrar el siguiente elemento
function showNext() {
  carouselItems[currentIndex].classList.remove("active"); // Eliminar la clase activa del item actual
  currentIndex = (currentIndex + 1) % carouselItems.length; // Incrementar el índice y asegurarse de que vuelva al inicio
  carouselItems[currentIndex].classList.add("active"); // Mostrar el siguiente item
}

// Función para mostrar el elemento anterior
function showPrev() {
  carouselItems[currentIndex].classList.remove("active");
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length; // Decrementar el índice y asegurarse de que vaya hacia atrás
  carouselItems[currentIndex].classList.add("active");
}

// Inicializar el carrusel mostrando el primer elemento
carouselItems[currentIndex].classList.add("active");

// Agregar eventos a los botones de navegación
document.querySelector(".next-btn").addEventListener("click", showNext);
document.querySelector(".prev-btn").addEventListener("click", showPrev);
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
