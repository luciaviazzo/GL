const fs = require('node:fs');

// Lee el archivo de forma sincrona
const datos = fs.readFileSync('./datos.txt', 'utf-8');

// Convierte el contenido del archivo en un array de números
const numeros = datos.split(/\s+/).map(Number);

// Filtra los números pares
const numerosPares = numeros.filter(num => num % 2 === 0);

// Cuenta la cantidad de números pares
const cantidadPares = numerosPares.length;

// Guarda el resultado en un archivo
const resultado = `Cantidad de números pares: ${cantidadPares}`;
fs.writeFileSync('./numeros-pares.txt', resultado);

console.log('El resultado ha sido guardado en numeros-pares.txt');
