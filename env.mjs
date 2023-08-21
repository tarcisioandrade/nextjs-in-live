import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    SECRET: z.string(),
    NEXTAUTH_URL: z.string(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    SECRET: process.env.SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
});
