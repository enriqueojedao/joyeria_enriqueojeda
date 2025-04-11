export const FILTERS_MAP = {
    precio_min: (i) => `precio >= $${i + 1}`,
    precio_max: (i) => `precio <= $${i + 1}`,
    stock_min:  (i) => `stock >= $${i + 1}`,
    stock_max:  (i) => `stock <= $${i + 1}`,
    categoria:  (i) => `categoria ILIKE $${i + 1}`,
    metal:      (i) => `metal ILIKE $${i + 1}`
  };
  
  // Función principal que genera query SQL + valores en base a filtros:
  const filter = (entity, filters) => {
    const table = entity;
  
    const conditions = Object.entries(filters).map(([key], i) => {
      const condition = FILTERS_MAP[key];
      return condition ? condition(i) : `${key} = $${i + 1}`; // fallback por si agrego algo sin mapear...
    }).join(' AND ');
  
    const values = Object.entries(filters).map(([key, value]) => {
      // Agrega comodines solo para campos tipo texto:
      if (key === 'categoria' || key === 'metal') return `%${value}%`;
      return value;
    });
  
    const query = `SELECT * FROM ${table} ${conditions ? 'WHERE ' + conditions : ''}`;
  
    return { query, values };
  };
  
  export default filter;
  