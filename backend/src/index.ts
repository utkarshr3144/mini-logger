import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import logRouter from "../src/routes/log.routes.js";
import { errorMiddleware } from "./middleware/error.middlware.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/logs", logRouter);

app.use(errorMiddleware);


app.listen(3000, () => {
    console.log("Server running on port 3000")
});