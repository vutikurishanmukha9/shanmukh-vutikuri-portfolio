import { useEffect, useState } from 'react';

interface Snowflake {
    id: number;
    x: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
}

export const Snowfall = () => {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

    useEffect(() => {
        // Generate snowflakes
        const flakes: Snowflake[] = [];
        const count = 50; // Number of snowflakes

        for (let i = 0; i < count; i++) {
            flakes.push({
                id: i,
                x: Math.random() * 100, // Random horizontal position (%)
                size: Math.random() * 4 + 2, // 2-6px
                duration: Math.random() * 10 + 8, // 8-18s fall duration
                delay: Math.random() * 10, // Random start delay
                opacity: Math.random() * 0.6 + 0.3, // 0.3-0.9 opacity
            });
        }

        setSnowflakes(flakes);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="absolute rounded-full bg-white dark:bg-white/80"
                    style={{
                        left: `${flake.x}%`,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                        opacity: flake.opacity,
                        animation: `snowfall ${flake.duration}s linear ${flake.delay}s infinite`,
                    }}
                />
            ))}

            <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10px) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
        </div>
    );
};
