import express from "express";
import { createPost, getAllPosts } from "../controller/postsControllers.js";
import restrictTo from "../middleware/checkRole.js";

const router = express.Router();

router.route("/").post(createPost).get(restrictTo("admin"), getAllPosts);
/* 
  - In server.js, the checkToken middleware is called before this router is used, ensuring it runs before createPost and getAllPosts.
  - Only registered users with the admin role are allowed to getAllPosts.
*/
export default router;
