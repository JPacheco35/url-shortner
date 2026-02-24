import express from "express";
import Url from "../models/url.js";  // Add this import to fix the issue

// Export a function that takes the DB objects
export default () => {
    const router = express.Router();

    router.get("/:code", async (req, res) => {
        const code = req.params.code;

        try {
            const urlEntry = await Url.findOne({ shortCode: code });
            if (!urlEntry) return res.status(404).json({ error: "URL not found" });

            res.redirect(urlEntry.longURL);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Server error" });
        }
    });

    return router;
};