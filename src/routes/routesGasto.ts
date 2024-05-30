import express from 'express';
import { crearGasto, obtenerGastos, obtenerGastoPorId, actualizarGasto, eliminarGasto } from '../controlers/controlersGasto';

const GastoRouter = express.Router();

// Rutas para los gastos
GastoRouter.post('/gastos', crearGasto);
GastoRouter.get('/gastos', obtenerGastos);
GastoRouter.get('/gastos/:id', obtenerGastoPorId);
GastoRouter.put('/gastos/:id', actualizarGasto);
GastoRouter.delete('/gastos/:id', eliminarGasto);

export default GastoRouter;
