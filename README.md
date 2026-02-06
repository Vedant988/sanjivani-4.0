# Team Sanjivani 4.0 - Project Documentation

## Overview
Team Sanjivani 4.0 is a comprehensive web application designed to showcase agricultural machinery, team achievements, and facilitate engineer bookings. The project is built using a modern MERN stack (MongoDB, Express.js, React, Node.js) with TypeScript on the frontend and JavaScript on the backend.

## Project Structure

### Root Directory
- **`src/`**: Contains the frontend React application source code.
- **`server/`**: Contains the backend Node.js/Express API source code.
- **`public/`**: Static assets served by the frontend.
- **`scripts/`**: Utility scripts for development and maintenance.

### Backend (`server/`)
The backend is a RESTful API that handles data persistence, authentication, and business logic.

#### Key Directories:
- **`config/`**: Configuration files (e.g., database connection).
- **`controllers/`**: Request handlers containing business logic for each route.
- **`middleware/`**: Express middleware for authentication, validation, error handling, and security.
- **`models/`**: Mongoose schemas defining the data structure.
- **`routes/`**: API route definitions mapping endpoints to controllers.
- **`scripts/`**: Backend-specific utility scripts (e.g., backup verification).

#### Key Files:
- **`server.js`**: The entry point of the backend application. Initializes the server, middleware, and database connection.
- **`.env`**: Environment variables (not committed to version control).

### Frontend (`src/`)
The frontend is a React application built with Vite and TypeScript, using Tailwind CSS for styling and Shadcn UI for components.

#### Key Directories:
- **`components/`**: Reusable UI components.
  - **`ui/`**: Shadcn UI primitive components.
  - **`layout/`**: Layout components like Navbar and Footer.
- **`pages/`**: Top-level page components corresponding to routes.
- **`lib/`**: Utility functions and API clients.
- **`hooks/`**: Custom React hooks.
- **`assets/`**: Images and other static resources.

#### Key Files:
- **`main.tsx`**: The entry point of the React application.
- **`App.tsx`**: The main application component setting up routing.

## Setup & Installation

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas Account (for production) or local MongoDB

### Installation
1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd "Sanjivani 4.0"
    ```

2.  **Install Frontend Dependencies**:
    ```bash
    npm install
    ```

3.  **Install Backend Dependencies**:
    ```bash
    cd server
    npm install
    ```

4.  **Environment Configuration**:
    - Create a `.env` file in the `server/` directory based on `.env.example`.
    - Configure `MONGODB_URI`, `JWT_SECRET`, and other variables.

### Running the Application

- **Development**:
    - Frontend: `npm run dev` (starts Vite server on port 5173)
    - Backend: `cd server && npm run dev` (starts Express server on port 5000)

- **Production**:
    - See `server/PRODUCTION_SETUP.md` for detailed deployment instructions.

## API Documentation

The backend exposes the following RESTful endpoints:

### Authentication (Admin)
- `POST /api/admin/login`: Authenticate admin user.
- `POST /api/admin/logout`: Log out admin user.
- `GET /api/admin/me`: Get current admin status.

### Products
- `GET /api/products`: List all products.
- `GET /api/products/:id`: Get product details.
- `POST /api/products`: Create a product (Admin only).
- `PUT /api/products/:id`: Update a product (Admin only).
- `DELETE /api/products/:id`: Delete a product (Admin only).

### Team
- `GET /api/team`: List team members.
- `POST /api/team`: Add team member (Admin only).
... (similar for other resources)

## Security Features
- **Authentication**: JWT-based auth with httpOnly cookies.
- **Validation**: Input validation using `express-validator`.
- **Sanitization**: XSS protection via input sanitization.
- **Headers**: Secure HTTP headers using `helmet`.
- **Rate Limiting**: Protection against brute-force and DDoS attacks.
- **Monitoring**: Sentry integration for error tracking.

## Contributing
1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## Technologies Used

### Frontend
- **React**: UI Library
- **TypeScript**: Static Typing
- **Vite**: Build Tool
- **Tailwind CSS**: Styling
- **Shadcn UI**: Component Library
- **Sentry**: Error Monitoring

### Backend
- **Node.js**: Runtime Environment
- **Express.js**: Web Framework
- **MongoDB**: Database
- **Mongoose**: ODM
- **JWT**: Authentication
- **Helmet**: Security Headers

## Deployment

For detailed production deployment instructions, please refer to `server/PRODUCTION_SETUP.md`.

### Frontend Deployment
The frontend can be deployed to any static site host (Vercel, Netlify, etc.):
```bash
npm run build
```
This generates a `dist` folder which can be served statically.

### Backend Deployment
The backend requires a Node.js environment (AWS EC2, DigitalOcean, Heroku, Render).
```bash
cd server
npm start
```
Ensure all environment variables are set in the production environment.
