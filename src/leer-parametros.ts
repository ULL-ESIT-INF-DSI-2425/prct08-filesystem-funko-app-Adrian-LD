import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

async function leerParametros() {
  const argv = await yargs(hideBin(process.argv))
    .option('nombre', {
      alias: 'n',
      type: 'string',
      demandOption: true,
      description: 'Tu nombre',
    })
    .option('edad', {
      alias: 'e',
      type: 'number',
      description: 'Tu edad',
    })
    .help()
    .parse(); 
  console.log(`Hola, ${argv.nombre}!`);
  console.log(`Tienes ${argv.edad} años.`);
}

leerParametros().catch((err) => console.error('Error:', err));
