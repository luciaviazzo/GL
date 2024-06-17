const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('Página de inicio');
});

// Manejo de rutas inexistentes (404)
app.use((req, res) => {
  res.status(404).render('404');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});

//Pruebo en http://localhost:3000/otra-ruta