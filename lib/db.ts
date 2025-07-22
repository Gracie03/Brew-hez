

import mongoose, { Mongoose } from "mongoose";

const MONGO_URI: string | undefined = process.env.LOCAL_MONGODB_URI;

if (!MONGO_URI) {
  throw new Error("Please define the LOCAL_MONGODB_URI environment variable");
}

interface MongooseGlobal extends Global {
  mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

const globalWithMongoose = globalThis as unknown as MongooseGlobal;

if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = { conn: null, promise: null };
}

async function connectDB(): Promise<Mongoose> {
  if (globalWithMongoose.mongoose.conn) return globalWithMongoose.mongoose.conn;

  if (!globalWithMongoose.mongoose.promise) {
    globalWithMongoose.mongoose.promise = mongoose.connect(MONGO_URI);
  }

  try {
    globalWithMongoose.mongoose.conn = await globalWithMongoose.mongoose
      .promise;
  } catch (error) {
    globalWithMongoose.mongoose.promise = null; // reset on failure
    throw error;
  }

  return globalWithMongoose.mongoose.conn;
}

export default connectDB;
