import { readdir, stat, rename, unlink } from 'fs';
import { join, extname } from 'path';

// Función para listar los archivos de un directorio con su tamaño y fecha de modificación
function listarArchivos(directorio: string): void {
  readdir(directorio, (err, archivos) => {
    if (err) {
      console.error(`Error al leer el directorio: ${err.message}`);
      return;
    }

    archivos.forEach(archivo => {
      const rutaCompleta = join(directorio, archivo);
      stat(rutaCompleta, (err, stats) => {
        if (err) {
          console.error(`Error al obtener info de ${archivo}: ${err.message}`);
        } else {
          console.log(`Archivo: ${archivo}`);
          console.log(`Tamaño: ${stats.size} bytes`);
          console.log(`Fecha de modificación: ${stats.mtime}`);
          console.log('-------------------------');
        }
      });
    });
  });
}

// Función para eliminar un archivo de manera segura moviéndolo a un directorio de reciclaje
function eliminarArchivo(archivo: string): void {
  const directorioReciclaje = './reciclaje';
  const nombreArchivo = archivo.split('/').pop()!;
  const rutaReciclaje = join(directorioReciclaje, nombreArchivo);

  // Mover el archivo al directorio de reciclaje
  rename(archivo, rutaReciclaje, (err) => {
    if (err) {
      console.error(`Error al mover el archivo a reciclaje: ${err.message}`);
    } else {
      console.log(`Archivo movido a reciclaje: ${rutaReciclaje}`);
      // Eliminar el archivo (ya ha sido movido)
      unlink(rutaReciclaje, (err) => {
        if (err) {
          console.error(`Error al eliminar el archivo: ${err.message}`);
        } else {
          console.log(`Archivo ${nombreArchivo} eliminado correctamente.`);
        }
      });
    }
  });
}

// Función para mover un archivo o directorio
function moverArchivoODirectorio(origen: string, destino: string): void {
  rename(origen, destino, (err) => {
    if (err) {
      console.error(`Error al mover: ${err.message}`);
    } else {
      console.log(`Archivo o directorio movido de ${origen} a ${destino}`);
    }
  });
}

// Función para buscar archivos por extensión en un directorio y sus subdirectorios
function buscarArchivosPorExtension(directorio: string, extension: string): void {
  readdir(directorio, (err, archivos) => {
    if (err) {
      console.error(`Error al leer el directorio: ${err.message}`);
      return;
    }

    archivos.forEach(archivo => {
      const rutaCompleta = join(directorio, archivo);
      stat(rutaCompleta, (err, stats) => {
        if (err) {
          console.error(`Error al obtener info de ${archivo}: ${err.message}`);
        } else {
          if (stats.isDirectory()) {
            // Si es un directorio, llamamos recursivamente a esta función
            buscarArchivosPorExtension(rutaCompleta, extension);
          } else if (extname(archivo) === extension) {
            console.log(`Archivo encontrado: ${rutaCompleta}`);
          }
        }
      });
    });
  });
}

// Ejemplo de uso

// Listar archivos del directorio './src' con tamaño y fecha de modificación
listarArchivos('./src');  // Cambia './src' por el directorio que quieras listar

// Eliminar un archivo (moviéndolo a reciclaje y luego eliminándolo)
eliminarArchivo('./src/hola.txt');  // Cambia './src/hola.txt' por el archivo que quieras eliminar

// Mover un archivo o directorio
moverArchivoODirectorio('./src/hola.txt', './src/archivos/hola.txt');  // Cambia las rutas según necesites

// Buscar archivos con extensión '.txt' en el directorio './src' y sus subdirectorios
buscarArchivosPorExtension('./src', '.txt');  // Cambia './src' por el directorio y '.txt' por la extensión que quieras
