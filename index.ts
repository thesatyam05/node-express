import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

configDotenv();

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ success: true, message: "OK", uptime: process.uptime() });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
