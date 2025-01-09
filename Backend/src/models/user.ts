import mongoose, { Document, Schema } from "mongoose";

// Interface for User Document
interface IUser extends Document {
  username: string;
  password: string;
  shareLink?: boolean;
  content: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: [true, "Username has to be unique"],
      trim: true,
      minLength: [5, "Minimum length of the username has to be 5"],
      maxLength: [15, "Allowed maximum length has to be 15"],
    },
    password: {
      type: String,
      required: true,
      trim: true,
      select: false,
    },
    shareLink: {
      type: Boolean,
      default: true,
    },
    content: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Content", required: true },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
