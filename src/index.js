import express from 'express';
import productsRoutes from './routes/products.routes.js';
import usersRoutes from './routes/users.routes.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => { res.type('html').send('Hola, este es un servidor Express'); });

app.get('/bienvenida', (req, res) => {
    res.status(200).type('html').send(`<!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Bienvenida</title>
            </head>
            <body>
                <h1>¡Bienvenido!</h1>
                <p>Esta es una respuesta HTML de Express.</p>
            </body>
        </html>`);
});


// Rutas de usuarios
app.use('/api', usersRoutes);

// Rutas de productos 
app.use('/api', productsRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).send('404 - Ruta no encontrada');
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});