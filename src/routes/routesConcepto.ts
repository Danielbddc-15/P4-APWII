import express from 'express';
import { crearConcepto, obtenerConceptos, obtenerConceptoPorId, actualizarConcepto, eliminarConcepto } from '../controlers/controlersConcepto';

const ConceptoRouter = express.Router();

// Rutas para los conceptos
ConceptoRouter.post('/conceptos', crearConcepto);
ConceptoRouter.get('/conceptos', obtenerConceptos);
ConceptoRouter.get('/conceptos/:id', obtenerConceptoPorId);
ConceptoRouter.put('/conceptos/:id', actualizarConcepto);
ConceptoRouter.delete('/conceptos/:id', eliminarConcepto);

export default ConceptoRouter;

