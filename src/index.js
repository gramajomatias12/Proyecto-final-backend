import express from 'express';
import productsRoutes from './routes/products.routes.js';
import usersRoutes from './routes/users.routes.js';
import cors from 'cors';
import authRouter from './routes/auth.routes.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors({ origin: '*' }));

app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`);
    next();
});

app.use(bodyParser.json());

// Rutas de autenticación
app.use('/auth', authRouter);

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