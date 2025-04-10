import express from "express";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();



const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

console.log(process.env.MONGODB_URL);
console.log(process.env.PORT);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.get("/", (_, res) => {
      res.status(200).json({
        msg: "Hello World",
      });
    });
    app.use("/api/books", bookRoutes);
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error.message);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
