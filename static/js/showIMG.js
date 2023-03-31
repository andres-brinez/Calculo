// Función para obtener la imagen correspondiente a la forma seleccionada
function obtenerImagenForma(forma) {
    switch (forma) {
      case "square":
        return "https://images.nagwa.com/figures/785126072965/1.svg";
      case "rectangle":
        return "https://www.definicionabc.com/wp-content/uploads/Rect%C3%A1ngulo-450x251.png";
      case "circle":
        return "https://i.pinimg.com/564x/4b/ed/24/4bed2448322085306bebefa11835489b.jpg";
      case "triangle":
        return "https://www2.ual.es/jardinmatema/wp-content/uploads/2022/01/triangulo_sinfondo.png";
      case "sphere":
        return "https://www.neurochispas.com/wp-content/uploads/2021/04/diagrama-de-area-superficial-de-esfera-con-radio.png";
      case "cylinder":
        return "https://www.caracteristicass.de/wp-content/uploads/2018/06/caracteristicas-del-cilindro-300x300.jpg";
    }
  }
  
  // Función para mostrar la imagen correspondiente a la forma seleccionada
  export function mostrarImagenForma(forma) {
    const imagen = obtenerImagenForma(forma);
    shapeImage.src = imagen;
    shapeImage.style.display = "block";
  }