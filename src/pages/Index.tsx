import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { GrindingActivitySection } from '@/components/GrindingActivitySection';
import { SkillsSection } from '@/components/SkillsSection';
import { CareerJourneySection } from '@/components/CareerJourneySection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { PublicationsSection } from '@/components/PublicationsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { PageLoader } from '@/components/PageLoader';

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <PageLoader />
      <Navigation />
      <div className="pt-16">
        <main>
          <HeroSection />
          <AboutSection />
          <GrindingActivitySection />
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
