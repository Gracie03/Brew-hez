// models/Order.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface Order extends Document {
  coffee_type: string;
  cost: number;
  name: string;
  phone: string;
  address: string;
}

const OrderSchema = new Schema<Order>(
  {
    coffee_type: { type: String, required: true },
    cost: { type: Number, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);

const OrderModel: Model<Order> =
  mongoose.models.Order || mongoose.model<Order>("Order", OrderSchema);

export default OrderModel;
