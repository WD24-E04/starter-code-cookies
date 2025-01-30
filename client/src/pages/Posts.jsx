import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import AdminPosts from "../components/AdminPosts";
import "../styles/posts.css";

const Posts = () => {
  const handleAddPost = async () => {};

  return (
    <div className="posts-container">
      <h2>New Post</h2>
      <PostForm onSubmit={handleAddPost} />
      <PostList title="Your Posts" />
      <AdminPosts />
    </div>
  );
};

export default Posts;
