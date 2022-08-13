import { createError } from "../error.js";
import Comment from "../models/Comment.js";
import Video from "../models/Video.js";
export const addComment = async (req, res, next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const savedComments = await newComment.save();
    res.status(200).json(savedComments);
  } catch (error) {
    next(error);
  }
};
export const getComment = async (req, res, next) => {
  try {
    const comment = await Comment.find({ videoId: req.params.videoId });
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};
export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(res.params.id);
    const video = await Video.findById(res.params.id);
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("Comment is deleted sucessfully");
    } else {
      return next(
        createError(403, "You do not have permission to delete the comment")
      );
    }
  } catch (error) {
    next(error);
  }
};
