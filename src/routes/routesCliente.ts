import express from 'express';
import { crearCliente, obtenerClientes, obtenerClientePorId, actualizarCliente, eliminarCliente } from '../controlers/controlersCliente';

const ClienteRouter = express.Router();

// Rutas para los clientes
ClienteRouter.post('/clientes', crearCliente);
ClienteRouter.get('/clientes', obtenerClientes);
ClienteRouter.get('/clientes/:id', obtenerClientePorId);
ClienteRouter.put('/clientes/:id', actualizarCliente);
ClienteRouter.delete('/clientes/:id', eliminarCliente);

export default ClienteRouter;
