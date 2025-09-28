Perfect ✅ Here’s a ready-to-paste **README.md** for your NestJS project:

---

```markdown
# 🚀 NestJS Backend

A backend application built with [NestJS](https://nestjs.com/), PostgreSQL, and Sequelize ORM.  
It supports **user authentication**, **JWT**, and **file uploads with Multer**.

---

## 📌 Features
- 🛠 Built with **NestJS** (modular, scalable)
- 🗄 **PostgreSQL + Sequelize ORM**
- 🔐 **JWT Authentication**
- 📂 **Multer** for file uploads
- ⚡ **CORS enabled** for frontend integration
- 🧩 Clean modular structure

---

## 🏗 Project Structure
```

src/
│── app.module.ts        # Root module
│── main.ts              # App entry point
│
├── user/                # User module
│   ├── user.controller.ts
│   ├── user.service.ts
│   ├── user.model.ts
│   └── dto/
│
├── auth/                # Auth module
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── strategies/
│
└── common/              # Shared utils (guards, interceptors, filters)

````

---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-nestjs-app.git
cd your-nestjs-app
````

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=1111
DB_NAME=MyBricks
JWT_SECRET=supersecretkey
```

### 4. Run PostgreSQL

Make sure PostgreSQL is running and database `MyBricks` exists.

### 5. Run the app

```bash
# development
npm run start:dev

# production
npm run start:prod
```

---

## 📡 API Endpoints

### User

* `POST /user/signup` → Create user (with image upload)
* `GET /user` → Get logged-in user (JWT required)

### Auth

* `POST /auth/login` → Login with email & password

---

## 📂 File Uploads

* Multer stores uploaded files in `/uploads` folder.
* Serve files statically:

```ts
// main.ts
import * as express from 'express';
app.use('/uploads', express.static('uploads'));
```

Access uploaded files at:

```
http://localhost:3000/uploads/<filename>.jpg
```

---

## ✅ Example Signup Request

```bash
curl -X POST http://localhost:3000/user/signup \
  -H "Content-Type: multipart/form-data" \
  -F "name=Paramjeet" \
  -F "email=paramjeet201200@gmail.com" \
  -F "password=123456" \
  -F "panNumber=85251652" \
  -F "photo=@/path/to/photo.jpg"
```

---

## 🧑‍💻 Development Notes

* Use `@nestjs/config` for env variables
* Use `bcrypt` for password hashing
* Validate inputs with `class-validator`
* Keep DTOs inside `dto/` folder

```

---

Do you also want me to **add a Dockerfile + docker-compose** section in this README so you can run both **NestJS + PostgreSQL** with a single command?
```
