const swaggerJsDoc = require('swagger-jsdoc');
// const path = require('path');

module.exports = swaggerJsDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'JR tasks',
      description: 'xxxxxx',
      version: '1.0.0',
      contact: {
        name: 'mason',
        email: 'm@m.com',
      },
    },
  },
  apis: ['src/controllers/*.js'],
});
