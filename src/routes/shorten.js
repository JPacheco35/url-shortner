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

        // Duplicate check
        const existing = await Url.findOne({ longURL });
        if (existing) {
            return res.json({ shortCode: existing.shortCode });
        }

            // each URL entered gets unique 6 char shortcode
            let shortCode = "";

            // generate 6 random alphanumeric characters
            for (let i = 0; i < 6; i++) {
                const randChar = Math.floor(Math.random() * chars.length);
                shortCode = chars[randChar] + shortCode;
                // console.log("short: " + shortCode)
            }

        // Save to DB
        const newUrl = new Url({ shortCode, longURL });
        await newUrl.save();

        // return data
        res.json({ shortCode: shortCode });
    });

    return router;
};