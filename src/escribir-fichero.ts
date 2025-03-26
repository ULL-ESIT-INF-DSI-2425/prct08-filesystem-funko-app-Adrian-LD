// import { writeFile } from 'fs';
// import { fileURLToPath } from 'url';
// import { join } from 'path';

// // Obtener __filename y __dirname en ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = join(__filename, '..'); 

// // Función para escribir en un archivo
// function escribirEnArchivo(rutaArchivo: string, contenido: string): void {
//   const rutaCompleta = join(__dirname, '../src', rutaArchivo); // Asegurarse de que la ruta esté bien

//   // Escribir el contenido en el archivo
//   writeFile(rutaCompleta, contenido, 'utf8', (err) => {
//     if (err) {
//       console.error('Hubo un error al escribir en el archivo:', err.message);
//     } else {
//       console.log(`El archivo "${rutaArchivo}" se ha escrito correctamente.`);
//     }
//   });
// }

// // Ejemplo de uso:
// const archivo = 'hola.txt';  // Nombre del archivo a modificar
// const contenido = 'Nuevo contenido para el archivo.';  // Contenido que se va a escribir

// escribirEnArchivo(archivo, contenido);

import { appendFile } from 'fs';
import { fileURLToPath } from 'url';
import { join } from 'path';

// Obtener __filename y __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..'); 

// Función para añadir contenido al final del archivo
function añadirContenidoArchivo(rutaArchivo: string, contenido: string): void {
  const rutaCompleta = join(__dirname, '../src', rutaArchivo); // Asegurarse de que la ruta esté bien

  // Añadir el contenido al final del archivo
  appendFile(rutaCompleta, contenido, 'utf8', (err) => {
    if (err) {
      console.error('Hubo un error al añadir al archivo:', err.message);
    } else {
      console.log(`El contenido se ha añadido correctamente al archivo "${rutaArchivo}".`);
    }
  });
}

// Ejemplo de uso:
const archivo = 'hola.txt';  // Nombre del archivo a modificar
const contenido = '\nNuevo contenido añadido al final del archivo.';  // Contenido que se va a añadir (con salto de línea)

// Llamada a la función
añadirContenidoArchivo(archivo, contenido);
