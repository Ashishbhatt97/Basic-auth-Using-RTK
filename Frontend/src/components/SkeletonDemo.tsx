import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-96">
      <Skeleton className="h-7 w-[350px] rounded-md" />
      <div className="space-y-8">
        <Skeleton className="h-5 w-[150px] rounded-md" />
      </div>
    </div>
  );
}
