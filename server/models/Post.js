import { model, Schema } from "mongoose";

const postSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  content: String,
});

const Post = model("Post", postSchema);
export default Post;
