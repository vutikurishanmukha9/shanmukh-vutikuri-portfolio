import { useRef } from 'react';
import { Calendar, Briefcase, MapPin, GraduationCap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';

type Experience = {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    skills: string[];
    current: boolean;
    isEducation?: boolean;
};

export const CareerJourneySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const experiences: Experience[] = [
        {
            title: 'Cloud Engineering Intern',
            company: 'Brain O Vision',
            location: 'Remote',
            period: 'June 2024 – Aug 2024',
            description: 'Worked on cloud infrastructure projects, learned cloud deployment strategies, and gained practical experience with cloud platforms.',
            skills: ['Cloud Computing', 'Python', 'AWS', 'Automation'],
            current: false,
        },
        {
            title: 'Cloud Computing Engineering Intern',
            company: 'EXCELr EdTech',
            location: 'Remote',
            period: 'Dec 2024 – Apr 2025',
            description: 'Gained hands-on experience in cloud computing technologies, worked with AWS services, and developed cloud-native solutions.',
            skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Infrastructure'],
            current: false,
        },
    ];

    return (
        <SectionWrapper id="career" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={containerRef}>
                {/* Header */}
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border shadow-sm mb-6"
                    >
                        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Experience</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground"
                    >
                        Career Timeline
                    </motion.h2>
                </div>

                <div className="relative max-w-4xl mx-auto pl-6 md:pl-10">
                    {/* Clean Vertical Line */}
                    <div className="absolute left-0 md:left-4 top-2 bottom-0 w-[1px] bg-border z-0" />
                    <motion.div
                        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                        className="absolute left-[calc(0px-0.5px)] md:left-[calc(1rem-0.5px)] top-2 w-[2px] h-full bg-primary z-0"
                    />

                    <div className="space-y-12">
                        {/* Next Stop Indicator */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10 flex items-start group"
                        >
                            {/* Node */}
                            <div className="absolute -left-[1.95rem] md:-left-[2.1rem] top-1.5">
                                <div className="w-4 h-4 rounded-full bg-background border-2 border-primary ring-4 ring-primary/10 animate-pulse" />
                            </div>
                            
                            <div className="w-full glass-panel p-6 border-l-4 border-l-primary/50">
                                <h3 className="text-lg font-semibold text-foreground font-display">Next Value Stop</h3>
                                <p className="text-sm text-muted-foreground mt-1">Open to opportunities where I can make a tangible impact.</p>
                            </div>
                        </motion.div>

                        {/* Experience Cards */}
                        {experiences.map((exp, index) => {
                            const isEducation = exp.isEducation;
                            const Icon = isEducation ? GraduationCap : Briefcase;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative z-10 flex items-start group"
                                >
                                    {/* Node */}
                                    <div className="absolute -left-10 md:-left-[2.75rem] top-6 bg-background p-2 rounded-full border border-border shadow-sm group-hover:border-primary group-hover:text-primary transition-colors">
                                        <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>

                                    {/* Card */}
                                    <div className="w-full glass-panel p-8 hover-lift-minimal border border-border/60">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-xl font-semibold text-foreground font-display">{exp.title}</h3>
                                                <div className="flex flex-wrap items-center gap-2 mt-2 text-muted-foreground text-sm">
                                                    <span className="font-medium text-foreground/80">{exp.company}</span>
                                                    <span className="w-1 h-1 rounded-full bg-border" />
                                                    <MapPin className="h-3.5 w-3.5" />
                                                    <span>{exp.location}</span>
                                                </div>
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted border border-border text-xs font-medium text-muted-foreground whitespace-nowrap">
                                                <Calendar className="h-3.5 w-3.5" />
                                                {exp.period}
                                            </span>
                                        </div>

                                        <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, i) => (
                                                <span 
                                                    key={i} 
                                                    className="px-2.5 py-1 rounded-md bg-background border border-border text-xs font-medium text-muted-foreground transition-colors group-hover:border-primary/30"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
