"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const FormSignin = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      window.alert("Usuário criado");
    }

    console.log("res", res);
  };

  return (
    <form className="grid gap-4" onSubmit={submit}>
      <Input
        placeholder="email"
        className="text-black"
        onChange={({ target }) => setEmail(target.value)}
      />
      <Input
        placeholder="password"
        className="text-black"
        onChange={({ target }) => setPassword(target.value)}
      />
      <Button>Cadastrar</Button>
    </form>
  );
};

export default FormSignin;
