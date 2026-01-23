import { useState } from 'react';

interface NewsTickerProps {
    items: string[];
    speed?: number;
}

export const NewsTicker = ({ items, speed = 30 }: NewsTickerProps) => {
    const [isPaused, setIsPaused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Duplicate items for seamless infinite scroll (only 2 copies needed)
    const tickerContent = [...items, ...items];

    const handleMouseEnter = () => {
        setIsPaused(true);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
        setIsHovered(false);
    };

    return (
        <div
            className="news-ticker-container w-full overflow-hidden transition-all duration-300"
            style={{
                background: isHovered
                    ? 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card) / 0.98) 100%)'
                    : 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card) / 0.95) 100%)',
                borderBottom: isHovered
                    ? '1px solid hsl(var(--primary) / 0.5)'
                    : '1px solid hsl(var(--primary) / 0.3)',
                boxShadow: isHovered
                    ? '0 6px 30px hsl(var(--primary) / 0.2)'
                    : '0 4px 20px hsl(var(--primary) / 0.1)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            <div className="py-2 md:py-2.5 relative flex items-center">
                {/* LIVE Badge */}
                <div className="flex-shrink-0 flex items-center gap-2 px-3 md:px-4 border-r border-primary/20">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-lg shadow-red-500/50"></span>
                    </span>
                    <span className="text-xs md:text-sm font-bold tracking-wider text-red-500 drop-shadow-sm">
                        LIVE
                    </span>
                </div>

                {/* Scrolling content container */}
                <div className="flex-1 overflow-hidden relative">
                    {/* Left fade */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none transition-opacity duration-300"
                        style={{
                            background: 'linear-gradient(to right, hsl(var(--card)), transparent)',
                            opacity: isHovered ? 0.9 : 1
                        }}
                    />
                    {/* Right fade */}
                    <div
                        className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none transition-opacity duration-300"
                        style={{
                            background: 'linear-gradient(to left, hsl(var(--card)), transparent)',
                            opacity: isHovered ? 0.9 : 1
                        }}
                    />

                    {/* Scrolling content - uses marquee-style animation */}
                    <div
                        className="ticker-track flex whitespace-nowrap"
                        style={{
                            animationDuration: `${speed}s`,
                            animationPlayState: isPaused ? 'paused' : 'running',
                        }}
                    >
                        {tickerContent.map((item, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center mx-4 md:mx-6 text-xs md:text-sm font-medium transition-all duration-200 hover:text-primary group"
                            >
                                {/* Diamond separator */}
                                <span
                                    className="w-1.5 h-1.5 mr-2 md:mr-3 rotate-45 transition-all duration-200 group-hover:scale-125 group-hover:rotate-[225deg]"
                                    style={{
                                        background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
                                        boxShadow: '0 0 8px hsl(var(--primary) / 0.6)',
                                    }}
                                />
                                <span className="text-foreground/90 group-hover:text-foreground transition-colors duration-200">
                                    {item}
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .ticker-track {
                    animation: ticker-seamless linear infinite;
                }
                
                @keyframes ticker-seamless {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
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
