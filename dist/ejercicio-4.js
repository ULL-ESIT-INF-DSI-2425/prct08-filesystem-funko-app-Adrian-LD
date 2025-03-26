"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPoints = getPoints;
function getPoints(phase, objects) {
    // Validación de entrada
    if (phase < 0 || objects.some(obj => obj < 0)) {
        return undefined;
    }
    if (objects.length === 0) {
        return undefined;
    }
    let totalPoints = 0;
    const multiplesSet = new Set(); // Usamos un Set para evitar duplicados
    // Recorremos cada objeto
    for (const obj of objects) {
        // Generamos los múltiplos de cada número
        for (let i = obj; i < phase; i += obj) {
            multiplesSet.add(i); // Añadimos al Set, asegurando que no se repitan
        }
    }
    // Sumamos todos los múltiplos encontrados en el Set
    multiplesSet.forEach(multiple => {
        totalPoints += multiple;
    });
    return totalPoints;
}
