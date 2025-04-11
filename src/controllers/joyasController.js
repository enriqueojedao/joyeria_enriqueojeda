import { obtenerJoyas, filtrarJoyas, obtenerJoyaPorId } from '../models/joyasModel.js';
import HATEOAS from '../helpers/hateoas.js';
import { FILTERS_MAP } from '../helpers/filter.js';


// GET /joyas
const getJoyas = async (req, res) => {
  try {
    const { limits = 5, page = 1, order_by = "id_ASC" } = req.query;
    const joyas = await obtenerJoyas(Number(limits), Number(page), order_by);
    const data = await HATEOAS('joyas', joyas);
    res.status(200).json({ joyas: data });
  } catch (error) {
    console.error('Error al obtener joyas:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// GET /joyas/filtros
const getJoyasFiltradas = async (req, res) => {
  try {
    // Filtra solo los parámetros válidos según FILTERS_MAP y quita la basura:
    const filtros = Object.fromEntries(
      Object.entries(req.query).filter(([key]) => key in FILTERS_MAP)
    );

    const joyasFiltradas = await filtrarJoyas(filtros);

    if (joyasFiltradas.length === 0) {
      return res.status(404).json({
        mensaje: 'No existen productos con las especificaciones solicitadas 🔍'
      });
    }

    res.json(joyasFiltradas);
  } catch (error) {
    console.error('Error al filtrar joyas:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// GET /joyas/id
const getJoyaPorId = async (req, res) => {
  try {
    const { id } = req.params;

    // ⚠️ Validación de ID (solo enteros positivos)
    const idValido = Number(id);
    if (!Number.isInteger(idValido) || idValido <= 0) {
      return res.status(400).json({
        error: 'ID inválido. Debe ser un número entero positivo.'
      });
    }

    const joya = await obtenerJoyaPorId(idValido);

    if (!joya) {
      return res.status(404).json({ error: 'Joya no encontrada' });
    }

    res.json(joya);
  } catch (error) {
    console.error('Error al obtener la joya:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


export {
  getJoyas,
  getJoyasFiltradas,
  getJoyaPorId
};
