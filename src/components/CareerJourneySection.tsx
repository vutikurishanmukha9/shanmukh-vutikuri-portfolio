import { useEffect, useState, useRef } from 'react';
import { Calendar, MapPin, Cloud, Rocket, GraduationCap, Zap } from 'lucide-react';

export const CareerJourneySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const experiences = [
        {
            title: 'Cloud Computing Engineering Intern',
            company: 'EXCELr EdTech',
            location: 'Remote',
            period: 'Dec 2024 – Apr 2025',
            duration: '5 months',
            description: 'Gaining hands-on experience in cloud computing technologies, working with AWS services, and developing cloud-native solutions.',
            skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Infrastructure'],
            icon: Cloud,
            color: 'from-cyan-500 to-blue-600',
            bgColor: 'bg-cyan-500/10',
            current: true,
        },
        {
            title: 'Cloud Engineering Intern',
            company: 'Brain O Vision',
            location: 'Remote',
            period: 'June 2024 – Aug 2024',
            duration: '3 months',
            description: 'Worked on cloud infrastructure projects, learned cloud deployment strategies, and gained practical experience with cloud platforms.',
            skills: ['Cloud Computing', 'Python', 'AWS', 'Automation'],
            icon: Cloud,
            color: 'from-purple-500 to-pink-600',
            bgColor: 'bg-purple-500/10',
            current: false,
        },
    ];

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
        <section ref={sectionRef} id="career" className="py-24 lg:py-32 relative overflow-hidden">
            {/* Animated background orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-20 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-6">
                        <Rocket className="h-4 w-4" />
                        Professional Experience
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                        My Career <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Building expertise in cloud computing through hands-on internship experiences
                    </p>
                </div>

                {/* Experience Cards - Stacked Layout */}
                <div className="max-w-5xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`group relative ${isVisible ? 'slide-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            {/* Glowing border on hover */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.color} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />

                            {/* Main Card */}
                            <div className="relative glass rounded-3xl p-8 lg:p-10 hover:border-transparent transition-all duration-500">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Left Section - Icon & Timeline */}
                                    <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-6">
                                        {/* Icon Container */}
                                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                            <exp.icon className="h-10 w-10 text-white" />
                                            {exp.current && (
                                                <span className="absolute -top-2 -right-2 flex h-5 w-5">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                                    <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-background" />
                                                </span>
                                            )}
                                        </div>

                                        {/* Duration Badge */}
                                        <div className={`px-4 py-2 rounded-xl ${exp.bgColor} text-sm font-medium whitespace-nowrap`}>
                                            <span className="text-gradient font-bold">{exp.duration}</span>
                                        </div>
                                    </div>

                                    {/* Right Section - Content */}
                                    <div className="flex-1 space-y-5">
                                        {/* Header */}
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                                            <div>
                                                {exp.current && (
                                                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full mb-3 border border-green-500/30">
                                                        <Zap className="h-3 w-3" />
                                                        CURRENTLY WORKING
                                                    </span>
                                                )}
                                                <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-display group-hover:text-gradient transition-colors duration-300">
                                                    {exp.title}
                                                </h3>
                                                <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mt-1`}>
                                                    {exp.company}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Meta Info */}
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg">
                                                <Calendar className="h-4 w-4 text-primary" />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg">
                                                <MapPin className="h-4 w-4 text-primary" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-muted-foreground leading-relaxed text-base">
                                            {exp.description}
                                        </p>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {exp.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className={`px-4 py-2 rounded-xl text-sm font-medium ${exp.bgColor} border border-transparent hover:border-primary/30 transition-all duration-300 hover:scale-105 cursor-default`}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${exp.color} opacity-5 rounded-tl-full pointer-events-none`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Journey Indicator */}
                <div className={`text-center mt-16 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                    <div className="inline-flex items-center gap-3 px-6 py-4 glass rounded-2xl">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <GraduationCap className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-muted-foreground">Continuous Learning</p>
                            <p className="font-semibold text-foreground">Building Cloud Expertise</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
