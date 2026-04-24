/**
 * @swagger
 * /api/books:
 *  get:
 *      summary: Get all books
 *      description: you can visit this endpoint to get list of books with pagination and limit parameters
 *      security:
 *          - apiKeyAuth: []
 *      parameters:
 *          - in: query
 *            name: page
 *            schema: 
 *              type: integer
 *            example: 1
 *          - in: query
 *            name: limit
 *            schema:
 *              type: integer
 *            example: 5
 *      responses:
 *          200:
 *              description: Books are fetched successfully. 
 */


import { Router } from "express";
import { addBook, deleteBook, editBook, getBookById, getBooksController } from "../controller/books.controller.js";
import { verifyApiKey } from "../middleware/apikey.verify.middleware.js";

const booksRoute = Router();


booksRoute.get("/books", verifyApiKey, getBooksController);
booksRoute.get("/books/:id", verifyApiKey, getBookById);
booksRoute.post("/books", verifyApiKey, addBook);
booksRoute.put("/books/:id", verifyApiKey, editBook);
booksRoute.delete("/books/:id", verifyApiKey, deleteBook);

export default booksRoute;
