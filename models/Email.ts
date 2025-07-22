
import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Email || mongoose.model("Email", EmailSchema);
