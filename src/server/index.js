import express from "express";
import cors from "cors";
import shortenRoute from "./routes/shorten.js";
import redirectRoute from "./routes/redirect.js";
import { connectDB } from "./db.js";

const app = express();
const PORT = 3000;

// in-memory database
// const urlDatabase = {}; //code -> longURL
// const longURLToCode = {}; // longURL -> code

await connectDB(); // connect before routes are used

app.use(cors());
app.use(express.json());

app.use("/shorten", shortenRoute()); // POST /shorten
app.use("/", redirectRoute()); // GET /:code

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));