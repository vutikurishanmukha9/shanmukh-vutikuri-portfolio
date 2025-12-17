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

                {/* Coding Platforms - Grinding Activity */}
                <div className={`mt-12 md:mt-16 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                    {/* Section Header */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-orange-500/50" />
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-orange-500 font-medium mb-2">
                                Competitive Programming
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold font-display">
                                Grinding <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">Activity</span>
                            </h3>
                        </div>
                        <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-red-500/50" />
                    </div>

                    {/* Platform Cards Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {/* LeetCode */}
                        <a
                            href="https://leetcode.com/u/vutikurishanmukh9/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative glass rounded-2xl p-5 md:p-6 overflow-hidden hover:border-yellow-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2"
                        >
                            {/* Animated gradient background on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-orange-500/0 group-hover:from-yellow-500/10 group-hover:to-orange-500/5 transition-all duration-500" />

                            {/* Corner accent */}
                            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                            <div className="relative flex flex-col items-center gap-4">
                                {/* Icon with glow */}
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                                    <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                                        <svg className="w-7 h-7 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="text-center">
                                    <p className="font-bold text-foreground text-base md:text-lg group-hover:text-yellow-500 transition-colors duration-300">LeetCode</p>
                                    <div className="flex items-center justify-center gap-1 mt-1">
                                        <span className="text-xs text-muted-foreground group-hover:text-yellow-400/80 transition-colors">View Profile</span>
                                        <svg className="w-3 h-3 text-muted-foreground group-hover:text-yellow-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* HackerRank */}
                        <a
                            href="https://www.hackerrank.com/profile/vutikurishanmuk1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative glass rounded-2xl p-5 md:p-6 overflow-hidden hover:border-emerald-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/10 group-hover:to-green-500/5 transition-all duration-500" />
                            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                            <div className="relative flex flex-col items-center gap-4">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                                    <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                                        <svg className="w-7 h-7 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V7.057c0-.143-.117-.258-.258-.258h-1.02c-.142 0-.259.115-.259.258v9.876c0 .143.117.259.259.259h1.02c.141 0 .258-.116.258-.259v-3.976h4.074v3.976c0 .143.117.259.258.259h1.02c.143 0 .259-.116.259-.259V7.057c0-.143-.116-.258-.259-.258h-1.02z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className="font-bold text-foreground text-base md:text-lg group-hover:text-emerald-500 transition-colors duration-300">HackerRank</p>
                                    <div className="flex items-center justify-center gap-1 mt-1">
                                        <span className="text-xs text-muted-foreground group-hover:text-emerald-400/80 transition-colors">View Profile</span>
                                        <svg className="w-3 h-3 text-muted-foreground group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* CodeChef */}
                        <a
                            href="https://www.codechef.com/users/vshanmukh17"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative glass rounded-2xl p-5 md:p-6 overflow-hidden hover:border-amber-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/10 group-hover:to-amber-600/5 transition-all duration-500" />
                            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                            <div className="relative flex flex-col items-center gap-4">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                                    <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                                        <svg className="w-7 h-7 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M11.257.004c-.278.031-.556.072-.834.134-.74.165-1.523.458-2.192.893-.665.432-1.265 1.003-1.702 1.66-.456.685-.795 1.462-.925 2.279-.043.27-.06.544-.06.817 0 .28.019.56.057.836.082.596.247 1.18.489 1.73.318.725.776 1.379 1.323 1.941l.017.018h-.001c.568.584 1.23 1.06 1.962 1.389.717.323 1.495.5 2.294.54h.168c.265.01.53.002.794-.023.281-.027.56-.072.834-.134.74-.165 1.523-.458 2.192-.893.665-.432 1.265-1.003 1.702-1.66.456-.685.795-1.462.925-2.279.043-.27.06-.544.06-.817 0-.28-.019-.56-.057-.836-.082-.596-.247-1.18-.489-1.73-.318-.725-.776-1.379-1.323-1.941l-.017-.018c-.568-.584-1.23-1.06-1.962-1.389-.717-.323-1.495-.5-2.294-.54-.085-.003-.17-.005-.256-.005-.17-.004-.34.003-.512.024zm.186 3.167c.086 0 .171.003.256.008.467.024 1.037.136 1.492.39.456.254.836.636 1.03 1.16.103.28.143.58.143.888 0 .096-.006.192-.017.288-.03.269-.103.53-.215.776-.236.516-.631.938-1.142 1.203-.45.233-.97.337-1.492.354h-.167c-.513-.016-1.023-.116-1.466-.337-.51-.253-.905-.662-1.148-1.168-.122-.255-.202-.524-.238-.802-.02-.15-.03-.302-.03-.454 0-.226.024-.451.074-.672.106-.465.323-.893.638-1.229.312-.333.71-.575 1.143-.725.346-.12.72-.174 1.095-.178.015-.001.029-.001.044-.001z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className="font-bold text-foreground text-base md:text-lg group-hover:text-amber-500 transition-colors duration-300">CodeChef</p>
                                    <div className="flex items-center justify-center gap-1 mt-1">
                                        <span className="text-xs text-muted-foreground group-hover:text-amber-400/80 transition-colors">View Profile</span>
                                        <svg className="w-3 h-3 text-muted-foreground group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* GeeksforGeeks */}
                        <a
                            href="https://www.geeksforgeeks.org/profile/shanmukh17vutikuri?tab=activity"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative glass rounded-2xl p-5 md:p-6 overflow-hidden hover:border-green-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-600/0 group-hover:from-green-500/10 group-hover:to-green-600/5 transition-all duration-500" />
                            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                            <div className="relative flex flex-col items-center gap-4">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                                    <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                                        <svg className="w-7 h-7 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.292-.906c-.083-.385-.118-.78-.104-1.174H5.753c-.282-.006-.506-.23-.506-.512V9.955c0-.282.224-.512.506-.518h8.381c.016-.394.052-.789.135-1.174.092-.39.224-.771.392-1.132.176-.38.39-.738.637-1.068.252-.336.536-.646.848-.919.312-.273.656-.513 1.02-.717.172-.095.35-.18.532-.254a4.51 4.51 0 0 1 2.585-.16c.428.084.84.222 1.223.412l-1.103 2.115c-.196-.11-.41-.192-.632-.247a2.08 2.08 0 0 0-.848-.038c-.25.04-.49.12-.707.239-.2.107-.385.242-.548.4a2.46 2.46 0 0 0-.462.583c-.134.232-.24.48-.312.741a4.408 4.408 0 0 0-.15.935c-.015.346 0 .698.051 1.045h4.253a.505.505 0 0 1 .506.512v1.114c0 .282-.224.512-.506.518h-4.253c.053.347.068.699.03 1.046a4.408 4.408 0 0 1-.15.935c-.072.26-.178.509-.312.74-.128.223-.28.43-.462.584a2.46 2.46 0 0 1-.548.4c-.218.119-.457.2-.707.24a2.08 2.08 0 0 1-.848-.039c-.222-.055-.436-.137-.632-.247l1.103-2.116c.122.064.25.113.384.146.17.044.346.058.52.043.203-.02.398-.076.578-.166.2-.098.382-.23.538-.396.165-.176.304-.375.414-.59.118-.231.202-.48.254-.736.052-.255.07-.516.053-.776ZM2.545 14.315c.143.28.334.532.565.745.23.212.496.39.783.532.287.143.596.25.917.32.32.07.653.104.987.1.333-.005.662-.045.98-.119a3.79 3.79 0 0 0 1.438-.617c.21-.15.406-.32.582-.508l-1.605-1.629c-.086.075-.18.142-.284.2-.119.067-.246.12-.378.16-.14.043-.285.072-.432.087-.15.016-.303.016-.453.003a1.606 1.606 0 0 1-.556-.159c-.165-.084-.314-.198-.436-.334a1.388 1.388 0 0 1-.244-.407c-.053-.144-.08-.296-.08-.45H2.545Z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className="font-bold text-foreground text-base md:text-lg group-hover:text-green-500 transition-colors duration-300">GeeksforGeeks</p>
                                    <div className="flex items-center justify-center gap-1 mt-1">
                                        <span className="text-xs text-muted-foreground group-hover:text-green-400/80 transition-colors">View Profile</span>
                                        <svg className="w-3 h-3 text-muted-foreground group-hover:text-green-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Motivational Quote */}
                <div className={`text-center mt-8 md:mt-12 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                    <p className="text-sm md:text-base text-muted-foreground italic flex items-center justify-center gap-2">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-violet-500 to-orange-500 rounded-full animate-pulse" />
                        "Build. Grind. Repeat. Every problem solved is a step towards mastery."
                    </p>
                </div>
            </div>
        </section>
    );
};
