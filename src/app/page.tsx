import CardPostList from "@/components/CardPostList";
import FormPosts from "@/components/FormPosts";
import PostSkeleton from "@/components/PostSkeleton";
import { getCurrentUser } from "@/lib/session";
import { Suspense } from "react";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <main className="my-12">
      <div className="flex items-center justify-between">
        <span className="text-2xl">Postados Recentemente</span>
        {currentUser && <FormPosts />}
      </div>
      <Suspense fallback={<PostSkeleton />}>
        <CardPostList />
      </Suspense>
    </main>
  );
}
