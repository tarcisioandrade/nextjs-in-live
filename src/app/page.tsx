import CardPostList from "@/components/CardPostList";
import FormPosts from "@/components/FormPosts";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="mt-24">
      <FormPosts />

      <Suspense fallback={<p>Loading...</p>}>
        <CardPostList />
      </Suspense>
    </main>
  );
}
