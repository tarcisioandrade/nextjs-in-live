import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const PostSkeleton = () => {
  return (
    <div className="mt-12 grid grid-cols-3 gap-4">
      <Skeleton className="h-[298px] w-[330px]" />
      <Skeleton className="h-[298px] w-[330px]" />
      <Skeleton className="h-[298px] w-[330px]" />
      <Skeleton className="h-[298px] w-[330px]" />
      <Skeleton className="h-[298px] w-[330px]" />
      <Skeleton className="h-[298px] w-[330px]" />
    </div>
  );
};

export default PostSkeleton;
