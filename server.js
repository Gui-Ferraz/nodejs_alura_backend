import express from "express";
import routes from "./src/routes/posts_routes.js"

const app = express();

/*
* express.static is used to serve static files.
* The argument "uploads" specifies the folder to serve files from.
* In this case, the server will look for files in the uploads directory relative to the project's root.
*/
app.use(express.static("uploads"));

routes(app);

app.listen(3000, () => {
    console.log("Server listening...");
});
