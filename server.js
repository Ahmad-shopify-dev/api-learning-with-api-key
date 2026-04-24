// IMPORT MAIN MODULES
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import swaggerUi from "swagger-ui-express";
import { apiLimiter } from './middleware/rate.limit.middleware.js';

// IMPORT CUSTOM MODULES
import { PORT } from './config/env.config.js';
import authRouter from './routes/route.auth.js';
import apiKeyGenerateRouter from './routes/route.apikey.js';
import booksRoute from './routes/route.books.js';
import usageRouter from './routes/usage.route.js';
import { errorHandler } from './middleware/error.middleware.js';
import { API_DOCS } from './utils/api.docs.js';
import swaggerDoc from './config/swagger.js';

// CREATING APP
const app = express();
 
// LOAD CONFIGURATIONS
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());
// API RATE LIMITER FOR CALLING
app.use("/api", apiLimiter);
// MORGAN -> USED TO LOGGED THE DETAILS OF ENDPOINT
app.use(morgan('dev'));

// GLOBAL ERROR HANDLER
app.use(errorHandler);

// ACCESS ROUTES
app.use("/api", authRouter);
app.use("/api", apiKeyGenerateRouter);
app.use("/api", booksRoute);
app.use("/api", usageRouter);

// IF USER HIT SOME 404 ROUTE
app.use("/api", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route not found",
        data: null
    });
});


// SWAGGER IS USED TO GENERATE API DOCS
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))

// SIMPLE SERVER MIDDLEWARE
app.get("/", (req, res) => {
    res.status(200).send(API_DOCS)
})

// LISTEN TO PORT
app.listen(PORT || 3000, () => {
    console.log(`Server up and running -> http://127.0.0.1:${PORT}`);
})

