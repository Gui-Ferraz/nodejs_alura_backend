import "dotenv/config";
import { ObjectId } from "mongodb";
import conncetToBase from "../config/db_config.js";

const connection = await conncetToBase(process.env.CONNECTION_STRING);

export async function getAllPosts() {
    const db = connection.db("nodejs_alura");
    const collection = db.collection("posts");
    return collection.find().toArray();
}

export async function createPost(postObject) {
    const db = connection.db("nodejs_alura");
    const collection = db.collection("posts");
    return collection.insertOne(postObject);
}

export async function updatePost(id, postObject) {
    const db = connection.db("nodejs_alura");
    const collection = db.collection("posts");
    const objectId = ObjectId.createFromHexString(id);

    return collection.updateOne({_id: new ObjectId(objectId)}, {$set:postObject});
}