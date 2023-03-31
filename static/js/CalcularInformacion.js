export function calcularAreaCuadrado(lado) {
    return lado * lado;
}

export function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

export function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}

export function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

export function calcularVolumenEsfera(radio) {
    return (4 / 3) * Math.PI * radio ** 3;
}

export function calcularVolumenCilindro(radio, altura) {
    return Math.PI * radio ** 2 * altura;
}