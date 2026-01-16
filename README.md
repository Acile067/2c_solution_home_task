# 2c Solution – GraphQL API Server

This project is a simple GraphQL API built with Apollo Server and Prisma, using SQLite as the database.  
It supports basic CRUD operations for users and can be run either locally or via Docker.

## Built using

- &nbsp;<img src="https://www.vectorlogo.zone/logos/apollographql/apollographql-icon.svg" align="center" width="20" height="20"/> <a href="https://www.apollographql.com/docs/apollo-server">Apollo Server 5 - GraphQL Server</a>
- &nbsp;<img src="https://raw.githubusercontent.com/prisma/presskit/main/Assets/Prisma-LightSymbol.svg" align="center" width="20" height="20"/> <a href="https://www.prisma.io/docs/orm/overview/databases/sqlite">Prisma 7.2 - ORM (SQLite adapter)</a>
- &nbsp;<img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" align="center" width="28" height="28"/> <a href="https://www.docker.com">Docker</a>

## Installation:

To run this project, make sure you have the following installed:

- Node.js (v25.2.1+): [Download and install Node.js](https://nodejs.org/)
- nmp, npx (v11.7.0+)
- Docker Desktop (optional): [Download and install Docker Desktop](https://www.docker.com/products/docker-desktop/)

## How to run:

<details>
  <summary>Running with Docker</summary>

The easiest way to run the application is by using Docker

1. **Clone the project**:

   Clone the repository and navigate to the 2c_solution_home_task/server project directory:

   ```bash
   git clone https://github.com/Acile067/2c_solution_home_task.git
   cd 2c_solution_home_task/server
   ```

2. **Build and start the container**:

   ```bash
   docker-compose up --build
   ```

3. **Server will be available at**:

   ```bash
   http://localhost:4000
   ```

</details>

<details>
  <summary>Running Locally</summary>

Alternatively, you can run the project locally.

1. **Clone the project**:

   Clone the repository and navigate to the 2c_solution_home_task/server project directory:

   ```bash
   git clone https://github.com/Acile067/2c_solution_home_task.git
   cd 2c_solution_home_task/server
   ```

2. **Install dependencies**:

   ```bash
   npm i
   ```

3. **Environment Setup**:

   Create a `.env` file based on the example: <a href="https://github.com/Acile067/2c_solution_home_task/blob/master/server/.env.example">.env.example</a>

4. **Generate Prisma Client**:

   ```bash
   npx prisma generate
   ```

5. **Run database migrations**:

   ```bash
   npx prisma migrate deploy
   ```

6. **Start the server**:

   ```bash
   npm start
   ```

7. **Server will be available at**:

   ```bash
   http://localhost:4000
   ```

</details>
