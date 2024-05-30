import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Controlador para crear un nuevo cliente
export const crearCliente = async (req: Request, res: Response) => {
    const { nombre, identificacion, sucursal } = req.body;
    try {
        const cliente = await prisma.cliente.create({
            data: {
                nombre,
                identificacion,
                sucursal
            }
        });
        res.json(cliente);
    } catch (error) {
        console.error('Error al crear el cliente:', error);
        res.status(500).json({ error: 'Error al crear el cliente' });
    }
};

// Controlador para obtener todos los clientes
export const obtenerClientes = async (req: Request, res: Response) => {
    try {
        const clientes = await prisma.cliente.findMany();
        res.json(clientes);
    } catch (error) {
        console.error('Error al obtener los clientes:', error);
        res.status(500).json({ error: 'Error al obtener los clientes' });
    }
};

// Controlador para obtener un cliente por su ID
export const obtenerClientePorId = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const cliente = await prisma.cliente.findUnique({
            where: { id }
        });
        if (cliente) {
            res.json(cliente);
        } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el cliente:', error);
        res.status(500).json({ error: 'Error al obtener el cliente' });
    }
};

// Controlador para actualizar un cliente por su ID
export const actualizarCliente = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { nombre, identificacion, sucursal } = req.body;
    try {
        const cliente = await prisma.cliente.update({
            where: { id },
            data: {
                nombre,
                identificacion,
                sucursal
            }
        });
        res.json(cliente);
    } catch (error) {
        console.error('Error al actualizar el cliente:', error);
        res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
};

// Controlador para eliminar un cliente por su ID
export const eliminarCliente = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        await prisma.cliente.delete({
            where: { id }
        });
        res.json({ mensaje: 'Cliente eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el cliente:', error);
        res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
};
