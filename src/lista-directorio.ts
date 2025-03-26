import * as fs from 'fs';


function leerArchivo(ruta: string): void {
  fs.readFile(ruta, 'utf8', (error, datos) => {
    if (error) {
      console.error('Error al leer el archivo:', error.message);
      return;
    }
    console.log('Contenido del archivo:\n', datos);
  });
}

leerArchivo('archivo.txt');
