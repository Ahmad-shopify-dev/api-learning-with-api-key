
export const usageController = (req, res) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        message: "API usage statistics.",
        data: {
            usage: user.usage,
            links: [
                {
                    rel: "get books",
                    method: "GET",
                    href: "/api/books"
                }
            ]
        }
    })
}

