import express from 'express';
import { getJoyas, getJoyasFiltradas, getJoyaPorId } from '../controllers/joyasController.js';

const router = express.Router();

// ⚠️ Las rutas más específicas van primero...
router.get('/joyas/filtros', getJoyasFiltradas);
router.get('/joyas', getJoyas);
router.get('/joyas/:id', getJoyaPorId); // Debo recordar que siempre al final por buenas prácticas.

export default router;
