🖥 Backend

This is the backend for a web application built with NestJS, Sequelize, and PostgreSQL.
It provides RESTful APIs for user management, authentication, and data handling.

✨ Features

🔐 User Authentication: Registration and login with JWT

👥 Role-Based Access: Supports admin and user roles

📝 Profile Management: Manage name, email, password, and profile photo

🗄 Database Integration: PostgreSQL with Sequelize ORM

📁 File Uploads: Handle profile photos using Multer

🛠 Tech Stack

Framework: NestJS

Database: PostgreSQL

ORM: Sequelize (sequelize-typescript)

Authentication: JWT

File Uploads: Multer

🚀 Setup & Installation

Clone the repository

git clone <repo-url>
cd backend


Install dependencies

npm install



Start the server

npm run start:dev


Server runs at: http://localhost:3000

📡 API Endpoints
Method	Endpoint	Description
POST	/user/signup	Register a new user
POST	/user/login	Login and get JWT token
GET	/user	Get user details (auth req.)

⚠ Notes

JWT token required for protected routes

Multer is used for handling file uploads
