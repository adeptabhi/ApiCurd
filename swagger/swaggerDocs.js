import swaggerJSDoc from 'swagger-jsdoc';
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Automatically generated Swagger documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000/adeptAbhi',
        description: 'Local server',
      },
      // {
      //   url: 'https://api.example.com',
      //   description: 'Production server',
      // },
    ],
    components: {
      // securitySchemes: {
      //   BearerAuth: {
      //     type: "http",
      //     scheme: "bearer",
      //     bearerFormat: "JWT"
      //   }
      // },
      responses: {
        Success: {
          description: "Successful Response",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: { type: "boolean", example: true },
                  msg: { type: "string", example: "Success Message" },
                  data: { type: "object", example: [] }
                }
              }
            }
          }
        },
        BadRequest: {
          description: "Invalid request",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: { type: "boolean", example: false },
                  msg: { type: "string", example: "Error Message" },
                  data: { type: "object", example: [] }
                }
              }
            }
          }
        },
        Unauthorized: {
          description: "Unauthorized",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: { type: "boolean", example: false },
                  msg: { type: "string", example: "Unauthorized" },
                  data: { type: "object", example: [] }
                }
              }
            }
          }
        },
        InternalServerError: {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: { type: "boolean", example: false },
                  msg: { type: "string", example: "Error Message" },
                  data: { type: "object", example: [] }
                }
              }
            }
          }
        }
      }
    }
  },

  apis: ['./swagger/swaggerRoutes.js'],
};

const swaggerDocs = swaggerJSDoc(options);

export default swaggerDocs;