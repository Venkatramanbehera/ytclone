import express from "express";
import {
  addComment,
  deleteComment,
  getComment,
} from "../controllers/comment.js";
import { verfiyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verfiyToken, addComment);
router.get("/:videoId", getComment);
router.delete("/:id", verfiyToken, deleteComment);

export default router;
