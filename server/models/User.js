import { model, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "user"],
    default: "user",
  },
});

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.__v;
  return obj;
};

const User = model("User", userSchema);
export default User;
