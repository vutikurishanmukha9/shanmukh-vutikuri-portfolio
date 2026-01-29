import { useEffect, useState, useRef } from 'react';
import { Calendar, MapPin, Cloud, Train, CircleDot, Hourglass } from 'lucide-react';

export const CareerJourneySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

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
        <section ref={sectionRef} id="career" className="py-10 lg:py-14 relative overflow-hidden">
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
                        Every destination is a new opportunity to learn and grow
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
                </div>

                {/* Journey Track */}
                <div className="max-w-4xl mx-auto relative">
                    {/* The Railway Track */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary/20 rounded-full" />
                    </div>

                    {/* Experience Stops */}
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative mb-16 ${isVisible ? 'slide-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${0.2 + index * 0.2}s` }}
                        >
                            {/* Station Stop Marker */}
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center border-4 glass border-primary/30 hover:border-primary/60 transition-all duration-500">
                                    <CircleDot className="h-5 w-5 text-primary" />
                                </div>
                            </div>

                            {/* Experience Card */}
                            <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-[55%] md:pr-12' : 'md:ml-[55%] md:pl-12'
                                }`}>
                                <div className="group glass rounded-2xl p-6 lg:p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold glass text-muted-foreground mb-2 inline-block">
                                            Completed Stop
                                        </span>
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

                    {/* Current Position - Waiting for Next Stop */}
                    <div className={`relative pt-4 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                        {/* Current position marker with glow */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                            <div className="relative">
                                <div className="absolute inset-0 w-14 h-14 -translate-x-1 -translate-y-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 animate-ping" />
                                <div className="w-12 h-12 rounded-full flex items-center justify-center border-4 bg-gradient-to-br from-primary to-secondary border-background shadow-lg shadow-primary/50">
                                    <Hourglass className="h-5 w-5 text-background" />
                                </div>
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full whitespace-nowrap shadow-lg">
                                    NOW HERE
                                </span>
                            </div>
                        </div>

                        {/* Waiting for next stop card */}
                        <div className="ml-20 md:ml-[55%] md:pl-12">
                            <div className="glass rounded-2xl p-6 lg:p-8 border-2 border-dashed border-primary/30">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                        <Train className="h-7 w-7 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-foreground font-display">Waiting at the Station</p>
                                        <p className="text-muted-foreground">Looking for the next exciting destination...</p>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground mt-4 italic">
                                    The journey never ends — just new stops to explore!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
