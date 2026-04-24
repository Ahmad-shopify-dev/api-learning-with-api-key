import { getUsers } from "../config/db.config.js"


export const loginHandle = (email, password) => {
    const users = getUsers();

    const user = users.find(user => user.email === email && user.password == password);

    if(!user) {
        return {
            success: false,
            message: "Invalid user",
            apiKey: null,
            user: null
        }
    }

    return {
        success: true,
        message: "User is found",
        apiKey: user.apiKey,
        user: user
    }
}


