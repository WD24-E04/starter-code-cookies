import Post from "../models/Post.js";

export const createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);

    res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      success: true,
      message: "Posts retrieved successfully",
      data: posts,
    });
  } catch (error) {
    next(error);
  }
};
