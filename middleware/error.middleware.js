export const errorHandler = (error, req, res, next) => {
    console.log("Global Error: ", error.message);

    res.status(error.status || 500).json({
        success: false,
        message: error.message || "Internal Server Error"
    })
}