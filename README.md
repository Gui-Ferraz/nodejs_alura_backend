# Social Media Prototype - Node.js Back-End

_This project is part of an [Alura's](https://www.alura.com.br/) back-end immersion program._

This is the back-end service for a social media prototype built using **Node.js**. It provides an API for storing and managing image files as well as storing information in a **MongoDB Atlas** database, and generating image descriptions using the **Google Gemini API**. The project is designed to simulate the back-end operations of a social media platform, integrating a local server and a remote database, and AI-driven image description capabilities.

## Features
- **Express**: used to serve image files and create the API routes.

- **MongoDB Atlas**: Stores image information.

- **Google Gemini API**: Generates automatic descriptions for uploaded images.

- **API Integration**: Connects to local server with the MongoDB database and Google Gemini API to handle data storage and retrieval.

## Getting Started

Follow instrunctions below to set up and run the project.

### Prerequisites

- **Node.js**: Ensude Node.js is installed on your machine.

- **MongoDB Atlas Account**: Set up a MongoDB Atlas account and create a cluster.

/ **Google API Key**: Obtain an API key with access to Google Gemini API.

### Intallation

1. Clone the repository:
    `git clone <repository-url>`

2. Navigate to the project directory:
    `cd <project-folder>`

3. Install dependencies
    `npm install`

4. Set up environment variables:
    - Create a **.env** file in the root directory.
    
    - Add the following variables:
    
    ```
    CONNECTION_STRING = <your-mongodb-atlas-connection-string>
    GEMINI_API_KEY = <your-gemini-api-key>
    ```

## Usage

### Starting the server

`npm run dev`

### API Endpoints

| HTTP Method   |   Endpoint    |   Description                                         |
|---------------|---------------|-------------------------------------------------------|
| `GET`         | `/posts`      | Shows all images                                      |
| `POST`        | `/posts`      | Insert a post's object to the database                |
| `POST`        | `/upload`     | Uploads an image to the server                        |
| `PUT`         | `/upload/:id` | Update image's description and URL in the database    |

## File Structure

```
nodejs_alura_backend/
├── src/
│   ├── config          # Basic configuration for MongoDB connection
│   ├── controllers     # Handles business logic for API routes
│   ├── models          # MongoDB schemes and models
│   ├── routes          # API route handlers
│   └── services        # Google Gemini API configuration
├── uploads/            # Stores uploaded image files
├── .env                # Environment variables
├── package.json        # Project metadata and dependencies
└── server.js           # Main server file
```

## Technologies Used

- **Node.js**: Server runtime.

- **Express**: Web framework.

- **Multer**: Middleware for handling image uploads.

- **MongoDB Atlas**: Database service.

- **Google Gemini API**: Generates descriptions for images using AI.

- **dotenv**: Manages environment variables.

- **CORS**: Enables secure front-end and back-end integration by configuring cross-origin resource sharing.

### Future improvements
- Implement DELETE functionality.