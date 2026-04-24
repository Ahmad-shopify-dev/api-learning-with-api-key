import { getUsers, saveUsers } from "../config/db.config.js"
import { generateApiKey } from "../utils/api.key.generator.js";


export const createApiKey = (email) => {
    const users = getUsers();
    const userIndex = users.findIndex(user => user.email === email);

    if(userIndex === -1) {
        return {
            success: false,
            message: "user not found",
            apiKey: null
        }
    }

    // HERE WE SHOULD DO DB OPERATIONS
    const apiKey = generateApiKey();
    users[userIndex].apiKey = apiKey;
    saveUsers(users);

    return {
        success: true,
        message: "Api key updated successfully",
        apiKey: apiKey
    }
}


