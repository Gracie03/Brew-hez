// app/api/order/route.ts
import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Order from "../../../models/Order";

export async function POST(req: Request) {
  try {
    const { coffee_type, cost, name, phone, address } = await req.json();

    if (!coffee_type || !cost || !name || !phone || !address) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await connectDB();

    const newOrder = await Order.create({
      coffee_type,
      cost,
      name,
      phone,
      address,
    });

    return NextResponse.json(
      { message: "Order placed successfully", newOrder },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST /api/order error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
