import React, { useEffect, useState, useRef } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Flame, Github } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export const GrindingActivitySection = () => {
    const [isVisible, setIsVisible] = useState(false);
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

    return (
        <section ref={sectionRef} id="grinding" className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-violet-500 font-medium mb-4">
                        <Flame className="h-4 w-4" />
                        Daily Hustle
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
                        Building <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">Activity</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Every line of code is a step towards mastery. Here's my coding journey.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full mt-6" />
                </div>

                {/* GitHub Contribution Calendar */}
                <div className={`max-w-5xl mx-auto ${isVisible ? 'slide-up' : 'opacity-0'}`}>
                    <div className="glass rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-500">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                                    <Github className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground font-display">GitHub Contributions</h3>
                                    <p className="text-sm text-muted-foreground">@{GITHUB_USERNAME}</p>
                                </div>
                            </div>

                            <a
                                href={`https://github.com/${GITHUB_USERNAME}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20"
                            >
                                <Github className="h-4 w-4" />
                                View Profile
                            </a>
                        </div>

                        {/* GitHub Calendar */}
                        <div className="overflow-x-auto pb-4">
                            <div className="min-w-[750px]">
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
                <div className={`text-center mt-12 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                    <p className="text-muted-foreground italic flex items-center justify-center gap-2">
                        <span className="inline-block w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                        "The grind never stops. Every commit is a step towards mastery."
                    </p>
                </div>
            </div>
        </section>
    );
};
