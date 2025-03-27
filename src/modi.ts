import { error } from 'console';
import * as fs from 'fs';
import { argv } from 'process';
import { Argv } from 'yargs';

/**
 * Comprobar la existencia del directorio
 * @param archivo directorio a comprobar si esxiste o no
 */
function checkParameter(archivo:string):void {
  fs.stat(archivo,(err, stats) => {
    if (err) {
      console.error("Ruta introducida no es valida", err.message);
    }
    if (!stats.isDirectory()) {
      console.error("Ruta introducida no es valida");
    } 
  });
}

const ruta_destino = "/home/usuario/prct08-filesystem-funko-app-Adrian-LD/versions/";


/**
 *  Se encarga de hacer de comprobar si un archivo se ha modificado o no
 * @param ruta_origen ruta del origen 
 * @param ruta_destino ruta de destino
 */
function  watchMonitor(ruta_origen: string, ruta_destino:string):void {
  fs.watch(ruta_origen,{recursive: true}, (error, archivo) => {
    if (archivo) {
      console.log(archivo);
      copyfile(ruta_origen+archivo, ruta_destino+archivo);
    }
  });
  
}



function copyfile(origen: string, destino: string): void {
  const timestamp = Date.now();
  const archivo = `${origen}.${timestamp}.bak`; 
  const destino_ruta = `${destino}.${timestamp}.bak`; 

  fs.copyFile(archivo, destino_ruta, (error) => {
    if (error) {
      console.error(`Error al copiar ${archivo}:`, error.message);
    } 
});

}




let argumento_origen = argv[2];
checkParameter(argumento_origen);
watchMonitor(argumento_origen,ruta_destino);
