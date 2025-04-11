const logger = (req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  console.log({
    body: req.body,
    params: req.params,
    query: req.query
  });
  next();
};

const notFoundHandler = (req, res, next) => {
  console.log({
    error: 'Ruta no encontrada',
    method: req.method,
    url: req.originalUrl
  });
  res.status(404).json({ error: 'Ruta no encontrada' });
};

export { logger, notFoundHandler };
