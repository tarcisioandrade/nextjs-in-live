import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  const { title, description, subject } = await req.json();

  const user = await prisma.user.findFirst();

  if (!user) {
    return NextResponse.json({
      error: "User not found",
      status: 404,
    });
  }

  await prisma.post.create({
    data: {
      description,
      subject,
      title,
      authorId: user.id,
    },
  });

  revalidateTag("post-get");

  return NextResponse.json({ message: "Post succesfully added!" });
}

export async function GET() {
  const posts = await prisma.post.findMany({
    include: {
      User: {
        select: {
          email: true,
        },
      },
    },
  });

  return NextResponse.json(posts);
}
