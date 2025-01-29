import express from "express";
import { PORT,MONGODB_URL } from "./config.js";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(MONGODB_URL).then(()=>{
    console.log("Connected to MongoDB");
    app.get("/",(_, res) => {
        res.status(200).json({
            msg: "Hello World"
        });
    });
    app.use("/api/books",bookRoutes);

    
}).catch((error)=>{
    console.log("Error connecting to MongoDB",error.message);
})

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})