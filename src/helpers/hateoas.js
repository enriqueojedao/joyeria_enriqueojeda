const HATEOAS = async (entity, data) => {
    const results = data.map((item) => {
      return {
        nombre: item.nombre,
        links: [
          {
            rel: "self",
            href: `http://localhost:3000/api/${entity}/${item.id}`
          }
        ]
      };
    })
  
    const total = data.length;
  
    return {
      total,
      results
    };
  };
  
  export default HATEOAS;
  