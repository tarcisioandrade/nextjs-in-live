import { Post } from "@prisma/client";
import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const getPosts = async (): Promise<Post[]> => {
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
    return <p className="text-3xl text-gray-500">Nenhum post disponivel.</p>;
  return (
    <div className="mt-12 grid grid-cols-3 gap-4">
      {posts.map(({ id, title, subject, description, author, created_at }) => (
        <Card key={id} className="relative">
          <CardHeader className="min-h-[252px]">
            <CardTitle>
              <span>{title}</span>
            </CardTitle>
            <p>{subject}</p>
            <CardDescription>{description}</CardDescription>
          </CardHeader>

          <CardFooter className="justify-between">
            <p className="text-sm text-green-500">{author}</p>
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
