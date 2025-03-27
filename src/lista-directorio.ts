import { readFile } from 'fs';
import { fileURLToPath } from 'url';
import { join } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..'); 

function imprimirContenidoArchivo(rutaArchivo: string): void {

  const rutaCompleta = join(__dirname, '../src', rutaArchivo); 

  readFile(rutaCompleta, (err, data) => {
    if (err) {
      console.error('Hubo un error al leer el archivo:', err.message);
    } else {
      console.log('Contenido del archivo:');
      console.log(data.toString());
    }
  });
}

imprimirContenidoArchivo('hola.txt');
