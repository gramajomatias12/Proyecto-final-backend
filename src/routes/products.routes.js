import express from 'express';
import { getAllProducts, getProductById } from '../controllers/products.controller.js';

const routes = express.Router();

routes.get('/products', getAllProducts);

routes.get("/products/:id", getProductById);

//routes.post("/products/create", createProduct);

//routes.delete("/products/:id", deleteProduct);

export default routes;