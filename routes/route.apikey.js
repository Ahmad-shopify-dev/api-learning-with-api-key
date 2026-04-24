/**
 * @swagger
 * /api/generate-api-key:
 *      post:
 *          summary: regenerate api key
 *          description: recreate an api key for the already existing user
 *          requestBody:
 *              required: true,
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              email:
 *                                  type: string
 *                                  example: user@example.com
 *          responses:
 *              200:
 *                  description: API key generated for the user successfully
 */


import { Router } from "express";
import { generateApiKeyController } from "../controller/apikey.controller.js";

const apiKeyGenerateRouter = Router();

// API KEY CREATE ENDPOINT
apiKeyGenerateRouter.post("/generate-api-key", generateApiKeyController)


export default apiKeyGenerateRouter;
