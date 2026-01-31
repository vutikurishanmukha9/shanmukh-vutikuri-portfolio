
import { useRef } from 'react';
import { Calendar, Briefcase, MapPin, CircleDot, ChevronRight, GraduationCap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';

export const CareerJourneySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const experiences = [
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
        <SectionWrapper id="career" className="py-20 lg:py-28 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={containerRef}>
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4"
                    >
                        My Journey
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-bold font-display mb-4"
                    >
                        Career <span className="text-gradient">Timeline</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        The path that led me here
                    </motion.p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Animated Central Track Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-ml-[1px] h-full z-0">
                        {/* Static background track */}
                        <div className="w-full h-full bg-border/40 dashed-line" />

                        {/* Animated fill track */}
                        <motion.div
                            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-secondary to-primary"
                        />
                    </div>

                    <div className="space-y-16">
                        {/* Current/Future Stop Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-background border-4 border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] animate-pulse">
                                    <div className="w-4 h-4 rounded-full bg-primary" />
                                </div>
                            </div>
                            <div className="ml-14 md:ml-[55%] md:pl-12 pt-1">
                                <div className="inline-block rounded-xl bg-primary/10 border border-primary/20 p-4 backdrop-blur-sm">
                                    <h3 className="text-lg font-bold text-foreground">Next Value Stop</h3>
                                    <p className="text-sm text-muted-foreground">Open to opportunities where I can make an impact.</p>
                                </div>
                            </div>
                        </motion.div>

                        {experiences.map((exp, index) => {
                            const isEducation = (exp as any).isEducation;
                            const Icon = isEducation ? GraduationCap : Briefcase;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative z-10"
                                >
                                    {/* Station Stop Marker */}
                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 top-8 md:top-1/2 md:-translate-y-1/2">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center border-4 glass border-primary/30 bg-background hover:scale-110 transition-transform duration-300 hover:border-primary">
                                            <Icon className="h-5 w-5 text-primary" />
                                        </div>
                                    </div>

                                    {/* Experience Card */}
                                    <div className={`ml-14 md:ml-0 ${index % 2 === 0 ? 'md:mr-[55%] md:pr-12 md:text-right' : 'md:ml-[55%] md:pl-12'}`}>
                                        <div className={`
                       group glass rounded-2xl p-6 lg:p-8 border-l-4 
                       ${index % 2 === 0 ? 'md:border-l-0 md:border-r-4 border-l-primary/50 md:border-r-primary/50' : 'border-l-primary/50'}
                       hover:border-primary transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 relative overflow-hidden
                    `}>
                                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-xs font-medium text-secondary mb-3 w-fit">
                                                    <Calendar className="h-3 w-3" />
                                                    {exp.period}
                                                </span>

                                                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>

                                                <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                                    <Briefcase className="h-3.5 w-3.5" />
                                                    <span>{exp.company}</span>
                                                    <span className="w-1 h-1 rounded-full bg-border" />
                                                    <MapPin className="h-3.5 w-3.5" />
                                                    <span>{exp.location}</span>
                                                </div>

                                                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                                                    {exp.description}
                                                </p>

                                                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                                    {exp.skills.map((skill, i) => (
                                                        <span key={i} className="px-2 py-1 rounded-md bg-background/50 border border-border/50 text-xs text-muted-foreground group-hover:border-primary/20 transition-colors">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
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
