"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScore = void 0;
const puntuaciones = {
    "A": 1, "E": 1, "I": 1, "O": 1, "U": 1,
    "L": 1, "N": 1, "R": 1, "S": 1, "T": 1,
    "D": 2, "G": 2,
    "B": 3, "C": 3, "M": 3, "P": 3,
    "F": 4, "H": 4, "V": 4, "Y": 4,
    "CH": 5, "Q": 5,
    "J": 8, "LL": 8, "Ñ": 8, "RR": 8, "X": 8,
    "Z": 10
};
const quitarAcentos = (palabra) => palabra.normalize("NFD").replace(/[̀-ͯ]/g, "");
const getScore = (palabras) => {
    return palabras.map(palabra => {
        let palabraSinAcentos = quitarAcentos(palabra.toUpperCase());
        // Si tiene 'K' o 'W', no es válida
        if (/[KW]/.test(palabraSinAcentos))
            return undefined;
        let puntuacion = 0;
        for (let i = 0; i < palabraSinAcentos.length;) {
            if (i < palabraSinAcentos.length - 1 && puntuaciones[palabraSinAcentos.substring(i, i + 2)]) {
                puntuacion += puntuaciones[palabraSinAcentos.substring(i, i + 2)];
                i += 2;
            }
            else {
                puntuacion += puntuaciones[palabraSinAcentos[i]] || 0;
                i++;
            }
        }
        return puntuacion;
    });
};
exports.getScore = getScore;
// Ejemplo de uso
console.log((0, exports.getScore)(["kilo", "almendras", "llano", "wenceslao", "ratón"])); // [undefined, 12, 11, undefined, 5]
