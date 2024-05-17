
const { PrismaClient } = require('@prisma/client');


import promptSync from 'prompt-sync';

const prisma = new PrismaClient();
const prompt = promptSync();
/*
////////////////////////// AGREGAR DATOS A LA BD AUTOMATICAMENTE PARA USAR LA TRANSACCIONAL ////////////////////////////////
 async function main() {
  // Crear un nuevo cliente
 
 const Cliente = await prisma.cliente.create({
  data: {
    nombre: 'Kevin Pico',
    identificacion: '1234568790'
    }
  });

  console.log('Cliente creado:', Cliente);

  // Crear un nuevo concepto
  const Concepto = await prisma.concepto.create({
    data: {
      descripcion: 'Compra de computadora'
    }
  });

  console.log('Concepto creado:', Concepto);
}

main()
  .catch(err => {
    console.error('Error:', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
    });


///////////////////////////////////// AGREGAR DATOS DE GASTO A LA BASE DE DATOS /////////////////////////////////////////

// Definición de la función LLENAR para insertar elementos en la entidad Gasto
async function LLENAR() {
    const gastos = [];
  
    for (let i = 0; i < 1; i++) {
      // Solicitar datos al usuario por consola
      console.log(`Ingresa los datos para el gasto ${i + 1}:`);
      const clienteId = parseInt(prompt('ID del cliente: '));
      const conceptoId = parseInt(prompt('ID del concepto: '));
      const fecha = prompt('Fecha (DD/MM/AAAA): ');
      const hora = prompt('Hora (HH:MM:SS): ');
      const valorGastoStr = prompt('Valor del gasto: ');
      const valorGasto = parseFloat(valorGastoStr);
  
      // Verificar si la entrada es null antes de asignarla
      if (fecha !== null && hora !== null && valorGastoStr !== null) {
        // Agregar el nuevo gasto al array
        gastos.push({
          clienteId,
          conceptoId,
          fecha,
          hora,
          valorGasto
        });
      } else {
        console.log('Se ingresó un valor nulo. El gasto no se registrará.');
      }
    }
  
    // Insertar los gastos en la base de datos
    await prisma.gasto.createMany({
      data: gastos,
    });
  }
  
  // Llamar a la función LLENAR para insertar los gastos
  LLENAR()
    .then(() => {
      console.log('Gastos insertados correctamente.');
    })
    .catch((error) => {
      console.error('Error al insertar los gastos:', error);
    })
    .finally(async () => {
      await prisma.$disconnect(); // Desconectar Prisma al finalizar
    });*/