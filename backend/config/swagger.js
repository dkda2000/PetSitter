// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Petsitter',
      version: '1.0.0',
      description: 'Documentación de nuestra API',
    },
    servers: [
      {
        url: 'https://ilovepetsitter.vercel.app',
        description: 'Production server',
      },

      
    ],
  },
  apis: ['./routes/*.js'], // Aquí se definen las rutas donde están tus endpoints
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
