"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FormPosts = () => {
  const [title, setTitle] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ title, subject, description }),
    });

    if (res.ok) {
      router.refresh();
      setModalShow(false);
    }
  };

  return (
    <Dialog open={modalShow} onOpenChange={setModalShow}>
      <DialogTrigger asChild>
        <Button>Adicionar Post</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicione um Post</DialogTitle>
        </DialogHeader>
        <form className="flex max-w-2xl flex-col gap-4" onSubmit={submit}>
          <div className="grid gap-4">
            <Input
              placeholder="Titulo"
              onChange={({ target }) => setTitle(target.value)}
              required
            />
            <Input
              placeholder="Assunto"
              onChange={({ target }) => setSubject(target.value)}
              required
            />
          </div>
          <Textarea
            placeholder="Descrição"
            onChange={({ target }) => setDescription(target.value)}
            required
          />
          <Button>Adicionar</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormPosts;
