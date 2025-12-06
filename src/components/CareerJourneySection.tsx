import { useEffect, useState, useRef } from 'react';
import { Briefcase, Calendar, MapPin, Cloud, Award } from 'lucide-react';

export const CareerJourneySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const experiences = [
        {
            title: 'Cloud Computing Engineering Intern',
            company: 'EXCELr EdTech',
            location: 'Remote',
            period: 'Dec 2024 – Apr 2025',
            type: 'Internship',
            description: 'Gaining hands-on experience in cloud computing technologies, working with AWS services, and developing cloud-native solutions.',
            skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Infrastructure'],
            icon: Cloud,
            current: true,
        },
        {
            title: 'Cloud Engineering Intern',
            company: 'Brain O Vision',
            location: 'Remote',
            period: 'June 2024 – Aug 2024',
            type: 'Internship',
            description: 'Worked on cloud infrastructure projects, learned cloud deployment strategies, and gained practical experience with cloud platforms.',
            skills: ['Cloud Computing', 'Python', 'AWS', 'Automation'],
            icon: Cloud,
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
            {/* Background elements */}
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
                        Experience
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
                        Career <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        My professional growth path through impactful internship experiences in cloud computing
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30" />

                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex items-start gap-8 mb-12 ${isVisible ? 'slide-up' : 'opacity-0'
                                    }`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {/* Timeline dot */}
                                <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 z-10`}>
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${exp.current
                                            ? 'bg-gradient-to-br from-primary to-secondary animate-pulse'
                                            : 'glass border-2 border-primary/30'
                                        }`}>
                                        <exp.icon className={`h-7 w-7 ${exp.current ? 'text-background' : 'text-primary'}`} />
                                    </div>
                                    {exp.current && (
                                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
                                    )}
                                </div>

                                {/* Content card */}
                                <div className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                                    }`}>
                                    <div className="group glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                                        {/* Header */}
                                        <div className="flex items-start justify-between gap-4 mb-4">
                                            <div>
                                                {exp.current && (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full mb-2">
                                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                                        Current
                                                    </span>
                                                )}
                                                <h3 className="text-xl font-bold text-foreground font-display group-hover:text-gradient transition-colors duration-300">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-primary font-medium">{exp.company}</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className="inline-block px-3 py-1 glass text-xs text-muted-foreground rounded-lg">
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Meta info */}
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="h-4 w-4 text-primary" />
                                                {exp.period}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="h-4 w-4 text-primary" />
                                                {exp.location}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-lg font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Journey start indicator */}
                    <div className={`relative flex justify-center ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/30 to-transparent" />
                        <div className="mt-16 glass rounded-full px-6 py-3 flex items-center gap-2">
                            <Award className="h-5 w-5 text-primary" />
                            <span className="text-sm text-muted-foreground">Learning & Growing</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
