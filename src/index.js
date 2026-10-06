import express from 'express';

const app = express();

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
        </html>`); });

app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nombre: 'Ana', apellido: 'Gomez', edad: 25 },
        { id: 2, nombre: 'Luis', apellido: 'Martinez', edad: 30 }
    ]);
});

app.use((req, res) => {
            res.status(404).json({
                error: "404 ruta no encontrada",
                mensaje: `el recurso ${req.url} no existe`
            })
        })

const PORT = 3000;

    app.listen(PORT, () => {
        console.log(`Servidor en http://localhost:${PORT}`);
    });