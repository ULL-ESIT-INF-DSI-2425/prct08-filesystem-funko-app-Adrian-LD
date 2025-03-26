/*. Eliminar un elemento de una matriz
Hay varias formas de eliminar un elemento, dependiendo de cómo quieras hacerlo:

Eliminar un elemento en una posición específica
Puedes usar el método splice() para eliminar un elemento de una posición concreta. splice() también te permite agregar elementos en esa misma posición si lo deseas.

typescript
Copiar
Editar
let arr = [10, 20, 30, 40, 50];

// Eliminar el elemento en la posición 2 (el valor 30)
arr.splice(2, 1);

console.log(arr);  // [10, 20, 40, 50]
Sintaxis de splice():

El primer parámetro es el índice donde quieres empezar a modificar la matriz.
El segundo parámetro es la cantidad de elementos que quieres eliminar.
Eliminar el último elemento
Si deseas eliminar el último elemento de la matriz, puedes usar pop():

typescript
Copiar
Editar
let arr = [10, 20, 30, 40, 50];
arr.pop();  // Elimina el último elemento (50)

console.log(arr);  // [10, 20, 30, 40]
Eliminar el primer elemento
Si deseas eliminar el primer elemento de la matriz, puedes usar shift():

typescript
Copiar
Editar
let arr = [10, 20, 30, 40, 50];
arr.shift();  // Elimina el primer elemento (10)

console.log(arr);  // [20, 30, 40, 50]
2. Añadir un elemento en una posición específica
Para agregar un elemento en una posición concreta de la matriz, puedes usar el método splice() también:

typescript
Copiar
Editar
let arr = [10, 20, 30, 40, 50];

// Añadir el número 25 en la posición 2
arr.splice(2, 0, 25);

console.log(arr);  // [10, 20, 25, 30, 40, 50]
Sintaxis de splice() para añadir:

El primer parámetro es el índice donde quieres insertar el nuevo elemento.
El segundo parámetro es 0 porque no quieres eliminar elementos.
El tercer parámetro es el elemento que deseas agregar.
Añadir un elemento al final
Para añadir un elemento al final de la matriz, puedes usar push():

typescript
Copiar
Editar
let arr = [10, 20, 30, 40, 50];
arr.push(60);  // Añadir el 60 al final

console.log(arr);  // [10, 20, 30, 40, 50, 60]
Añadir un elemento al principio
Para añadir un elemento al principio de la matriz, puedes usar unshift():

typescript
Copiar
Editar
let arr = [10, 20, 30, 40, 50];
arr.unshift(5);  // Añadir el 5 al principio

console.log(arr);  // [5, 10, 20, 30, 40, 50]
Resumen de métodos:
Eliminar en posición específica: splice()
Eliminar el último elemento: pop()
Eliminar el primer elemento: shift()
Añadir al final: push()
Añadir al principio: unshift()
Añadir en posición específica: splice()


1. Eliminar un elemento de una matriz bidimensional
Eliminar un elemento en una fila específica
Si deseas eliminar un elemento en una posición concreta dentro de una fila específica, puedes usar splice().

Ejemplo:

typescript
Copiar
Editar
let matrix = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

// Eliminar el elemento en la posición [1][2] (60)
matrix[1].splice(2, 1);

console.log(matrix);
// [[10, 20, 30], [40, 50], [70, 80, 90]]
Eliminar una fila específica
Para eliminar una fila específica (una sub-matriz), puedes usar el método splice() en la matriz principal:

typescript
Copiar
Editar
let matrix = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

// Eliminar la fila en la posición 1
matrix.splice(1, 1);

console.log(matrix);
// [[10, 20, 30], [70, 80, 90]]
2. Agregar un elemento en una matriz bidimensional
Agregar un elemento en una fila específica
Para agregar un elemento dentro de una fila, puedes usar splice() de la misma forma que lo harías con una matriz unidimensional:

typescript
Copiar
Editar
let matrix = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

// Añadir el número 25 en la posición [0][2] (en la primera fila, antes del 30)
matrix[0].splice(2, 0, 25);

console.log(matrix);
// [[10, 20, 25, 30], [40, 50, 60], [70, 80, 90]]
Agregar una fila nueva en una posición específica
Puedes usar splice() para agregar una nueva fila en la matriz bidimensional:

typescript
Copiar
Editar
let matrix = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

// Agregar una nueva fila [100, 110, 120] en la posición 1
matrix.splice(1, 0, [100, 110, 120]);

console.log(matrix);
// [[10, 20, 30], [100, 110, 120], [40, 50, 60], [70, 80, 90]]
Agregar una fila al final
Si quieres agregar una fila al final de la matriz, puedes usar push():

typescript
Copiar
Editar
let matrix = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

// Agregar una nueva fila al final
matrix.push([100, 110, 120]);

console.log(matrix);
// [[10, 20, 30], [40, 50, 60], [70, 80, 90], [100, 110, 120]]
Agregar una fila al principio
Para agregar una fila al principio de la matriz, puedes usar unshift():

typescript
Copiar
Editar
let matrix = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

// Agregar una nueva fila al principio
matrix.unshift([100, 110, 120]);

console.log(matrix);
// [[100, 110, 120], [10, 20, 30], [40, 50, 60], [70, 80, 90]]
Resumen de métodos:
Eliminar un elemento en una fila específica: splice()
Eliminar una fila específica: splice()
Añadir un elemento en una fila: splice()
Añadir una fila al final: push()
Añadir una fila al principio: unshift()
Modificar un elemento en una fila: Asignación directa (matrix[fila][columna]

const fruits = ["apple", "banana", "cherry"];
const result = fruits.join(", ");
console.log(result);  // "


reverse

const arr = [1, 2, 3, 4, 5];
arr.fill(0);
console.log(arr);  // [0, 0, 0, 0, 0]



*/ 
