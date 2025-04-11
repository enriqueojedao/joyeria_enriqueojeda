import pg from 'pg';
import 'dotenv/config'; 

const { Pool } = pg;

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

const pool = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
  allowExitOnIdle: true,
});

// Test de conexión inmediata:
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Error al conectar con la base de datos:', err.message);
  } else {
    console.log('🔋 Base de datos conectada:', res.rows[0]);
  }
});

export default pool;
