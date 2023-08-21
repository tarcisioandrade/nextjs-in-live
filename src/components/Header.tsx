"use client";

import React from "react";
import { Flame, Moon, Sun, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { User } from "next-auth";

type Props = {
  user: Pick<User, "name" | "image" | "email"> | undefined;
};

const Header = ({ user }: Props) => {
  const { setTheme } = useTheme();

  return (
    <header className="border-b border-b-gray-200 dark:border-b-neutral-800">
      <div className="max-w-5xl mx-auto flex justify-between items-center h-14">
        <Link className="flex items-center gap-1" href="/">
          <Flame />
          <span>NextInLive</span>
        </Link>

        <div className="flex gap-2 items-center">
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="w-10 h-10 overflow-hidden rounded-full cursor-pointer">
                  {user.image ? (
                    <AvatarImage src={user.image} alt="Picture" />
                  ) : (
                    <AvatarFallback>
                      {user.name?.slice(0, 1).toUpperCase()}
                    </AvatarFallback>
                  )}
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    {user.name && <p className="font-medium">{user.name}</p>}
                    {user.email && (
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    )}
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Meus Post</DropdownMenuItem>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => signIn("github")}
            >
              <Github /> Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
