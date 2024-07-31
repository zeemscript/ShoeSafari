import { MongoClient } from "mongodb";

const uri = process.env.MONGO_DB_URI;
if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}



let client;
let clientPromise;

client = new MongoClient(uri);
clientPromise = client.connect();

export default clientPromise;
