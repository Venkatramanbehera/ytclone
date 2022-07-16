import express from "express";
import {
  addVideo,
  deleteVideo,
  getVideo,
  updateVideo,
} from "../controllers/video.js";
import { verfiyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verfiyToken, addVideo);
router.put("/:id", verfiyToken, updateVideo);
router.delete("/:id", verfiyToken, deleteVideo);
router.get("/find/:id", verfiyToken, getVideo);

export default router;
