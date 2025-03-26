function getPaths(N, M, matrix) {
    // Lista para almacenar los caminos
    const paths = [];
    // Iniciar la exploración desde la esquina superior izquierda
    explore(0, 0, [], N, M, matrix, paths);
    return paths;
}
// Función para explorar los caminos posibles
function explore(x, y, currentPath, N, M, matrix, paths) {
    // Si llegamos a la esquina inferior derecha, agregamos el camino
    if (x === N - 1 && y === M - 1) {
        paths.push([...currentPath, matrix[x][y]]);
        return;
    }
    // Si podemos mover hacia abajo, seguimos explorando
    if (x + 1 < N) {
        explore(x + 1, y, [...currentPath, matrix[x][y]], N, M, matrix, paths);
    }
    // Si podemos mover hacia la derecha, seguimos explorando
    if (y + 1 < M) {
        explore(x, y + 1, [...currentPath, matrix[x][y]], N, M, matrix, paths);
    }
}
// Ejemplo de uso
const matrix = [[0, 1], [2, 3], [4, 5]];
console.log(getPaths(3, 2, matrix));
