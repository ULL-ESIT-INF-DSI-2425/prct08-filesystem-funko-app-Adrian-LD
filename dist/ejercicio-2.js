"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeResistor = decodeResistor;
/**
 *
 * @param colores
 * @returns
 */
function decodeResistor(colores) {
    let coloresValores = [
        ["negro", 0],
        ["marrón", 1],
        ["rojo", 2],
        ["naranja", 3],
        ["amarillo", 4],
        ["verde", 5],
        ["azul", 6],
        ["violeta", 7],
        ["gris", 8],
        ["blanco", 9]
    ];
    if (colores.length === 0) {
        return 0; // Si no hay colores, devolvemos 0
    }
    let valor = '';
    // Iterar sobre los colores y obtener sus valores
    for (let i = 0; i < colores.length; i++) {
        // Buscar el valor del color
        const colorEncontrado = coloresValores.find(([color]) => color === colores[i]);
        if (colorEncontrado && valor.length <= 1) {
            valor += colorEncontrado[1].toString(); // Añadir el valor del color al string
        }
    }
    return parseInt(valor);
}
console.log(decodeResistor(["marrón", "verde", "violeta"])); // 15
console.log(decodeResistor(["rojo", "naranja", "amarillo", "azul"])); // 23
console.log(decodeResistor(["azul", "gris"])); // 68
