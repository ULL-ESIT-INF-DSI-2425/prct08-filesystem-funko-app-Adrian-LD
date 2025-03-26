"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myMap = myMap;
function myMap(array, callback) {
    let result = [];
    // Iteramos sobre el array
    for (let i = 0; i < array.length; i++) {
        // Aplicamos el callback y guardamos el resultado en el array result
        result.push(callback(array[i]));
    }
    return result;
}
// Ejemplo de uso
const result = myMap([0, 1, 2, 3, 4], (item) => item * item);
console.log(result); // [0, 1, 4, 9, 16]
