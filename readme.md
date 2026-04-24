# 📚 Stack Library API

## 📖 Project Overview

**Stack Library API** is a RESTful API built using **Node.js** and **Express.js** that demonstrates modern backend development practices.

This project includes:

* API Key Authentication
* HATEOAS Implementation
* CRUD Operations
* Pagination
* Rate Limiting
* Logging
* Usage Tracking
* Modular Architecture
* Global Error Handling

This API simulates a **real-world production-ready backend system** using a dummy JSON-based database.

---

# 🚀 Features

## 🔐 Authentication

* Login-based access
* API Key generation
* Header-based API authentication

Header format:

```
x-api-key: stack_xxxxxxxxx
```

---

## 🔗 HATEOAS Support

After login, the API returns navigational links such as:

* Generate API Key
* Get Books
* Access Resources

---

## 📚 CRUD Operations

Supports:

* Create books
* Read books
* Pagination support
* Resource access control

---

## 📄 Pagination

Supported query parameters:

```
?page=1
&limit=5
```

Example:

```
GET /api/books?page=1&limit=5
```

---

## ⚡ Rate Limiting

Limits:

```
5 Requests per minute
```

Prevents:

* Server overload
* API abuse

---

## 🧾 Request Logging

Logs include:

* HTTP Method
* Route
* Status Code
* Response Time

---

## 📊 API Usage Tracking

Tracks:

* Request count
* Last used timestamp

Example:

```
"usage": {
    "requestCount": 12,
    "lastUsed": "2026-04-16T08:50:00Z"
}
```

---

## ❌ Global Error Handling

Centralized error responses.

Example:

```
{
  "success": false,
  "error": "Route not found"
}
```

---

# 🏗️ Folder Structure

```
project-root
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   ├── bookController.js
│   ├── usageController.js
│   └── docsController.js
│
├── middleware
│   ├── apiKeyMiddleware.js
│   ├── rateLimiter.js
│   ├── errorHandler.js
│
├── routes
│   ├── authRoutes.js
│   ├── bookRoutes.js
│   ├── usageRoutes.js
│   └── docsRoutes.js
│
├── data
│   ├── users.json
│   └── books.json
│
├── utils
│   └── generateApiKey.js
│
├── .env
├── app.js
├── package.json
└── README.md
```

---

# ⚙️ Installation Guide

## Step 1 — Clone Project

```
git clone <repository-url>
```

---

## Step 2 — Install Dependencies

```
npm install
```

---

## Step 3 — Create `.env` File

Example:

```
PORT=5000

API_KEY_HEADER=x-api-key

RATE_LIMIT_MAX=5

RATE_LIMIT_WINDOW=60000
```

---

## Step 4 — Start Server

```
npm start
```

or

```
node app.js
```

Server runs at:

```
http://localhost:5000
```

---

# 🔑 Authentication Flow

## Step 1 — Login

```
POST /api/login
```

Body:

```
{
  "email": "user@example.com",
  "password": "password"
}
```

Response:

```
{
  "success": true,
  "apiKey": "stack_xxxxx",
  "links": [...]
}
```

---

## Step 2 — Use API Key

Add header:

```
x-api-key: stack_xxxxx
```

Then access:

```
GET /api/books
```

---

# 📡 API Endpoints

---

## 🔐 Login User

```
POST /api/login
```

Body:

```
{
  "email": "user@example.com",
  "password": "password"
}
```

---

## 🔑 Generate API Key

```
POST /api/generate-api-key
```

---

## 📚 Get Books

```
GET /api/books
```

Optional:

```
?page=1
&limit=5
```

---

## ➕ Create Book

```
POST /api/books
```

Body:

```
{
  "title": "Book Title",
  "author": "Author Name"
}
```

---

## 📊 Get Usage Stats

```
GET /api/usage
```

---

## 📄 API Documentation

```
GET /api/docs
```

---

# 🛠️ Technologies Used

* Node.js
* Express.js
* UUID
* Morgan (Logger)
* Express Rate Limit
* dotenv
* JSON File Database

---

# 🎯 Learning Goals Achieved

This project demonstrates:

* RESTful API design
* API Key authentication
* HATEOAS implementation
* Middleware architecture
* Pagination logic
* Rate limiting
* Logging system
* Usage analytics
* Modular backend structure

---

# 📌 Future Improvements

Possible upgrades:

* Database Integration (MongoDB / PostgreSQL)
* JWT Authentication
* Swagger Documentation
* Role-Based Access Control
* API Versioning

---

# 👨‍💻 Author

StackWiseDev Developer

---

# 📜 License

This project is for learning and educational purposes.
