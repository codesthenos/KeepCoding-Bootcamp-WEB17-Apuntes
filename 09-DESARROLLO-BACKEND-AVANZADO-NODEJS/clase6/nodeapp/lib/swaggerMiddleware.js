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
    components: {
      securitySchemes: {
        rawTokenAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
          description: 'JWT Authorization header. Example: "Authorization: {token}"'
        }
      },
      security: [
        { rawTokenAuth: [] }
      ]
    }
  },
  // apis: ['swagger.yaml']
  apis: ['controllers/api/**/*.js']
};
// parse the .yaml a .json
const specification = swaggerJSDoc(options)

export default [swaggerUI.serve, swaggerUI.setup(specification)]