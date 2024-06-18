import express from 'express';
import http from 'node:http';

const app = express();
const port = 3001;
const httpServer = http.createServer(app);

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Configuracion ejs
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use('7static', express.static('views'));

//Ruta correcta 
app.get('/', (_req, res) => {
  res.render('index');
});

//Rutas inexistentes
app.use((_req, res) => {
  res.status(404).render('404');
});

//Incio el servidor
httpServer.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});

//Pruebo en http://localhost:3000/otra-ruta