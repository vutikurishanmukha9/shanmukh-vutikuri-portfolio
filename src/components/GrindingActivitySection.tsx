import React, { useEffect, useState, useRef } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Github, Code2, Terminal, Activity, FileCode2 } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { motion } from 'framer-motion';

const PLATFORMS = [
    {
        name: 'LeetCode',
        url: 'https://leetcode.com/u/vutikurishanmukh9/',
        icon: <Code2 className="w-5 h-5 text-current" />
    },
    {
        name: 'HackerRank',
        url: 'https://www.hackerrank.com/profile/vutikurishanmuk1',
        icon: <Terminal className="w-5 h-5 text-current" />
    },
    {
        name: 'CodeChef',
        url: 'https://www.codechef.com/users/vshanmukh17',
        icon: <FileCode2 className="w-5 h-5 text-current" />
    },
    {
        name: 'GeeksforGeeks',
        url: 'https://www.geeksforgeeks.org/profile/shanmukh17vutikuri?tab=activity',
        icon: <Activity className="w-5 h-5 text-current" />
    },
    {
        name: 'Codolio',
        url: 'https://codolio.com/profile/Shanmukh1122',
        icon: <Terminal className="w-5 h-5 text-current" />
    }
];

export const GrindingActivitySection = () => {
    const { theme } = useTheme();
    const GITHUB_USERNAME = 'vutikurishanmukha9';

    const CalendarSkeleton = () => (
        <div className="animate-pulse space-y-4">
            <div className="h-4 bg-muted rounded w-1/4 mb-4"></div>
            <div className="grid grid-cols-[repeat(53,1fr)] gap-1">
                {Array.from({ length: 53 * 7 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-muted rounded-sm"></div>
                ))}
            </div>
        </div>
    );

    return (
        <SectionWrapper id="activity" className="py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border shadow-sm mb-6"
                    >
                        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Consistency</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground"
                    >
                        Daily Activity
                    </motion.h2>
                </div>

                {/* GitHub Activity */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto mb-16"
                >
                    <div className="glass-panel p-8 md:p-10 border border-border">
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center shadow-sm">
                                    <Github className="w-6 h-6 text-foreground" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground font-display">GitHub Contributions</h3>
                                    <p className="text-sm text-muted-foreground">@{GITHUB_USERNAME}</p>
                                </div>
                            </div>
                            <a
                                href={`https://github.com/${GITHUB_USERNAME}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-colors shadow-sm"
                            >
                                View GitHub
                            </a>
                        </div>
                        
                        <div className="overflow-x-auto pb-4 hide-scrollbar">
                            <div className="min-w-[800px] text-foreground">
                                <GitHubCalendar
                                    username={GITHUB_USERNAME}
                                    year="last"
                                    colorScheme={theme === 'dark' ? 'dark' : 'light'}
                                    blockSize={12}
                                    blockMargin={4}
                                    fontSize={12}
                                    renderBlock={(block, activity) => (
                                        <Tooltip
                                            id="react-tooltip"
                                            content={`${activity.count} commits on ${new Date(activity.date).toLocaleDateString()}`}
                                        >
                                            {block}
                                        </Tooltip>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Other Platforms */}
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-px flex-1 bg-border" />
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Competitive Programming</span>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {PLATFORMS.map((platform, i) => (
                            <motion.a
                                key={platform.name}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-panel p-6 flex flex-col items-center justify-center gap-4 hover-lift-minimal group border border-border/50"
                            >
                                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                                    {platform.icon}
                                </div>
                                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                    {platform.name}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};
