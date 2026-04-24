import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Stack Library API",
      version: "1.0.0",
      description:
        "A RESTful API with API Key authentication, HATEOAS, rate limiting, and usage tracking.",
    },
    servers: [
      {
        url: "http://127.0.0.1:5000",
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "x-api-key",
        },
      },
    },
    security: [
      {
        ApiKeyAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"],
};


const swaggerDoc = swaggerJSDoc(options);
export default swaggerDoc;
