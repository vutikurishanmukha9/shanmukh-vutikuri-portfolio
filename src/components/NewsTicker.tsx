import { useState } from 'react';

interface NewsTickerProps {
    items: string[];
    speed?: number;
}

export const NewsTicker = ({ items, speed = 30 }: NewsTickerProps) => {
    const [isPaused, setIsPaused] = useState(false);

    // Triplicate items for seamless infinite scroll
    const tickerContent = [...items, ...items, ...items];

    return (
        <div
            className="news-ticker-container fixed top-16 left-0 right-0 z-40 overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card) / 0.95) 100%)',
                borderBottom: '1px solid hsl(var(--primary) / 0.3)',
                boxShadow: '0 4px 20px hsl(var(--primary) / 0.1)',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            <div className="py-2 md:py-2.5 relative flex items-center">
                {/* LIVE Badge */}
                <div className="flex-shrink-0 flex items-center gap-2 px-3 md:px-4 border-r border-primary/20">
                    <span
                        className="relative flex h-2.5 w-2.5"
                    >
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <span className="text-xs md:text-sm font-bold tracking-wider text-red-500">
                        LIVE
                    </span>
                </div>

                {/* Scrolling content container */}
                <div className="flex-1 overflow-hidden relative">
                    {/* Left fade */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-8 md:w-20 z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, hsl(var(--card)), transparent)' }}
                    />
                    {/* Right fade */}
                    <div
                        className="absolute right-0 top-0 bottom-0 w-8 md:w-20 z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to left, hsl(var(--card)), transparent)' }}
                    />

                    {/* Scrolling content */}
                    <div
                        className="flex whitespace-nowrap"
                        style={{
                            animation: `ticker-scroll ${speed}s linear infinite`,
                            animationPlayState: isPaused ? 'paused' : 'running',
                        }}
                    >
                        {tickerContent.map((item, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center mx-4 md:mx-6 text-xs md:text-sm font-medium"
                            >
                                {/* Diamond separator */}
                                <span
                                    className="w-1.5 h-1.5 mr-2 md:mr-3 rotate-45"
                                    style={{
                                        background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
                                        boxShadow: '0 0 8px hsl(var(--primary) / 0.6)',
                                    }}
                                />
                                <span className="text-foreground/90">{item}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Default status items - concise and impactful
export const defaultStatusItems = [
    "Open to Opportunities",
    "Seeking: SDE • ML • Cloud • Data Analyst Roles",
    "Based in India",
    "B.Tech in ECE",
    "10+ Projects Completed",
    "AWS Certified Cloud Practitioner",
    "AI/ML Enthusiast",
    "vutikurishanmukh17@gmail.com",
];
