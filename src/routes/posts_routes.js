import express from "express";
import multer from "multer";
import cors from "cors";
import { listPosts, createNewPost, uploadImage, updateNewPost} from "../controllers/posts_controller.js";

// Defines the domains that this server allows to share its resources
const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

// This storage configuration is only for Windows file system
const storage = multer.diskStorage({ 
    destination: function(req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({dest:"./uploads", storage: storage});
//const upload = multer({storage: storage});

// Linux or MacOs uses a default storage configuration:
// const upload = multer({dest:"./upldoads"});

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));

    // HTTP requests treatments
    app.get("/posts", listPosts);
    app.post("/posts", createNewPost);
    app.post("/upload", upload.single("image"), uploadImage);
    app.put("/upload/:id", updateNewPost);
}

export default routes;