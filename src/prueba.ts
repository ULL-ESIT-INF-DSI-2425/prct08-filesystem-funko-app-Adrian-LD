import { readdir, stat, rename, unlink } from 'fs';
import { join, extname } from 'path';

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

function eliminarArchivo(archivo: string): void {
  const directorioReciclaje = './reciclaje';
  const nombreArchivo = archivo.split('/').pop()!;
  const rutaReciclaje = join(directorioReciclaje, nombreArchivo);

  rename(archivo, rutaReciclaje, (err) => {
    if (err) {
      console.error(`Error al mover el archivo a reciclaje: ${err.message}`);
    } else {
      console.log(`Archivo movido a reciclaje: ${rutaReciclaje}`);

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

function moverArchivoODirectorio(origen: string, destino: string): void {
  rename(origen, destino, (err) => {
    if (err) {
      console.error(`Error al mover: ${err.message}`);
    } else {
      console.log(`Archivo o directorio movido de ${origen} a ${destino}`);
    }
  });
}

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
            buscarArchivosPorExtension(rutaCompleta, extension);
          } else if (extname(archivo) === extension) {
            console.log(`Archivo encontrado: ${rutaCompleta}`);
          }
        }
      });
    });
  });
}



listarArchivos('./src'); 

eliminarArchivo('./src/hola.txt');  

moverArchivoODirectorio('./src/hola.txt', './src/archivos/hola.txt'); 

buscarArchivosPorExtension('./src', '.txt');  
