import { cn } from '@/lib/utils';

interface SkeletonProps {
    className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
    return (
        <div
            className={cn(
                'animate-pulse rounded-md bg-muted/50',
                className
            )}
        />
    );
};

// GitHub Calendar Skeleton
export const GitHubCalendarSkeleton = () => {
    return (
        <div className="space-y-4">
            {/* Header skeleton */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Skeleton className="w-12 h-12 rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="w-40 h-5" />
                        <Skeleton className="w-32 h-4" />
                    </div>
                </div>
                <Skeleton className="w-28 h-9 rounded-lg" />
            </div>

            {/* Calendar grid skeleton */}
            <div className="space-y-2">
                <div className="flex gap-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <Skeleton key={i} className="w-12 h-4" />
                    ))}
                </div>
                <div className="grid grid-cols-[repeat(53,1fr)] gap-1">
                    {Array.from({ length: 371 }).map((_, i) => (
                        <Skeleton key={i} className="w-3 h-3 rounded-sm" />
                    ))}
                </div>
            </div>

            {/* Footer skeleton */}
            <div className="flex justify-between items-center">
                <Skeleton className="w-48 h-4" />
                <div className="flex gap-1 items-center">
                    <Skeleton className="w-8 h-4" />
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="w-3 h-3 rounded-sm" />
                    ))}
                    <Skeleton className="w-8 h-4" />
                </div>
            </div>
        </div>
    );
};

// Project Card Skeleton
export const ProjectCardSkeleton = () => {
    return (
        <div className="glass rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-start">
                <Skeleton className="w-10 h-10 rounded-lg" />
                <Skeleton className="w-16 h-5 rounded-full" />
            </div>
            <Skeleton className="w-3/4 h-6" />
            <div className="space-y-2">
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-5/6 h-4" />
            </div>
            <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="w-16 h-6 rounded-full" />
                ))}
            </div>
            <div className="flex gap-3">
                <Skeleton className="w-24 h-9 rounded-lg" />
                <Skeleton className="w-24 h-9 rounded-lg" />
            </div>
        </div>
    );
};

// Certification Card Skeleton
export const CertificationCardSkeleton = () => {
    return (
        <div className="glass rounded-xl p-5 space-y-3">
            <div className="flex items-start gap-4">
                <Skeleton className="w-12 h-12 rounded-lg" />
                <div className="flex-1 space-y-2">
                    <Skeleton className="w-full h-5" />
                    <Skeleton className="w-2/3 h-4" />
                </div>
            </div>
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-20 h-5 rounded-full" />
        </div>
    );
};
