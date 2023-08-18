import { Post } from "@prisma/client";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

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
    <div className="my-24 grid grid-cols-3 gap-4 ">
      {posts.map(({ id, title, subject, description, author }) => (
        <Card key={id}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <p>{subject}</p>
            <CardDescription>{description}</CardDescription>
            <p className="text-sm text-green-500">{author}</p>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default CardPostList;
