import express from 'express';
import { getAllUsers, getUserById } from '../controllers/users.controller.js';

const routes = express.Router();

routes.get('/users', getAllUsers);
routes.get('/users/:id', getUserById);

export default routes;