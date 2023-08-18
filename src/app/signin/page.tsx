import FormSignin from "@/components/FormSignin";
import React from "react";

const Signin = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">Cadastre-se</h1>
      <div className="max-w-sm w-full">
        <FormSignin />
      </div>
    </main>
  );
};

export default Signin;
