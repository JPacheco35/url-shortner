// src/server/db.js
import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/urlshortener";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI); // clean, no deprecated options
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};