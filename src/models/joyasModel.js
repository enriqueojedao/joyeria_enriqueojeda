import pool from '../db/config.js';
import filter from '../helpers/filter.js'; // Helper importado

// versión paginada y ordenada con LIMIT + OFFSET
const obtenerJoyas = async (limit, page, order_by) => {
  const [campo, direccion] = order_by.split('_');
  const offset = (page - 1) * limit;
  const query = `SELECT * FROM inventario ORDER BY ${campo} ${direccion} LIMIT $1 OFFSET $2`;
  const { rows } = await pool.query(query, [limit, offset]);
  return rows;
};

// versión con filtros dinámicos usando helper
const filtrarJoyas = async (filtros) => {
  const { query, values } = filter('inventario', filtros);
  const { rows } = await pool.query(query, values);
  return rows;
};

// versión por ID
const obtenerJoyaPorId = async (id) => {
  const query = 'SELECT * FROM inventario WHERE id = $1';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

export {
  obtenerJoyas,
  filtrarJoyas,
  obtenerJoyaPorId
};
