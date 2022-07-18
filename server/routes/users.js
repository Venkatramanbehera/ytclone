import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unSubscribe,
  update,
} from "../controllers/user.js";
import { verfiyToken } from "../verifyToken.js";

const router = express.Router();

// UPDATE A USER
router.put("/:id", verfiyToken, update);

// DELETE A USER
router.delete("/:id", verfiyToken, deleteUser);

// GET A USER
router.get("/find/:id", getUser);

// SUBSCRIBE A USER
router.put("/sub/:id", verfiyToken, subscribe);

// UNSUBSCRIBE A USER
router.post("/unsub/:id", verfiyToken, unSubscribe);

// LIKE A VIDEO
router.post("/like/:videoId", verfiyToken, like);

// DISLIKE A VIDEO
router.post("/dislike/:videoId", verfiyToken, dislike);

export default router;
