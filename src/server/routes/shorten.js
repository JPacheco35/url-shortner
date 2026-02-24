import express from "express";
import Url from "../models/url.js";

// numbers + lowercase + uppercase letters == 62
const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Export a function that takes the DB objects
export default () => {
    const router = express.Router();

    router.post("/", async (req, res) => {
        const longURL = req.body.url;

        if (!longURL) return res.status(400).json({ error: "URL is required" });

        try {
            // Check if the long URL already exists in the database
            const existingUrl = await Url.findOne({ longURL });

            if (existingUrl) {
                return res.json({ shortCode: existingUrl.shortCode });
            }

            // Each URL entered gets a unique 6-char shortcode
            let shortCode = "";

            // Generate 6 random alphanumeric characters
            for (let i = 0; i < 6; i++) {
                const randChar = Math.floor(Math.random() * chars.length);
                shortCode = chars[randChar] + shortCode;
            }

            // Save to DB
            const newUrl = new Url({ shortCode, longURL });
            await newUrl.save();

            // Return data
            res.json({ shortCode });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Server error" });
        }
    });

    return router;
};