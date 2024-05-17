const { PrismaClient } = require('@prisma/client');

import express, { Request, Response } from 'express';

const prisma = new PrismaClient();
const app = express();
const PORT = 3000;

app.use(express.json());

/////////////////////////////////////////////////// Rutas para la entidad Cliente /////////////////////////////////////////////
const clienteRouter = express.Router();

clienteRouter.get('/', async (req: Request, res: Response) => {
  try {
    const clientes = await prisma.cliente.findMany();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al recuperar clientes.' });
  }
});

clienteRouter.post('/', async (req: Request, res: Response) => {
  const { nombre, identificacion } = req.body;
  try {
    const nuevoCliente = await prisma.cliente.create({
      data: {
        nombre,
        identificacion,
        estado: 'Activo' // Estado predeterminado
      }
    });
    res.json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear un nuevo cliente.' });
  }
});

clienteRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, identificacion } = req.body;
  try {
    const clienteActualizado = await prisma.cliente.update({
      where: { id: parseInt(id) },
      data: {
        nombre,
        identificacion,
      },
    });
    res.json(clienteActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el cliente.' });
  }
});

clienteRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const clienteEliminado = await prisma.cliente.update({
      where: { id: parseInt(id) },  // Asegúrate de convertir id a número con base 10
      data: {
        estado: 'Inactivo',  // Cambia el estado a "Inactivo"
      },
    });
    res.json(clienteEliminado);  // Devuelve el cliente actualizado
  } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el cliente.', details: error });
  }
});

/////////////////////////////////////////////////// Rutas para la entidad Concepto //////////////////////////////////////////
const conceptoRouter = express.Router();

conceptoRouter.get('/', async (req: Request, res: Response) => {
  try {
    const conceptos = await prisma.concepto.findMany();
    res.json(conceptos);
  } catch (error) {
    res.status(500).json({ error: 'Error al recuperar conceptos.' });
  }
});

conceptoRouter.post('/', async (req: Request, res: Response) => {
  const { descripcion } = req.body;
  try {
    const nuevoConcepto = await prisma.concepto.create({
      data: {
        descripcion,
        estado: 'Activo' // Estado predeterminado
      }
    });
    res.json(nuevoConcepto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear un nuevo concepto.' });
  }
});

conceptoRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { descripcion } = req.body;
  try {
    const conceptoActualizado = await prisma.concepto.update({
      where: { id: parseInt(id) },
      data: {
        descripcion,
      },
    });
    res.json(conceptoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el concepto.' });
  }
});

conceptoRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const conceptoEliminado = await prisma.concepto.update({
      where: { id: parseInt(id) },
      data: {
        estado: 'Inactivo',
      },
    });
    res.json(conceptoEliminado);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el concepto.' });
  }
});

/////////////////////////////////////////////////// Rutas para la entidad Gasto //////////////////////////////////////////
const gastoRouter = express.Router();

gastoRouter.get('/', async (req: Request, res: Response) => {
  try {
    const gastos = await prisma.gasto.findMany();
    res.json(gastos);
  } catch (error) {
    res.status(500).json({ error: 'Error al recuperar gastos.' });
  }
});

gastoRouter.post('/', async (req: Request, res: Response) => {
  const { clienteId, conceptoId, fecha, hora, valorGasto } = req.body;
  try {
    const nuevoGasto = await prisma.gasto.create({
      data: {
        clienteId,
        conceptoId,
        fecha,
        hora,
        valorGasto,
        estado: 'Activo' // Estado predeterminado
      }
    });
    res.json(nuevoGasto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear un nuevo gasto.' });
  }
});

gastoRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { clienteId, conceptoId, fecha, hora, valorGasto } = req.body;
  try {
    const gastoActualizado = await prisma.gasto.update({
      where: { id: parseInt(id) },
      data: {
        clienteId,
        conceptoId,
        fecha,
        hora,
        valorGasto,
      },
    });
    res.json(gastoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el gasto.' });
  }
});

gastoRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const gastoEliminado = await prisma.gasto.update({
      where: { id: parseInt(id) },
      data: {
        estado: 'Inactivo',
      },
    });
    res.json(gastoEliminado);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el gasto.' });
  }
});

/////////////////////////////////////////////////// Conectar routers al app //////////////////////////////////////////
app.use('/clientes', clienteRouter);
app.use('/conceptos', conceptoRouter);
app.use('/gastos', gastoRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
