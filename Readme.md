# Web-app-taskManager

This is a simple backend project made using Node.js, Express, and MongoDB.
It includes User Authentication (Register, Login, Logout) and Task CRUD operations.

# Features
## User Features
- Register user

- Login user

- Logout user

- Password hashing using bcrypt

- JWT token for authentication

## Task Features
- Create Task

- Get All Tasks

- Get Single Task

- Update Task

- Delete Task

## Each task has:
- Title

- Description

- status (Pending, In-Progress, Completed)

# Tech Used
- Node.js

- Express.js

- MongoDB (Mongoose)

- JWT (jsonwebtoken)

- bcryptjs

- dotenv

- CORS

# How to Run
1. Clone the repo  
2. Install dependencies  
3. Run the app 

```js
git clone https://github.com/nishitk7417/web-app-backend.git
cd web-app-backend 
npm run dev
```



# API Endpoints
## Route for user
```js
//register
POST/api/v1/users/register

//login
POST/api/v1/users/login

//logout
POST/api/v1/users/logout

//currentUser
GET/api/v1/users/currentUser

//updateInfo
PUT/api/v1/users/updateInfo
```

## Task Routes (Protected)
Requires JWT token

```js
//create task
POST/api/v1/task/

//get task
GET/api/v1/task/

//update task
PUT/api/v1/task/:id

//delete task 
DELETE/api/v1/task/:id
```

# Models
## User Model

- name

- email

- password

## Task Model

- title

- description

- status


# Summary
This backend project provides simple authentication and task management features.
It can be used for learning or small full-stack projects.