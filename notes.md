This document contains the most important notes I recorded during the project development.

# Node.js

Execute Node.js programs with: `node example.js`.

Note: Power Shell restricts the execution of certains commands for security reasons. Consider running the `npm` command in a different terminal, such as Command Prompt (cmd).

Run `npm init es6 -y` to initialize a Node.js project.

## Libraries and tools from NPM (Node Package Manager)

Use `npm install` to install all dependencies for a Node.js project.

- **Express**

    Is a lightweight and flexible framework. It provides tools and utilities to create web servers and APIs quickly and efficiently. With Express you can handle routing, middleware, HTTP requests and responses.

    `npm install express`

    In this project _Express_ is used to create a server that serves image files from a directory in the file system. 

- **Multer**

    Is a middleware used with Express to handle file uploads. It simplifies the process of acepting and processing files sent trhough HTPP requests, particularly in forms with multipart/from-data encoding.

    `npm install multer`

- **MongoDB**
    
    Is the driver for connecting to and interacting with MongoDB database.

    `npm install mongodb`

- **CORS**

    (Cross-Origin Resource Sharing) is a mechanism that allows a server to specify which origins (domains) are permitted to access its resources. The _cors_ middleware is commonly used with _Express_ to enable and configure CORS policies for APIs.

    `npm install cors`

- **DotEnv**

    Is a lightweight module that loads environment variables from a **.env** file into the **process.env** object in Node.js. This allows developers to securely manage configuration values, such as API keys, database credentials, or other sensistive information, outside the source code.

    `npm install dotenv`

## Scripts

In _package.json_ file you can set some scripts to execute commands. In this project the script identified by _dev_ is set to run: `node --watch --env-file=.env serverjs`. (_--watch_ flag enables automatic restar of the Node.js application whenever changes are detected in source files).

Run the _dev_ script using `npm run dev`.

## Javascript

### Arrow function
```javascript
(parameter) => {
    code block;
    ...
}
```

### Strict equality operator `===`
It compares two values for equality, but doesn't perform type conversion. Both the value and type must be the same for the comparison to return `true`.

### Arrays and objects
```javascript
const egarray = [
    {
        id: 1,
        description: "object 1",
        imageurl: "https://placecats.com/300/150"
    },
    {
        id: 2,
        description: "object 2",
        imageurl: "https://placecats.com/300/150"
    },
    {
        id: 3,
        description: "object 3",
        imageurl: "https://placecats.com/300/150"
    },
    {
        id: 4,
        description: "object 4",
        imageurl: "https://placecats.com/300/150"
    },
    {
        id: 5,
        description: "object 5",
        imageurl: "https://placecats.com/300/150"
    }
];
```

## The Model, Controller, Routes design

- **Model**: it represents the data structure and defines how data interacts with the database.

- **Controller**: handles the business logic of the application.

- **Routes**: defines the endpoints or URLs of the application and links them to the appropriate controllers.

# MongoDB

The database is managed from the MongoDB Atlas website.

Database >> Clusters >> Collections

Security >> Network Access >> IP Access List >> Edit >> ALLOW ACCESS FROM ANYWHERE

# Postman

Is a platform and API development tool used to design, test and document APIs. Postman provides an intuitive interface to send requests, view responses, and debug issues.

### Local tests

- **GET** request (all items)
    
    URL: http://localhost:3000/posts 
    
    Response expected: a `.json` file that contains all data from MongoDB database.

    Response example:

    ```
    [
        {
            "_id": "673e3fbb660892cb118288aa",
            "description": "Testing",
            "imageUrl": "https://placecats.com/300/150",
            "alt": "image description"
        },
        {
            "_id": "673e4073660892cb118288ab",
            "description": "Gato 2",
            "imageUrl": "https://placecats.com/300/150",
            "alt": "image description"
        },
    ]
    ```

- **GET** request (specific item)

    **{id}** is the item identifier in the database.

    URL: http://localhost:3000/{id} 

    Response expected: the item requested (in this project, an image).

- **POST** request (object)

    URL: http://localhost:3000/posts
    
    Body (JSON): an object according to the structure defined by project.

    Body example:
    ```
    {
        "description": "Testing",
        "imageUrl": "https://placecats.com/300/200",
        "alt": "image description"
    }
    ```

    Response expected: ACK status and item ID.

    Response example:
    ```
    {
        "acknowledged": true,
        "insertedId": "6742aa6010a075e84a284cc5"
    }
    ```

- **POST** request (file)

    URL: http://localhost:3000/upload

    Body (from-data): in this project, key is named as **image** and its type is _file_. Select a _png_ image for uploading.

    Response expected: ACK status and item ID.

    Response example:
    ```
    {
        "acknowledged": true,
        "insertedId": "6742ad1ec59379eedb172943"
    }
    ```

- **PUT** request

    **{id}** is the item identifier in the database.

    URL: http://localhost:3000/upload/{id}

    Body (JSON): an object that contains only the _alt_ key and its value.

    Response expected: ACK status.

    Response example:
    ```
    {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    }
    ```

# Google Cloud

_services.sh_ is a script that execute certain Google Cloud services.

Deploying project to Google Cloud:

First clone the project repository using `git clone https://github.com/Gui-Ferraz/project-name`. Then go to project directory (`cd project-name`) and run `bash services.sh`.

Considering that `.env` file must be included in `.gitignore`, create a new `.env` file with the same information from the file in local project. Removing the `.gitignore` file in cloud's environment is highly recommended.

Now the project is in a new environment, so you must run `npm install`. Finally, run `gcloud run deploy --source . --port=3000`.

The command ouput contains a Service URL refering to your program. Now it is running in the cloud.