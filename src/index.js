import express from "express";
import cors from "cors";
import shortenRoute from "./routes/shorten.js";
import redirectRoute from "./routes/redirect.js";
import { connectDB } from "./db.js";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;

dotenv.config();
await connectDB(); // connect before routes are used

app.use(cors());
app.use(express.json());

app.use("/shorten", shortenRoute()); // POST /shorten
app.use("/", redirectRoute()); // GET /:code

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
export default app;