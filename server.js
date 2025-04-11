import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

import { logger, notFoundHandler } from './src/middlewares/logger.js';
import joyasRoutes from './src/routes/joyas.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(logger);

app.use('/api', joyasRoutes);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
