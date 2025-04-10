# Bookstore Project

This README provides instructions to set up the Bookstore project locally, including both the frontend and backend, using Docker for MongoDB.

## Prerequisites

- [Docker](https://www.docker.com/) installed on your machine.
- [Node.js](https://nodejs.org/) installed on your machine (version 16 or higher is recommended).

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/mahe-gi/bookstore.git

cd bookstore

```

### 2. Build and Start Docker Containers

- Spin up a MongoDB instance using docker

```bash
docker build -t your_img_tag_name .
```

```bash
docker run -p 27017:27017 your_img_tag_name
```

### 3. Configure Environment Variables

```bash
cd backend
```

Create a `.env` and add below env variables

```
PORT = 3000
MONGODB_URL ="mongodb://localhost:27017/database_name"
```

`or`

copy `.env.example` to `.env`

```bash
cp .env.example .env
```

### 4. Start the backend server.

```bash
cd backend
```

```bash
npm install && npm start
```

- Start the frontend application.

```bash
cd frontend
```

```bash
npm install && npm run dev
```

### 5. Access the Application

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend : [http://localhost:3000](http://localhost:3000)

### 5. Stopping the Containers

To stop the running containers, use:

```bash
docker ps
```

```bash
docker kill container_id
```
