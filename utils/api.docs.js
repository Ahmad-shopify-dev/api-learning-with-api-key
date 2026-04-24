export const API_DOCS = {
  name: "Stack Library API",
  description:
    "A RESTful API built with Node.js and Express that demonstrates API Key authentication, HATEOAS navigation, rate limiting, logging, and usage tracking.",
  version: "1.0.0",
  baseUrl: "http://localhost:5000/api",
  authentication: {
    type: "API Key",
    headerName: "x-api-key",
    description:
      "Include your API key in request headers to access protected resources.",
  },
  features: [
    "API Key Authentication",

    "HATEOAS Navigation",

    "CRUD Operations",

    "Pagination Support",

    "Rate Limiting",

    "Request Logging",

    "Usage Tracking",

    "Centralized Error Handling",
  ],
  rateLimit: {
    window: "1 minute",

    maxRequests: 5,
  },
  pagination: {
    queryParams: [
      {
        name: "page",
        description: "Page number",
        example: 1,
      },

      {
        name: "limit",
        description: "Number of items per page",
        example: 5,
      },
    ],
  },

  endpoints: [
    {
      name: "Login User",

      method: "POST",

      path: "/api/login",

      description: "Authenticate user and receive API key with HATEOAS links.",

      body: {
        email: "user@example.com",

        password: "user_password",
      },
    },

    {
      name: "Generate API Key",

      method: "POST",

      path: "/api/generate-api-key",

      description: "Generate a new API key for authenticated user.",
    },

    {
      name: "Get All Books",

      method: "GET",

      path: "/api/books",

      description: "Retrieve paginated list of books.",

      queryParams: ["page", "limit"],
    },

    {
      name: "Create Book",

      method: "POST",

      path: "/api/books",

      description: "Create a new book record.",

      body: {
        title: "Book Title",

        author: "Author Name",
      },
    },

    {
      name: "Get Usage Stats",

      method: "GET",

      path: "/api/usage",

      description: "Get API usage statistics for current API key.",
    },
  ],

  createdBy: "Stack Developer",

  status: "Active",
};
