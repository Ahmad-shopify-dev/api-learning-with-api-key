import { createApiKey } from "../services/apikey.generate.service.js";


export const generateApiKeyController = (req, res) => {

    const { email } = req.body;

    if(!email) {
        return res.status(400).json({
            success: false,
            message: "Email required to generate api key.",
            apiKey: null
        })
    }

    const apiKeyData = createApiKey(email);

    if(!apiKeyData.success) {
        return res.status(400).json({
          success: apiKeyData.success,
          message: apiKeyData.message,
          apiKey: apiKeyData.apiKey,
        });
    }

    res.status(200).json({
        success: true,
        message: "API Key updated successfully.",
        apiKey: apiKeyData.apiKey,
        links: [
            {
                rel: "sign in",
                method: "POST",
                href: "/api/sign-in"
            },
            {
                rel: "books",
                method: "GET",
                href: "/api/books"
            }
        ]
    })
};

