function mcd(num, denom) {
    while (denom !== 0) {
        let temp = denom;
        denom = num % denom;
        num = temp;
    }
    return num;
}
// Función para sumar dos racionales
function addRational(a, b, c, d) {
    let numResult = a * d + c * b;
    let denomResult = b * d;
    let commonDivisor = mcd(numResult, denomResult);
    numResult /= commonDivisor;
    denomResult /= commonDivisor;
    return `${numResult}/${denomResult}`;
}
// Función para restar dos racionales
function subRational(a, b, c, d) {
    let numResult = a * d - c * b;
    let denomResult = b * d;
    let commonDivisor = mcd(numResult, denomResult);
    numResult /= commonDivisor;
    denomResult /= commonDivisor;
    return `${numResult}/${denomResult}`;
}
// Función para multiplicar dos racionales
function multRational(a, b, c, d) {
    let numResult = a * c;
    let denomResult = b * d;
    let commonDivisor = mcd(numResult, denomResult);
    numResult /= commonDivisor;
    denomResult /= commonDivisor;
    return `${numResult}/${denomResult}`;
}
// Función para dividir dos racionales
function divRational(a, b, c, d) {
    let numResult = a * d;
    let denomResult = b * c;
    let commonDivisor = mcd(numResult, denomResult);
    numResult /= commonDivisor;
    denomResult /= commonDivisor;
    return `${numResult}/${denomResult}`;
}
// Ejemplos de invocación:
console.log(addRational(1, 4, 1, 2)); // "3/4"
console.log(subRational(5, 6, 1, 3)); // "7/6"
console.log(multRational(2, 3, 4, 5)); // "8/15"
console.log(divRational(3, 4, 2, 5)); // "15/8"
