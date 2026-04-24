/**
 * @swagger
 * /api/sign-in:
 *      post:
 *          summary: User Sign-In
 *          description: user can sign in to get the api key for the first time
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: object
 *                          properties:
 *                              email:
 *                                  type: string,
 *                                  example: example@email.com
 *                              password:
 *                                  type: string
 *                                  exmaple: pass_123
 *          responses:
 *              200:
 *                  description: user login successfully
 */


import { Router } from "express";
import { signInUser } from "../controller/auth.controller.js";

const authRouter = Router();

// YOU CAN USE BCRYPT TO HANDLE PASSWORD HASHING
authRouter.post("/sign-in", signInUser);


export default authRouter; 