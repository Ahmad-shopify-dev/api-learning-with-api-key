import { getUsers, saveUsers } from "../config/db.config.js";

export const verifyApiKey = (req, res, next) => {
    const apiKey = req.header('x-api-key');

    if(!apiKey) {
        return res.status(401).json({
            success: false,
            message: "Missing api key in request",
            data: null,
            links: null
        })
    }

    const users = getUsers();

    const index = users.findIndex(user => user.apiKey === apiKey);
    if(index === -1) {
        return res.status(400).json({
          success: false,
          message: "User not found",
          data: null,
          links: null,
        });
    };

    const user = users[index];
    user.usage.requestCount += 1;
    user.usage.lastUsed = new Date().toISOString();
    saveUsers(users);

    req.user = user;
    next();
}


