import mongoose, {Schema} from 'mongoose';

const taskSchema = new Schema({
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    }
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", taskSchema);