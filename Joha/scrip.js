function DeleteActive(button) {
  // Quita la clase active de todos los botones
  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Agregar la clase active al botón seleccionado
  button.classList.add("active");
}

document.querySelectorAll(".Informacion").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".card"); // Obtenemos la tarjeta más cercana al botón
    const imgBox = card.querySelector(".imgBox"); // Seleccionamos el contenedor de la imagen

    // Si la imagen está visible
    if (imgBox.style.display !== "none") {
      imgBox.style.display = "none"; // Ocultamos la imagen

      // Verificamos si ya existe un párrafo dinámico
      let textElement = card.querySelector(".dynamicText");
      if (!textElement) {
        // Si no existe, lo creamos y lo insertamos
        textElement = document.createElement("p");
        textElement.textContent =
          "Este es el texto que aparece al ocultar la imagen.";
        textElement.className = "dynamicText"; // Le asignamos una clase para controlarlo

        // Estilos para centrar el texto
        textElement.style.display = "flex";
        textElement.style.justifyContent = "center";
        textElement.style.alignItems = "center";
        textElement.style.height = "100%";
        textElement.style.textAlign = "center";
        textElement.style.margin = "0";

        card.querySelector(".card-inner").appendChild(textElement); // Insertamos el texto en la tarjeta
      }

      this.textContent = "Ver Menos"; // Cambiamos el texto del botón
    } else {
      imgBox.style.display = "block"; // Mostramos la imagen nuevamente

      // Eliminamos el texto dinámico
      const dynamicText = card.querySelector(".dynamicText");
      if (dynamicText) {
        dynamicText.remove();
      }

      this.textContent = "Mas Info"; // Restauramos el texto del botón
    }
  });
});
