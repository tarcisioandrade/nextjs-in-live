import { Post } from "@prisma/client";

export type PostsUser = Post & {
  User: {
    email: string
  }
}