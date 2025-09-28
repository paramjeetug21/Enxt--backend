
Backend

This is the backend for a web application built with NestJS, Sequelize, and PostgreSQL. It provides RESTful APIs for user management, authentication, and data handling.

Features

User registration and login with JWT authentication

Role-based access (admin, user)

Profile management (name, email, password, profile photo)

Database interaction using Sequelize and PostgreSQL

File uploads using Multer

Tech Stack

Framework: NestJS

Database: PostgreSQL

ORM: Sequelize (sequelize-typescript)

Authentication: JWT

File Uploads: Multer

Setup & Installation

Clone the repository

git clone <repo-url>
cd backend


Install dependencies

npm install


Configure environment variables (.env)

PORT=3000
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=your_password
DATABASE_NAME=your_database
JWT_SECRET=your_jwt_secret


Start the server

npm run start:dev


Server runs at http://localhost:3000

API Endpoints
Method	Endpoint	Description
POST	/user/signup	Register a new user
POST	/user/login	Login and get JWT token
GET	/user	Get user details (auth req.)


JWT token required for protected routes

Multer is used for handling file uploads
