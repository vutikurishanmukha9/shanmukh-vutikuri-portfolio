import React, { useEffect, useState, useRef, Suspense } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Flame, Github } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

// Skeleton component for loading state
const CalendarSkeleton = () => (
    <div className="space-y-4 animate-pulse">
        {/* Month labels skeleton */}
        <div className="flex gap-6 mb-2">
            {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-8 h-3 bg-muted/50 rounded" />
            ))}
        </div>
        {/* Calendar grid skeleton */}
        <div className="flex gap-1">
            {Array.from({ length: 53 }).map((_, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                    {Array.from({ length: 7 }).map((_, dayIndex) => (
                        <div
                            key={dayIndex}
                            className="w-3 h-3 bg-muted/40 rounded-sm skeleton-shimmer"
                            style={{ animationDelay: `${(weekIndex + dayIndex) * 10}ms` }}
                        />
                    ))}
                </div>
            ))}
        </div>
        {/* Footer skeleton */}
        <div className="flex justify-between items-center pt-2">
            <div className="w-48 h-4 bg-muted/50 rounded" />
            <div className="flex gap-1 items-center">
                <div className="w-8 h-3 bg-muted/50 rounded" />
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-muted/40 rounded-sm" />
                ))}
                <div className="w-8 h-3 bg-muted/50 rounded" />
            </div>
        </div>
    </div>
);

export const GrindingActivitySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [calendarLoaded, setCalendarLoaded] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { theme } = useTheme();

    const GITHUB_USERNAME = 'vutikurishanmukha9';

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Simulate calendar load detection
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setCalendarLoaded(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <section ref={sectionRef} id="grinding" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute top-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-violet-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-48 md:w-80 h-48 md:h-80 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className={`text-center mb-10 md:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass text-xs md:text-sm text-violet-500 font-medium mb-4">
                        <Flame className="h-3.5 w-3.5 md:h-4 md:w-4" />
                        Daily Hustle
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-3 md:mb-4">
                        Building <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">Activity</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                        Every line of code is a step towards mastery. Here's my coding journey.
                    </p>
                    <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full mt-4 md:mt-6" />
                </div>

                {/* GitHub Contribution Calendar */}
                <div className={`max-w-5xl mx-auto ${isVisible ? 'slide-up' : 'opacity-0'}`}>
                    <div className="glass rounded-xl md:rounded-2xl p-4 md:p-8 hover:border-violet-500/30 transition-all duration-500">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-3 md:gap-4">
                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                                    <Github className="h-5 w-5 md:h-6 md:w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-base md:text-lg font-bold text-foreground font-display">GitHub Contributions</h3>
                                    <p className="text-xs md:text-sm text-muted-foreground">@{GITHUB_USERNAME}</p>
                                </div>
                            </div>

                            <a
                                href={`https://github.com/${GITHUB_USERNAME}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs md:text-sm font-semibold rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-violet-500/20"
                            >
                                <Github className="h-3.5 w-3.5 md:h-4 md:w-4" />
                                View Profile
                            </a>
                        </div>

                        {/* GitHub Calendar with Loading State */}
                        <div className="overflow-x-auto pb-4">
                            <div className="min-w-[750px]">
                                {!calendarLoaded && <CalendarSkeleton />}
                                <div className={`transition-opacity duration-500 ${calendarLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}>
                                    <GitHubCalendar
                                        username={GITHUB_USERNAME}
                                        theme={{
                                            dark: ['#1e1b4b', '#4c1d95', '#7c3aed', '#a78bfa', '#c4b5fd'],
                                            light: ['#ede9fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed'],
                                        }}
                                        colorScheme={theme === 'dark' ? 'dark' : 'light'}
                                        blockSize={14}
                                        blockMargin={4}
                                        fontSize={14}
                                        labels={{
                                            totalCount: '{{count}} contributions in the last year',
                                        }}
                                        renderBlock={(block, activity) =>
                                            React.cloneElement(block, {
                                                'data-tooltip-id': 'contribution-tooltip',
                                                'data-tooltip-content': `${activity.count} contribution${activity.count !== 1 ? 's' : ''} on ${new Date(activity.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}`,
                                                style: { cursor: 'pointer' }
                                            })
                                        }
                                    />
                                </div>
                                <Tooltip
                                    id="contribution-tooltip"
                                    style={{
                                        backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                                        color: theme === 'dark' ? '#f3f4f6' : '#1f2937',
                                        borderRadius: '8px',
                                        padding: '8px 12px',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                        border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
                                        zIndex: 9999
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Motivational Quote */}
                <div className={`text-center mt-8 md:mt-12 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                    <p className="text-sm md:text-base text-muted-foreground italic flex items-center justify-center gap-2">
                        <span className="inline-block w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                        "The grind never stops. Every commit is a step towards mastery."
                    </p>
                </div>
            </div>
        </section>
    );
};
