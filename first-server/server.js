import express, { request, response } from 'express';

const app = express();

//*http://localhost:3008/

/*
app.get('/', (_request, response) => {
    return response.send('Hola clase')
});*/



app.get('/', (_request, response) => {
    return response.json({
        "name": "Lucia",
        "dog": "Zaira",
        "cat": "Tom"
    })
});


app.listen(3008, () => {
    console.log('Servidor levantando en el puerto 3008')
}); //pnpm dev (para que se imprima)