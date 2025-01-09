import mongoose, { Document, Schema } from "mongoose";

// Interface for Content Document
interface IContent extends Document {
  link?: string;
  title: string;
  description?: String;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const contentSchema = new Schema<IContent>(
  {
    link: {
      type: String,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Content = mongoose.model<IContent>("Content", contentSchema);

export default Content;
