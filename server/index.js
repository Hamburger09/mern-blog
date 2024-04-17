import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config();

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Database connection established")
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error(error));

  app.use("/api/user", userRoutes)
  app.use("/api/auth", authRoutes)




