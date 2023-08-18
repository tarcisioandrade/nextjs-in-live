"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";

type FormPostsProps = {
  refetchPost: () => Promise<Post[]>;
};

const FormPosts = () => {
  const [title, setTitle] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ title, subject, description }),
    });

    if (res.ok) {
      window.alert("Post Criado.");
      router.refresh();
    }
    console.log("res", res);
  };

  return (
    <form className="flex max-w-2xl flex-col gap-4" onSubmit={submit}>
      <h1 className="text-lg">Adicione um Post</h1>
      <div className="grid gap-4">
        <Input
          placeholder="Titulo"
          onChange={({ target }) => setTitle(target.value)}
        />
        <Input
          placeholder="Assunto"
          onChange={({ target }) => setSubject(target.value)}
        />
      </div>
      <Textarea
        placeholder="Descrição"
        onChange={({ target }) => setDescription(target.value)}
      />
      <Button>Adicionar</Button>
    </form>
  );
};

export default FormPosts;
