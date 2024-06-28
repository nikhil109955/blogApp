import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createComment,
  deleteComment,
  editComment,
  getPostComments,
  getcomments,
  likeComment,
} from '../controllers/comment.controller.js';

const router = express.Router();

// Route for creating a comment
router.post('/comments', verifyToken, createComment);

// Route for getting comments of a specific post
router.get('/comments/post/:postId', getPostComments);

// Route for liking/unliking a comment
router.put('/comments/:commentId/like', verifyToken, likeComment);

// Route for editing a comment
router.put('/comments/:commentId', verifyToken, editComment);

// Route for deleting a comment
router.delete('/comments/:commentId', verifyToken, deleteComment);

// Route for getting all comments (admin only)
router.get('/comments', verifyToken, getcomments);

export default router;
