import { useEffect, useState, useRef } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Github, Linkedin, Mail, ExternalLink, Phone } from 'lucide-react';

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vutikurishanmukh17@gmail.com',
      href: 'mailto:vutikurishanmukh17@gmail.com',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Phone,
      label: 'Available for',
      value: 'Remote & On-site Work',
      href: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/vutikurishanmukha9',
      icon: Github,
      color: 'hover:border-white/50 hover:shadow-white/20',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/shanmukha-vutikuri',
      icon: Linkedin,
      color: 'hover:border-blue-500/50 hover:shadow-blue-500/20',
    },
    {
      name: 'Codolio',
      url: 'https://codolio.com/profile/Shanmukh1122',
      icon: ExternalLink,
      color: 'hover:border-purple-500/50 hover:shadow-purple-500/20',
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
    <section ref={sectionRef} id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            Let's Connect
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can build something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold text-foreground font-display mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, and potential collaborations.
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 glass rounded-xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    {contact.href !== '#' ? (
                      <a
                        href={contact.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 glass rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                  >
                    <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};