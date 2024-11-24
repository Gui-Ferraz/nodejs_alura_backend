import fs from "fs";
import { getAllPosts, createPost, updatePost } from "../models/posts_model.js";
import generateDescriptionGemini from "../services/gemini_service.js";

export async function listPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);
}

export async function createNewPost(req, res) {
    const postObject = req.body;
    try {
        const post = await createPost(postObject);
        res.status(200).json(post);
    } catch (exception) {
        console.error(exception.message);
        res.status(500).json({"Error":"Failed creating new post."});
    }
}

export async function uploadImage(req, res) {
    const postObject = {
        description: "",
        imageUrl: req.file.originalname,
        alt: ""
    };
    try {
        const post = await createPost(postObject);
        const newImageName = `uploads/${post.insertedId}.png`;
        fs.renameSync(req.file.path, newImageName);
        res.status(200).json(post);
    } catch(exception) {
        console.error(exception.message);
        res.status(500).json({"Error": "Upload failed."});
    } 
}

export async function updateNewPost(req, res) {
    const id = req.params.id;
    const imageUrl = `http://localhost:3000/${id}.png`;
    
    try {
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
        const description = await generateDescriptionGemini(imageBuffer);

        const postObject = {
            description: description,
            imageUrl: imageUrl,
            alt: req.body.alt
        };

        const newPost = await updatePost(id, postObject);
        res.status(200).json(newPost);
    } catch(exception) {
        console.error(exception.message);
        res.status(500).json({"Error":"Item update failed."});
    }
}