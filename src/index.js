import express from 'express';
import productsRoutes from './routes/products.routes.js';
import usersRoutes from './routes/users.routes.js';
import cors from 'cors';
import authRouter from './routes/auth.routes.js';
import bodyParser from 'body-parser';
import { authentication } from './middlewares/authentication.js';

const app = express();

app.use(cors());

app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => { res.type('html').send('Hola, este es un servidor Express'); });

app.use(bodyParser.json());
app.use('/auth', authRouter);

// Rutas de usuarios
app.use('/api', usersRoutes);

// Rutas de productos 
app.use('/api',authentication, productsRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).send('404 - Ruta no encontrada');
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});