// src/server/db.js
import mongoose from "mongoose";

// const MONGO_URI = "mongodb://localhost:27017/urlshortener"; // DEBUG: local mongoDB

export const connectDB = async () => {
    try {
        // await mongoose.connect(MONGO_URI); // DEBUG: local mongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};