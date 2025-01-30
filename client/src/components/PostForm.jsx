import React, { useState } from "react";
import "../styles/postForm.css";

const PostForm = () => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <textarea
        rows="3"
        value={content}
        className="post-textarea"
        placeholder="Write your post..."
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="post-button">
        Add Post
      </button>
    </form>
  );
};

export default PostForm;
