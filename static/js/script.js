import { calcularAreaCirculo, calcularAreaCuadrado, calcularAreaRectangulo, calcularAreaTriangulo, calcularVolumenCilindro, calcularVolumenEsfera } from './CalcularInformacion.js';
import { mostrarImagenForma } from './showIMG.js';



// Evento click del botón Calcular
calculateBtn.addEventListener("click", () => {
  calcular();
});

// Evento cambio de la forma seleccionada
document.getElementById("shape").addEventListener("change", () => {

  // Ocultar la imagen de la forma anterior
  shapeImage.style.display = "none";

  // Limpiar campos
  result.innerHTML = "";
  widthInput.value = '';
  heightInput.value = '';
  radiusInput.value = '';

  const figure = document.getElementById("shape").value

  // dependiendo de la figura seleccionada se muestra o no alguna información como inputs
  mostrarInformacion(figure)

});


// Función para calcular el área o el volumen según la forma seleccionada
function calcular() {
  const formaSeleccionada = document.getElementById("shape").value;
  let resultado = 0;

  switch (formaSeleccionada) {

    case "square":
      resultado = ` El área del cuadrado es: ${calcularAreaCuadrado(parseFloat(widthInput.value))}`;
      break;
    case "rectangle":
      resultado = `El área del Rectángulo es: ${calcularAreaRectangulo(parseFloat(widthInput.value), parseFloat(heightInput.value))}`;
      break;
    case "circle":
      resultado = `El área del circulo es: ${calcularAreaCirculo(parseFloat(radiusInput.value))}`;
      break;
    case "triangle":
      resultado = `El área  del triángulo es:  ${calcularAreaTriangulo(parseFloat(widthInput.value), parseFloat(heightInput.value))}`;
      break;
    case "sphere":
      resultado = `El volumen de la esfera es: ${calcularVolumenEsfera(parseFloat(radiusInput.value))}` 
      break;
    case "cylinder":
      resultado =`El volumen del cilindro es: ${calcularVolumenCilindro(parseFloat(radiusInput.value), parseFloat(heightInput.value))}` ;
      break;
  }

  // Mostrar la imagen correspondiente a la forma seleccionada
  mostrarImagenForma(formaSeleccionada);

  const figure = document.getElementById("shape").value

  // dependiendo de la figura seleccionada se muestra o no alguna información como inputs
  mostrarInformacion(figure)

  // Mostrar el resultado
  result.innerHTML = resultado;
}


function mostrarInformacion(figure){
  // Mostrar u ocultar información dependiendo la forma seleccionada

  if (figure === "sphere" || figure === "cylinder" || figure === "circle") {

    // si es alguna de estas figuras se habilita la opción para ingregar el radio 
    radiusContainer.style.display = "flex";

    if (figure === "circle" || figure === "sphere")  {
      radiusContainer.style.display = "flex";

    // se deshabilita el input para no ingresar estos campos
      widthInput.disabled = true;
      heightInput.disabled = true;


    }
  }

  else {
    radiusContainer.style.display = "none";
    widthInput.disabled = false;
    heightInput.disabled = false;
  }

}