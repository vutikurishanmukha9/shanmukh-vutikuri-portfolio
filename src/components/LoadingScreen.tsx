import { useEffect, useState } from 'react';

export const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Minimum display time for branding effect
        const timer = setTimeout(() => {
            setFadeOut(true);
            // Remove from DOM after fade animation
            setTimeout(() => setIsLoading(false), 500);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Background gradient */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[80px] animate-pulse delay-500" />
            </div>

            {/* Content */}
            <div className="relative flex flex-col items-center gap-6">
                {/* Logo/Name */}
                <div className="relative">
                    <h1 className="text-4xl md:text-5xl font-bold font-display">
                        <span className="text-foreground">Vutikuri</span>{' '}
                        <span className="text-gradient">Shanmukha</span>
                    </h1>
                </div>

                {/* Loading indicator */}
                <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>

                {/* Tagline */}
                <p className="text-sm text-muted-foreground tracking-widest uppercase">
                    AI Engineer
                </p>
            </div>
        </div>
    );
};
