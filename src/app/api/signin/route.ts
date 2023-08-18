import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({
        error: "Please send all inputs to register user",
        status: 400,
      });
    }

    await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    return NextResponse.json({ message: "User has succesfully created." });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
