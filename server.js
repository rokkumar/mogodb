import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import mainRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = 5000;

// __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 🔥 MongoDB Atlas connection (FIXED)
mongoose.connect(
  "mongodb+srv://rohit08072005kumar_db_user:anish%40123@cluster0.agipxfh.mongodb.net/authDB?retryWrites=true&w=majority"
)
.then(() => {
  console.log("MongoDB Connected ✅");
})
.catch((err) => {
  console.log("MongoDB Error ❌", err.message);
});

// Routes
app.use("/", mainRoutes);

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
