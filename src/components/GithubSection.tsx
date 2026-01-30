
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { Github, Star, Code, GitBranch, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- DATA GENERATION ---
const generateContributionData = () => {
    const data = [];
    // 365 days
    for (let i = 0; i < 365; i++) {
        // Random activity level 0-4
        // Weighted for "Heavy" look
        const rand = Math.random();
        let level = 0;
        if (rand > 0.95) level = 4;      // Nova
        else if (rand > 0.85) level = 3; // Supergiant
        else if (rand > 0.7) level = 2;  // Giant
        else if (rand > 0.5) level = 1;  // Dwarf
        else level = 0;                 // Void

        data.push({ level, index: i });
    }
    return data.reverse(); // Newest at center (or outside, depending on spiral logic)
};

// --- VORTEX PARTICLE ---
const VortexParticle = ({ level, index, total }: { level: number, index: number, total: number }) => {
    // Math for Archimedean Spiral
    // angle = offset * index
    // radius = growth * index
    const angle = 0.5 * index; // Tightness of winding
    const radius = 10 + (300 * (index / total)); // Grow from 10px to 300px

    // Convert Polar to Cartesian
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    // Styling based on level
    const getSize = (l: number) => {
        if (l === 0) return 'w-1 h-1 opacity-20';
        if (l === 1) return 'w-2 h-2 opacity-40';
        if (l === 2) return 'w-3 h-3';
        if (l === 3) return 'w-4 h-4 shadow-[0_0_10px_var(--primary)]';
        return 'w-6 h-6 shadow-[0_0_20px_var(--secondary)] z-20';
    };

    const getColor = (l: number) => {
        if (l === 0) return 'bg-white';
        if (l === 1) return 'bg-white';
        if (l === 2) return 'bg-primary';
        if (l === 3) return 'bg-secondary';
        return 'bg-accent';
    };

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.002, duration: 0.5 }}
            className={`absolute rounded-full transition-all duration-300 ${getSize(level)} ${getColor(level)}`}
            style={{
                left: '50%',
                top: '50%',
                x, // transform: translateX(x)
                y, // transform: translateY(y)
            }}
        />
    );
};

export const GithubSection = () => {
    const [data, setData] = useState<{ level: number, index: number }[]>([]);

    useEffect(() => {
        setData(generateContributionData());
    }, []);

    // Memoize total for performance
    const total = 365;

    return (
        <SectionWrapper id="github-vortex" className="py-20 relative overflow-hidden min-h-[90vh] flex items-center justify-center">

            {/* Void Background */}
            <div className="absolute inset-0 bg-black radial-gradient(circle at center, #1a1a1a 0%, #000 70%) pointer-events-none" />

            {/* Content Overlay */}
            <div className="container relative z-10 mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between pointer-events-none">

                {/* Text Content (Left) */}
                <div className="md:w-1/3 mb-10 md:mb-0 pointer-events-auto text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                            <Github className="w-8 h-8 text-white" />
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                            CODE<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">VORTEX</span>
                        </h2>

                        <p className="text-lg text-gray-400 max-w-sm border-l-2 border-primary pl-4">
                            Visualizing one year of commit activity as a high-velocity event horizon.
                        </p>

                        <div className="flex gap-4">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                                <div className="text-3xl font-bold text-white">1,204</div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest">Commits</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                                <div className="text-3xl font-bold text-white">Top 1%</div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest">Global</div>
                            </div>
                        </div>

                        <Button className="mt-8 rounded-full border border-white/20 bg-transparent hover:bg-white/10 text-white" asChild>
                            <a href="https://github.com/vutikurishanmukha9" target="_blank">
                                View Gravity Well <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                        </Button>
                    </motion.div>
                </div>

                {/* The Vortex (Center/Right) */}
                <div className="md:w-2/3 h-[500px] md:h-[800px] relative flex items-center justify-center perspective-[1000px]">

                    {/* Rotating Container */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                        className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] preserve-3d"
                        style={{ rotateX: 60 }} // Tilted 3D Plane
                    >
                        {/* Core Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-primary rounded-full blur-[80px] animate-pulse" />

                        {/* Particles */}
                        {data.map((point) => (
                            <VortexParticle key={point.index} level={point.level} index={point.index} total={total} />
                        ))}

                    </motion.div>

                    {/* Overlay Grid for Depth */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none" />
                </div>
            </div>
        </SectionWrapper>
    );
};
