import express from 'express';
import { getAllProducts, getProductById, createProduct, deleteProduct } from '../controllers/products.controller.js';
import { authentication } from '../middlewares/authentication.js';

const routes = express.Router();

routes.get('/products', getAllProducts);

routes.get("/products/:id", authentication, getProductById);

routes.post("/products/create", authentication, createProduct);

routes.delete("/products/:id", authentication, deleteProduct);

export default routes;