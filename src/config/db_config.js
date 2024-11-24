import { MongoClient} from 'mongodb';

export default async function conncetToBase(connectionString) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(connectionString);
        console.log("Connecting to Cluster Database...");
        await mongoClient.connect();
        console.log("Connected to MongoDB Atlas!");

        return mongoClient;
    } catch (exception) {
        console.error("Failed to connect to database!", exception);
        process.exit();
    }
}