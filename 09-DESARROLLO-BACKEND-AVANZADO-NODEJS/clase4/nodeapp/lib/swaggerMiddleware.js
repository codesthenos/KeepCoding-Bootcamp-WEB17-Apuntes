import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'NodeApp API',
      version: '0.1.0',
      description: 'API de NodeApp',
    },
  },
  apis: ['swagger.yaml'], // Adjust the path if necessary
};
// parse the .yaml a .json
const specification = swaggerJSDoc(options)

export default [swaggerUI.serve, swaggerUI.setup(specification)]