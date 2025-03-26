function fromArrayToRanges(arr) {
    if (arr.length === 0)
        return '';
    let ranges = [];
    let start = arr[0];
    let end = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === end + 1) {
            // Si el número es consecutivo, actualizar el final del rango
            end = arr[i];
        }
        else {
            // Si no es consecutivo, agregar el rango a la lista
            if (start === end) {
                ranges.push(`${start}`);
            }
            else {
                ranges.push(`${start}_${end}`);
            }
            start = arr[i];
            end = arr[i];
        }
    }
    // Agregar el último rango
    if (start === end) {
        ranges.push(`${start}`);
    }
    else {
        ranges.push(`${start}_${end}`);
    }
    return ranges.join(', ');
}
function fromRangesToArray(ranges) {
    let result = [];
    let parts = ranges.split(', ');
    for (let part of parts) {
        let rangeParts = part.split('_');
        if (rangeParts.length === 1) {
            // Es un único número
            result.push(Number(rangeParts[0]));
        }
        else {
            // Es un rango
            let start = Number(rangeParts[0]);
            let end = Number(rangeParts[1]);
            for (let i = start; i <= end; i++) {
                result.push(i);
            }
        }
    }
    return result;
}
// Ejemplos de prueba:
console.log(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14])); // "5_7, 9, 12_14"
console.log(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])); // "-3_-1, 3, 5_7"
console.log(fromArrayToRanges([17])); // "17"
console.log(fromArrayToRanges([3, 5, 6, 7, 9, 10])); // "3, 5_7, 9_10"
console.log(fromRangesToArray("5_7, 9, 12_14")); // [5, 6, 7, 9, 12, 13, 14]
console.log(fromRangesToArray("-3_-1, 3, 5_7")); // [-3, -2, -1, 3, 5, 6, 7]
console.log(fromRangesToArray("17")); // [17]
console.log(fromRangesToArray("3, 5_7, 9_10")); // [3, 5, 6, 7, 9, 10]
