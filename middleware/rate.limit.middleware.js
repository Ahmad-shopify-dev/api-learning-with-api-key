import rateLimit from "express-rate-limit";
import { API_LIMIT_TIME, API_RATE_LIMIT } from "../config/env.config.js";

// RATE LIMITER CHECK THE LIMIT OF THE REQUESTS FOR A WINDOW AND FOR A USER TO HIT
// IN OUR CASE WE ARE CHECKING FOR 5 REQUESTS PER MINUTE
export const apiLimiter = rateLimit({
    windowMs: Number(API_LIMIT_TIME),
    limit: API_RATE_LIMIT,
    message: {
        error: "Too many requests, please try again later." 
    },
    standardHeaders: true,
    legacyHeaders: false,
}) 

