# 📚 Library Management API

A RESTful Library Management API built using **Node.js, Express.js, MongoDB Atlas, and Mongoose**.

This API allows users to manage books, library members, and book borrowing/returning operations. MongoDB Atlas is used to store the data permanently instead of storing it in local JavaScript arrays.

---

## 📌 Objective

The main objective of this project is to build a backend Library Management API that provides APIs for:

- Adding books
- Registering library members
- Borrowing books
- Returning books
- Viewing all books
- Viewing borrowed books
- Viewing all members
- Validating requests and handling errors

The project demonstrates basic **REST API development**, **MongoDB database operations**, and **Express.js routing**.

---

## 🚀 Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **Postman**
- **JavaScript**
- **dotenv**
- **CORS**

---

## 🗄️ Database

This project uses **MongoDB Atlas** as the database.

MongoDB Atlas is a cloud-based MongoDB service used to store library data.

The project contains the following main collections:

## API EndPoints

  | Method | Endpoint                        | Purpose            |
| ------ | ------------------------------- | ------------------ |
| `POST` | `/api/library/books`            | Add a new book     |
| `GET`  | `/api/library/books`            | Get all books      |
| `POST` | `/api/library/members`          | Register a member  |
| `GET`  | `/api/library/members`          | Get all members    |
| `POST` | `/api/library/borrow/:bookId`   | Borrow a book      |
| `PUT`  | `/api/library/return/:borrowId` | Return a book      |
| `GET`  | `/api/library/borrowed`         | Get borrowed books |


## 👨‍💻 Connect With Me

🔗 [Dhivakar R](https://www.linkedin.com/in/dhivakar--r/)
