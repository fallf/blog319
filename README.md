# BookyLooky - Simple Blog Application

Welcome to **BookyLooky**, a Node.js-powered blog application where users can explore captivating stories, add reviews, and interact with a sleek admin dashboard.

## Table of Contents

- [About the Project](#about-the-project)
- [Run links](#run-links)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## About the Project

BookyLooky allows users to browse Book review, search for content,
An admin panel provides control for managing posts and users securely.

---

## Run links

- **MainBlog** : http://localhost:5005/
- **UserPanel**: http://localhost:5005/admin
- **About**:http://localhost:5005/about
- **Contact**:http://localhost:5005/contact

---

## Features

- User authentication and secure session management
- Admin dashboard to manage posts and users
- Ability to create, edit, delete, and view blog posts (go to : http://localhost:5005/admin )
- Pagination for seamless browsing
- Search functionality for posts
- Dynamic templates with EJS for a responsive UI

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript Templates)
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT) & bcrypt
- **Middleware**: connect-mongo, express-session, cookie-parser

---

### 1. Post Model

Stores blog post details.
