"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeTriangle = getTypeTriangle;
/**
 * Adds two __numbers__
 * @param x - Consists of the first operand of the addition
 * @param y - Consists of the second operand of the addition
 * @param z - a
 * @returns The addition of the two numbers `firstNumber` and `secondNumber`
 * ```typescript
 * add(1, 7) = 8
 * ```
 */
function getTypeTriangle(x, y, z) {
    if (x < 0 || y < 0 || z < 0) {
        return undefined;
    }
    if (x + y < z || y + z < x || x + z < y) {
        return undefined;
    }
    if (x === y && y === z) {
        return "Equilátero";
    }
    else if ((x === y && y != z) || (y === z && x != z)) {
        return "Isósceles";
    }
    else {
        return "Escaleno";
    }
}
