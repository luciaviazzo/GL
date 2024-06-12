const fs = require('node:fs');

//Lee el archivo de forma sincrona
const datos = fs.readFileSync('./datos.txt', 'utf-8');

//Convierte el archivo en un array de numeros
const numeros = datos.split(/\s+/).map(Number);

//Filtra nros pares
const numerosPares = numeros.filter(num => num % 2 === 0);

//Cuenta los nros pares
const cantidadPares = numerosPares.length;

console.log(`Cantidad de números pares: ${cantidadPares}`);
