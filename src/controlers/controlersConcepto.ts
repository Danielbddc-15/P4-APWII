import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Controlador para crear un nuevo concepto
export const crearConcepto = async (req: Request, res: Response) => {
    const { descripcion, sucursal } = req.body;
    try {
        const concepto = await prisma.concepto.create({
            data: {
                descripcion,
                sucursal
            }
        });
        res.json(concepto);
    } catch (error) {
        console.error('Error al crear el concepto:', error);
        res.status(500).json({ error: 'Error al crear el concepto' });
    }
};

// Controlador para obtener todos los conceptos
export const obtenerConceptos = async (req: Request, res: Response) => {
    try {
        const conceptos = await prisma.concepto.findMany();
        res.json(conceptos);
    } catch (error) {
        console.error('Error al obtener los conceptos:', error);
        res.status(500).json({ error: 'Error al obtener los conceptos' });
    }
};

// Controlador para obtener un concepto por su ID
export const obtenerConceptoPorId = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const concepto = await prisma.concepto.findUnique({
            where: { id }
        });
        if (concepto) {
            res.json(concepto);
        } else {
            res.status(404).json({ error: 'Concepto no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el concepto:', error);
        res.status(500).json({ error: 'Error al obtener el concepto' });
    }
};

// Controlador para actualizar un concepto por su ID
export const actualizarConcepto = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { descripcion, sucursal } = req.body;
    try {
        const concepto = await prisma.concepto.update({
            where: { id },
            data: {
                descripcion,
                sucursal
            }
        });
        res.json(concepto);
    } catch (error) {
        console.error('Error al actualizar el concepto:', error);
        res.status(500).json({ error: 'Error al actualizar el concepto' });
    }
};

// Controlador para eliminar un concepto por su ID
export const eliminarConcepto = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        await prisma.concepto.delete({
            where: { id }
        });
        res.json({ mensaje: 'Concepto eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el concepto:', error);
        res.status(500).json({ error: 'Error al eliminar el concepto' });
    }
};
