import mongoose, { Document, Schema } from "mongoose";

interface ITag extends Document {
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

const tagSchema = new Schema<ITag>(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Tag = mongoose.model<ITag>("Tag", tagSchema);

export default Tag;
