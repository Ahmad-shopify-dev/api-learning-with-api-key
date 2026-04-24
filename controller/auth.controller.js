
import { loginHandle } from "../services/auth.service.js";

export const signInUser = (req, res) => {
    
    const { email, password } = req.body;
    
    if(!(email || password)) {
        return res.status(400).json({
            success: false,
            message: "Invalid E-mail or password",
            data: null
        })
    }

    const existUser = loginHandle(email, password);

    if(!existUser.success) {
        return res.status(401).json({
            success: existUser.success,
            message: existUser.message,
            apiKey: existUser.apiKey
        })
    }

    res.status(200).json({
      success: existUser.success,
      message: existUser.message,
      apiKey: existUser.apiKey,
      links: [
        {
            rel: "generate-api-key",
            method: "POST",
            href: '/api/generate-api-key'
        },
        {
            rel: 'get-books',
            method: 'GET',
            href: '/api/books'
        }
      ]
    });
}



