import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected To DB");
    })
    .catch((e) => {
      throw e;
    });
};

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/comment", commentRoutes);

// handling error globally
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Some thing went wrong";
  return res.status(status).json({
    sucess: false,
    status,
    message,
  });
});

app.listen(8000, () => {
  connect();
  console.log("connected");
});
