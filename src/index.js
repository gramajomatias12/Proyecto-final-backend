import express from 'express';
import productsRouter from './routes/products.routes.js';
const app = express();

const items = [
    { id: 1, nombre: 'Laptop', categoria: 'electronica', precio: 1000 },
    { id: 2, nombre: 'Telefono', categoria: 'electronica', precio: 500 },
    { id: 3, nombre: 'Mesa', categoria: 'muebles', precio: 150 },
    { id: 4, nombre: 'Silla', categoria: 'muebles', precio: 75 },
    { id: 5, nombre: 'Auriculares', categoria: 'electronica', precio: 100 }
]

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

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

app.get('/usuarios', (req, res) => {
    res.status(200).json({
        data: [
            { id: 1, nombre: 'Ana', apellido: 'Gomez', edad: 25 },
            { id: 2, nombre: 'Luis', apellido: 'Martinez', edad: 30 }
        ],
        Message: "Lista de usuarios obtenida correctamente"
    });
});

app.get('/item/:id', (req, res) => {
    const itemId = req.params.id;
    const item = items.find(p => p.id === parseInt(itemId));
    if (item) {
        res.status(200).json({message: "Item encontrado con exito",
            data: item});
    } else {
        res.status(404).send(`Ítem con ID ${itemId} no encontrado`);
    }
});

//ejemplo: Consulta de ítems con parámetros de query (category y price)
// Ejemplo de URL: items?category=electronica&price=200
app.get('/items', (req, res) => {
    const category = req.query.category;
    const price = req.query.price;

    const filteredItems = items.filter(p => {
        return (!category || p.categoria === category) && (!price || p.precio >= parseInt(price));
    });
    res.status(200).json({
        message: "Items filtrados correctamente",
        data: filteredItems
    });

});

// Rutas de productos 
app.use('/api', productsRouter);

app.use((req, res) => {
    res.status(404).send('404 - Ruta no encontrada');
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});