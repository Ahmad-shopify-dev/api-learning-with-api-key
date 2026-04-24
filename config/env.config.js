import { config } from "dotenv";

config({ path: '.env' });

export const { PORT, BASE_URL, API_KEY_HEADER, API_LIMIT_TIME, API_RATE_LIMIT } = process.env;
