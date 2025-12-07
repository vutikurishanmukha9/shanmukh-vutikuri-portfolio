import { useEffect, useState, useRef } from 'react';
import { Calendar, MapPin, Cloud, Train, CircleDot, ArrowRight } from 'lucide-react';

export const CareerJourneySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const experiences = [
        {
            title: 'Cloud Computing Engineering Intern',
            company: 'EXCELr EdTech',
            location: 'Remote',
            period: 'Dec 2024 – Apr 2025',
            description: 'Gaining hands-on experience in cloud computing technologies, working with AWS services, and developing cloud-native solutions.',
            skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Infrastructure'],
            current: true,
        },
        {
            title: 'Cloud Engineering Intern',
            company: 'Brain O Vision',
            location: 'Remote',
            period: 'June 2024 – Aug 2024',
            description: 'Worked on cloud infrastructure projects, learned cloud deployment strategies, and gained practical experience with cloud platforms.',
            skills: ['Cloud Computing', 'Python', 'AWS', 'Automation'],
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
            {/* Background */}
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center mb-20 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-6">
                        <Train className="h-4 w-4" />
                        Professional Experience
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
                        Career <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Every destination is a new opportunity to learn and grow in cloud computing
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
                </div>

                {/* Journey Track */}
                <div className="max-w-4xl mx-auto relative">
                    {/* The Railway Track - Animated gradient line */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary/20 rounded-full" />
                        {/* Moving train indicator */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50 animate-bounce"
                            style={{ animationDuration: '2s' }} />
                    </div>

                    {/* Experience Stops */}
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative mb-16 last:mb-0 ${isVisible ? 'slide-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${0.2 + index * 0.2}s` }}
                        >
                            {/* Station Stop Marker */}
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                                <div className={`relative ${exp.current ? 'scale-110' : ''}`}>
                                    {/* Outer glow ring for current */}
                                    {exp.current && (
                                        <div className="absolute inset-0 w-14 h-14 -translate-x-1 -translate-y-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 animate-ping" />
                                    )}
                                    {/* Station marker */}
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${exp.current
                                            ? 'bg-gradient-to-br from-primary to-secondary border-background shadow-lg shadow-primary/50'
                                            : 'glass border-primary/30 hover:border-primary/60'
                                        }`}>
                                        {exp.current ? (
                                            <Cloud className="h-5 w-5 text-background" />
                                        ) : (
                                            <CircleDot className="h-5 w-5 text-primary" />
                                        )}
                                    </div>
                                    {/* Current badge */}
                                    {exp.current && (
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full whitespace-nowrap shadow-lg">
                                            NOW HERE
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Experience Card */}
                            <div className={`ml-20 md:ml-0 ${index % 2 === 0
                                    ? 'md:mr-[55%] md:pr-12'
                                    : 'md:ml-[55%] md:pl-12'
                                }`}>
                                <div className="group glass rounded-2xl p-6 lg:p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${exp.current
                                                    ? 'bg-gradient-to-r from-primary to-secondary text-background'
                                                    : 'glass text-muted-foreground'
                                                }`}>
                                                {exp.current ? 'Current Stop' : 'Completed Stop'}
                                            </span>
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-bold text-foreground font-display group-hover:text-gradient transition-colors duration-300">
                                            {exp.title}
                                        </h3>
                                        <p className="text-primary font-semibold text-lg mt-1">{exp.company}</p>
                                    </div>

                                    {/* Meta info */}
                                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg">
                                            <Calendar className="h-4 w-4 text-primary" />
                                            {exp.period}
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg">
                                            <MapPin className="h-4 w-4 text-primary" />
                                            {exp.location}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-foreground leading-relaxed mb-5">
                                        {exp.description}
                                    </p>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-lg font-medium hover:bg-primary/20 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Journey Continues Indicator */}
                    <div className={`relative pt-8 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                        {/* End of track marker */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                            <div className="w-12 h-12 rounded-full glass border-2 border-dashed border-primary/40 flex items-center justify-center">
                                <ArrowRight className="h-5 w-5 text-primary animate-pulse" />
                            </div>
                        </div>

                        {/* Next destination card */}
                        <div className="ml-20 md:ml-auto md:mr-[55%] md:pr-12">
                            <div className="glass rounded-xl p-5 border-dashed border-2 border-primary/20 opacity-70 hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                        <Train className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">Next Destination</p>
                                        <p className="text-sm text-muted-foreground">The journey continues...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
