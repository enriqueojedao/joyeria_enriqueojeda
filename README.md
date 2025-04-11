# Joyería EnriqueOjeda - Backend API

Bienvenido al repositorio de la **API REST para la tienda online de joyería EnriqueOjeda**. Este backend está desarrollado con **Node.js**, **Express**, y **PostgreSQL**, y proporciona acceso a diversas funcionalidades, como filtros dinámicos de productos, validaciones robustas, y un sistema de paginación.

## 🚀 Tecnologías Usadas

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express**: Framework para la creación de APIs.
- **Morgan**: Middleware para el manejo de logs HTTP.
- **PostgreSQL**: Base de datos relacional para almacenar información de productos.
- **dotenv**: Manejo de variables de entorno para la configuración.
- **CORS**: Habilita solicitudes de otros dominios.
- **pg**: Librería para interactuar con PostgreSQL.

---

## 🧑‍💻 Características

### 1. **Filtros Dinámicos**  
La API permite realizar filtrados dinámicos de productos utilizando varios parámetros de búsqueda, tales como **precio**, **stock**, **categoría** y **metal**. Los filtros se aplican directamente a la base de datos para obtener resultados eficientes.  

#### Filtros disponibles:
- **precio_min**: Filtra por precio mínimo.
- **precio_max**: Filtra por precio máximo.
- **stock_min**: Filtra por stock mínimo.
- **stock_max**: Filtra por stock máximo.
- **categoria**: Filtra por categoría de la joya (ej. 'aros', 'collares').
- **metal**: Filtra por el tipo de metal (ej. 'plata', 'oro').

Estos filtros son válidos en el endpoint de **GET /joyas/filtros**. Si el usuario envía filtros no válidos, estos serán ignorados y no afectarán la consulta.

### 2. **Estructura HATEOAS**
La API implementa el principio **HATEOAS** (Hypermedia as the Engine of Application State), lo que significa que los recursos devueltos por la API incluyen enlaces que permiten navegar de manera intuitiva a otros recursos relacionados. Esto facilita la interacción con la API y proporciona una experiencia más amigable.

### 3. **Colección Postman para Pruebas**
Se incluye una colección de **Postman** en la carpeta **Postman** del repositorio, que puedes importar y utilizar para realizar pruebas automáticas de los endpoints. La colección cubre los siguientes casos:

- Obtener joyas filtradas.
- Obtener detalles de una joya por ID.
- Obtener todas las joyas.

### 4. **Pruebas de API**
Para ejecutar las pruebas de la API de manera sencilla, puedes utilizar el siguiente comando de **npm**:

```bash
npm run test-api

