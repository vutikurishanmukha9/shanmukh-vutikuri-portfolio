import aboutPhoto from '@/assets/about-photo.jpg';

export const AboutSection = () => {
  const highlights = [
    {
      number: '92%',
      label: 'AI Model Accuracy',
    },
    {
      number: '99.9%',
      label: 'AWS Uptime',
    },
    {
      number: '85%',
      label: 'Efficiency Improvement',
    },
    {
      number: '3',
      label: 'Successful Project Completions',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden hover-lift">
                <img
                  src={aboutPhoto}
                  alt="About Vutikuri Shanmukha"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full border-2 border-primary/30 rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a <span className="text-primary font-semibold">B.Tech graduate in Electronics & Communication Engineering</span> with 
                a passionate focus on artificial intelligence, cloud technologies, and data analytics.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a <span className="text-primary font-semibold">published researcher</span> in IoT-driven smart systems, 
                I bring deep expertise in AWS deployments and the Python data ecosystem. My experience spans 
                machine learning model development, cloud infrastructure optimization, and data-driven solution architecture.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am actively seeking opportunities to contribute to innovative teams where I can leverage my technical 
                skills to build intelligent solutions that drive meaningful impact.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-card/50 border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {highlight.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {highlight.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};