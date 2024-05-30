import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import ClienteRouter from './routes/routesCliente';
import GastoRouter from './routes/routesGasto';
import ConceptoRouter from './routes/routesConcepto';


const prisma = new PrismaClient();
const Router = express();
const PORT = 8000;

Router.use(express.json());

// Usar las rutas de cliente y gasto
Router.use('/clientes', ClienteRouter); // Ruta específica para clientes
Router.use('/gastos', GastoRouter); // Ruta específica para gastos
Router.use('/conceptos', ConceptoRouter);

Router.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
