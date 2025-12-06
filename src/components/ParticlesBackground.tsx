import { useMemo } from 'react';

interface Particle {
    id: number;
    left: string;
    size: number;
    duration: number;
    delay: number;
    color: string;
}

export const ParticlesBackground = () => {
    const particles = useMemo<Particle[]>(() => {
        return Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 20 + 15,
            delay: Math.random() * 10,
            color: Math.random() > 0.5
                ? 'hsl(187 100% 50% / 0.3)'
                : 'hsl(263 70% 50% / 0.3)',
        }));
    }, []);

    return (
        <div className="particles">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="particle"
                    style={{
                        left: particle.left,
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: particle.color,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`,
                        boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                    }}
                />
            ))}
        </div>
    );
};
