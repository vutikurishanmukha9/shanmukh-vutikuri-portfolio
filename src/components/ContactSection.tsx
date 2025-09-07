import { ContactForm } from '@/components/ContactForm';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Phone } from 'lucide-react';

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vutikurishanmukh17@gmail.com',
      href: 'mailto:vutikurishanmukh17@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
    },
    {
      icon: Phone,
      label: 'Available for',
      value: 'Remote & On-site Work',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/vutikurishanmukha9',
      icon: Github,
      color: 'hover:text-gray-600',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/shanmukha-vutikuri',
      icon: Linkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'Codolio',
      url: 'https://codolio.com/profile/Shanmukh1122',
      icon: ExternalLink,
      color: 'hover:text-purple-600',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can build something amazing together.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <contact.icon className="h-5 w-5 text-primary" />
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
              <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-card/50 hover:bg-card border border-border hover:border-primary rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${social.color}`}
                  >
                    <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};