import { useState, useRef } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vutikurishanmukh17@gmail.com',
      href: 'mailto:vutikurishanmukh17@gmail.com',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/vutikurishanmukha9',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/shanmukha-vutikuri',
      icon: Linkedin,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/vutikurishanmukh9/',
      icon: ExternalLink,
    },
  ];

  return (
    <SectionWrapper id="contact" className="py-24 bg-background border-t border-border/40">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border shadow-sm mb-6"
          >
            <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Connect</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Ready to collaborate on your next project? Let's discuss how we can build something amazing together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-panel p-8 rounded-3xl border border-border/60">
              <h3 className="text-2xl font-semibold text-foreground font-display mb-4 tracking-tight">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, and potential collaborations.
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                        <div
                            key={index}
                            className="group flex items-center gap-4 p-4 rounded-2xl border border-border bg-background hover:border-primary/40 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{contact.label}</p>
                                {contact.href !== '#' ? (
                                <a
                                    href={contact.href}
                                    className="text-foreground font-medium hover:text-primary transition-colors break-all"
                                >
                                    {contact.value}
                                </a>
                                ) : (
                                <p className="text-foreground font-medium">{contact.value}</p>
                                )}
                            </div>
                        </div>
                    )
                })}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Social Profiles</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 rounded-2xl border border-border bg-background hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 shadow-sm"
                        >
                            <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                        </a>
                      );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="glass-panel p-8 rounded-3xl border border-border/60 h-full"> 
                <h3 className="text-2xl font-semibold text-foreground font-display mb-8 tracking-tight">Send a Message</h3>
                <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};