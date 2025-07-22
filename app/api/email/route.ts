import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Email from "../../../models/Email";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await connectDB();

    const newEmail = await Email.create({ name, email, message });

    return NextResponse.json(
      { message: "Email sent", newEmail },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST /api/email error:", error.message, error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
