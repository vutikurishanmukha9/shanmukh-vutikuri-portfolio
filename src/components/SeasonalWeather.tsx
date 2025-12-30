import { useEffect, useState, useMemo } from 'react';

type Season = 'winter' | 'monsoon' | 'autumn' | 'spring';

interface Particle {
    id: number;
    x: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
}

const getSeason = (): Season => {
    const month = new Date().getMonth(); // 0-11

    // Winter: December (11), January (0), February (1)
    if (month === 11 || month === 0 || month === 1) return 'winter';

    // Spring: March (2), April (3), May (4)
    if (month >= 2 && month <= 4) return 'spring';

    // Monsoon/Rainy: June (5), July (6), August (7), September (8)
    if (month >= 5 && month <= 8) return 'monsoon';

    // Autumn: October (9), November (10)
    return 'autumn';
};

export const SeasonalWeather = () => {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    const season = useMemo(() => getSeason(), []);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const config = useMemo(() => {
        const mobileMultiplier = isMobile ? 0.4 : 1; // Reduce particles on mobile

        switch (season) {
            case 'winter':
                return { count: Math.floor(35 * mobileMultiplier), minSize: 10, maxSize: 16, minDuration: 8, maxDuration: 15 };
            case 'monsoon':
                return { count: Math.floor(50 * mobileMultiplier), minSize: 8, maxSize: 12, minDuration: 1, maxDuration: 2 };
            case 'autumn':
                return { count: Math.floor(20 * mobileMultiplier), minSize: 14, maxSize: 22, minDuration: 10, maxDuration: 18 };
            case 'spring':
                return { count: Math.floor(25 * mobileMultiplier), minSize: 12, maxSize: 18, minDuration: 12, maxDuration: 20 };
        }
    }, [season, isMobile]);

    useEffect(() => {
        const newParticles: Particle[] = [];
        for (let i = 0; i < config.count; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                size: Math.random() * (config.maxSize - config.minSize) + config.minSize,
                duration: Math.random() * (config.maxDuration - config.minDuration) + config.minDuration,
                delay: Math.random() * 8,
                opacity: Math.random() * 0.3 + 0.6,
            });
        }
        setParticles(newParticles);
    }, [config]);

    const getEmoji = () => {
        switch (season) {
            case 'winter': return '❄️';
            case 'monsoon': return '💧';
            case 'autumn': return '🍂';
            case 'spring': return '🌸';
        }
    };

    const getAnimation = () => {
        switch (season) {
            case 'winter': return 'snowfall';
            case 'monsoon': return 'rainfall';
            case 'autumn': return 'leaffall';
            case 'spring': return 'petalfall';
        }
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden" aria-hidden="true">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute select-none will-change-transform"
                    style={{
                        left: `${particle.x}%`,
                        fontSize: `${particle.size}px`,
                        opacity: particle.opacity,
                        animation: `${getAnimation()} ${particle.duration}s linear ${particle.delay}s infinite`,
                        filter: season === 'winter' ? 'drop-shadow(0 0 3px rgba(100, 180, 255, 0.9))' : 'none',
                    }}
                >
                    {getEmoji()}
                </div>
            ))}

            <style>{`
        @keyframes snowfall {
          0% { transform: translateY(-30px) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
        
        @keyframes rainfall {
          0% { transform: translateY(-30px); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes leaffall {
          0% { transform: translateY(-30px) translateX(0) rotate(0deg); }
          25% { transform: translateY(25vh) translateX(30px) rotate(90deg); }
          50% { transform: translateY(50vh) translateX(-20px) rotate(180deg); }
          75% { transform: translateY(75vh) translateX(40px) rotate(270deg); }
          100% { transform: translateY(100vh) translateX(0) rotate(360deg); }
        }
        
        @keyframes petalfall {
          0% { transform: translateY(-30px) translateX(0) rotate(0deg); }
          25% { transform: translateY(25vh) translateX(20px) rotate(45deg); }
          50% { transform: translateY(50vh) translateX(-15px) rotate(90deg); }
          75% { transform: translateY(75vh) translateX(25px) rotate(135deg); }
          100% { transform: translateY(100vh) translateX(0) rotate(180deg); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .will-change-transform {
            animation: none !important;
            display: none;
          }
        }
      `}</style>
        </div>
    );
};

export const getCurrentSeason = getSeason;
