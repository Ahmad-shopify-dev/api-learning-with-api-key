import { Router } from "express";
import { verifyApiKey } from "../middleware/apikey.verify.middleware.js";
import { usageController } from "../controller/usage.controller.js";

const usageRouter = Router();

usageRouter.get("/usage", verifyApiKey, usageController);

export default usageRouter;
