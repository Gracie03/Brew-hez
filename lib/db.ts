


import mongoose from "mongoose";

const MONGO_URI = process.env.LOCAL_MONGODB_URI as string;

if (!MONGO_URI) {
  throw new Error("Please define the LOCAL_MONGODB_URI environment variable");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI);
    cached.conn = await cached.promise;
  }

  return cached.conn;
}

export default connectDB;
