import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { CareerJourneySection } from '@/components/CareerJourneySection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { PublicationsSection } from '@/components/PublicationsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <CareerJourneySection />
          <ProjectsSection />
          <CertificationsSection />
          <PublicationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default Index;
