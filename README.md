**Server-side with Node.js, Express.js, and Sequelize**

Welcome to the repository for the server-side codebase of a Blog Website, developed using Node.js, Express.js, and Sequelize. This project provides the backend foundation for creating and managing blog content. It incorporates modern technologies such as bcrypt.js, cors, dotenv, jsonwebtoken, and Sequelize ORM. The server-side architecture ensures efficient handling of requests, authentication, and interaction with the database. The project is thoroughly tested using Jest. The repository follows a structured architecture, with distinct folders serving specific purposes.

**Folder Structure:**

- **bin**: Contains executable scripts and server startup configuration.
- **config**: Holds configuration files for various application aspects, such as database settings and authentication configurations.
- **controllers**: Manages application logic. Each route's functionality is centralized within its corresponding controller.
- **data**: Serves as a data storage location, including database files and JSON data.
- **helpers**: Houses utility functions and helper scripts utilized throughout the application.
- **middlewares**: Contains middleware functions responsible for processing requests before they reach the route's controller.
- **migrations**: Stores database migration scripts, ensuring version control of the database schema.
- **models**: Defines data models using Sequelize ORM, specifying data structure and behavior.
- **routes**: Defines routes using Express.js routing. Each route maps to a specific controller.
- **seeders**: Contains scripts for populating the database with initial data.
- **seeds**: Provides data samples or initial data for database seeding.
- **test**: Encompasses unit and integration tests written with Jest to guarantee application feature correctness.

**Technologies Used:**

- **Node.js**: JavaScript runtime for server-side application development.
- **Express.js**: Fast, unopinionated web framework for building robust APIs.
- **Sequelize**: Promise-based Node.js ORM for PostgreSQL and other databases, facilitating data manipulation and database management.
- **bcrypt.js**: Library for secure password hashing and management.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: Zero-dependency module for loading environment variables from a `.env` file.
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens (JWT) for authentication.
- **Google Auth**: Integration of Google OAuth for secure user authentication.
- **Jest**: Popular JavaScript testing framework for unit and integration testing.
- **PostgreSQL**: Relational database system used for data storage.

**API Documentation:**

For detailed information about the available APIs, routes, and their functionalities, please refer to the [`api-docs.md`](api-docs.md) file. This comprehensive documentation will guide you on effectively using and interacting with the server's endpoints.

**Installation and Running the Project:**

1. **Clone the Repository:**
   ```
   git clone https://github.com/your-username/your-project.git
   ```
   Replace `your-username` with your GitHub username and `your-project` with the project's repository name.

2. **Navigate to the Project Directory:**
   ```
   cd your-project
   ```

3. **Install Dependencies:**
   ```
   npm install
   ```

4. **Configure Environment Variables:**
   - Create a `.env` file in the root directory.
   - Fill in the necessary environment variables as described in `.env.example`.
  
6. **Database Configuration:**
   In this case I use postgresql and orm sequlize. For more clarity, read the documentation https://www.postgresql.org/ and https://sequelize.org/

5. **Run Database Migration:**
   ```
   npx sequelize-cli db:migrate
   ```

6. **Seed Initial Data (Optional):**
   ```
   npx sequelize-cli db:seed:all
   ```

7. **Start the Server:**
   ```
   npm start
   ```
   The server will start running based on the script in the `bin/www` file.

8. **Run Tests:**
   ```
   npm test
   ```
   This will run unit and integration tests using Jest to ensure the functionality of the application.

9. **Access API Documentation:**
   Open the [`api-docs.md`](api-docs.md) file to understand the available endpoints, request payloads, and responses.

You're now ready to explore the project, contribute, and build feature-rich web applications using the Node.js, Express.js, and Sequelize stack with a PostgreSQL database.
