import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

// Controlador para crear un nuevo gasto
export const crearGasto = async (req: Request, res: Response) => {
    const { clienteId, conceptoId, sucursal, fecha, hora, valorGasto } = req.body;
    try {
        const gasto = await prisma.gasto.create({
            data: {
                clienteId,
                conceptoId,
                sucursal,
                fecha,
                hora,
                valorGasto
            }
        });
        res.json(gasto);
    } catch (error) {
        console.error('Error al crear el gasto:', error);
        res.status(500).json({ error: 'Error al crear el gasto' });
    }
};

// Controlador para obtener todos los gastos
export const obtenerGastos = async (req: Request, res: Response) => {
    try {
        const gastos = await prisma.gasto.findMany();
        res.json(gastos);
    } catch (error) {
        console.error('Error al obtener los gastos:', error);
        res.status(500).json({ error: 'Error al obtener los gastos' });
    }
};

// Controlador para obtener un gasto por su ID
export const obtenerGastoPorId = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const gasto = await prisma.gasto.findUnique({
            where: { id }
        });
        if (gasto) {
            res.json(gasto);
        } else {
            res.status(404).json({ error: 'Gasto no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el gasto:', error);
        res.status(500).json({ error: 'Error al obtener el gasto' });
    }
};

// Controlador para actualizar un gasto por su ID
export const actualizarGasto = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { clienteId, conceptoId, sucursal, fecha, hora, valorGasto } = req.body;
    try {
        const gasto = await prisma.gasto.update({
            where: { id },
            data: {
                clienteId,
                conceptoId,
                sucursal,
                fecha,
                hora,
                valorGasto
            }
        });
        res.json(gasto);
    } catch (error) {
        console.error('Error al actualizar el gasto:', error);
        res.status(500).json({ error: 'Error al actualizar el gasto' });
    }
};

// Controlador para eliminar un gasto por su ID
export const eliminarGasto = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        await prisma.gasto.delete({
            where: { id }
        });
        res.json({ mensaje: 'Gasto eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el gasto:', error);
        res.status(500).json({ error: 'Error al eliminar el gasto' });
    }
}


