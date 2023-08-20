import CardPostList from "@/components/CardPostList";
import FormPosts from "@/components/FormPosts";
import PostSkeleton from "@/components/PostSkeleton";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="my-12">
      <FormPosts />
      <Suspense fallback={<PostSkeleton />}>
        <CardPostList />
      </Suspense>
    </main>
  );
}
