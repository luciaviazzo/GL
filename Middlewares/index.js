import express from 'express';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

//Configuración para obtener __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3002;
const httpServer = http.createServer(app);

//Middleware para registrar el tiempo de demora de una solicitud HTTP
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`Request to ${req.url} took ${duration}ms`);
  });
  next();
});

//Middleware para registrar las solicitudes realizadas
app.use((req, res, next) => {
  res.on('finish', () => {
    const log = `${new Date().toISOString()} - Method: ${req.method} - Status: ${res.statusCode}\n`;
    fs.appendFile(path.join(__dirname, 'request.txt'), log, (err) => {
      if (err) {
        console.error('Error writing to log file', err);
      }
    });
  });
  next();
});

//Ruta correcta
app.get('/', (_req, res) => {
  return res.send('<h1>WELCOME</h1>');
});

//Rutas inexistentes
app.use((_req, res) => {
  return res.status(404).send('<h1>404 NOT FOUND</h1>');
});

//Inicio del servidor
httpServer.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});


/*Las solicitudes realizadas con el tiempo de ejecucion se guardan en 
el archivo request.txt*/
