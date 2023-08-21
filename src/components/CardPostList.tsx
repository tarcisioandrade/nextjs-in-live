import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { truncateString } from "@/utils/truncateString";
import { PostsUser } from "@/types";

const getPosts = async (): Promise<PostsUser[]> => {
  const res = await fetch("http://localhost:3000/api/post", {
    next: {
      tags: ["post-get"],
    },
  });
  const posts = await res.json();

  return posts;
};

const CardPostList = async () => {
  const posts = await getPosts();

  if (posts.length === 0)
    return (
      <p className="text-3xl text-gray-500 mt-24">Nenhum post disponivel.</p>
    );
  return (
    <div className="mt-12 grid grid-cols-3 gap-4">
      {posts.map(({ id, title, subject, description, created_at, User }) => (
        <Card key={id} className="relative">
          <CardHeader className="min-h-[252px]">
            <CardTitle>
              <span>{title}</span>
            </CardTitle>
            <p>{subject}</p>
            <CardDescription>
              {truncateString(description, 228)}
            </CardDescription>
          </CardHeader>

          <CardFooter className="items-start gap-2 flex-col">
            <p className="text-sm text-green-500">{User.email}</p>
            <span className="text-sm text-gray-600">
              {new Date(created_at).toLocaleDateString("pt-BR", {
                dateStyle: "short",
              })}
            </span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardPostList;
