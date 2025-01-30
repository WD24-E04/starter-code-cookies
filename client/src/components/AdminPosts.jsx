import React from "react";
import PostList from "./PostList";

const AdminPosts = () => {
  const handleFetchAllPosts = async () => {};

  return (
    <div className="admin-posts-container">
      <button onClick={handleFetchAllPosts} className="fetch-posts-button">
        Show All Posts
      </button>
      <PostList title="All Posts" />
    </div>
  );
};

export default AdminPosts;
