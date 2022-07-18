import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getVideo,
  random,
  subs,
  trend,
  updateVideo,
} from "../controllers/video.js";
import { verfiyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verfiyToken, addVideo);
router.put("/:id", verfiyToken, updateVideo);
router.delete("/:id", verfiyToken, deleteVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/subs", verfiyToken, subs);

export default router;
