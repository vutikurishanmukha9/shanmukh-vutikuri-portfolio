import { Navigation } from '@/components/Navigation';
import { NewsTicker, defaultStatusItems } from '@/components/NewsTicker';
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
    <div className="min-h-screen bg-background flex flex-col">
      <PageLoader />

      {/* Sticky Header: Nav + Ticker */}
      <header className="sticky top-0 z-50 flex flex-col items-center w-full">
        {/* Glass background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80 backdrop-blur-xl" />

        {/* Navigation - Centered */}
        <div className="relative z-10 w-full">
          <Navigation />
        </div>

        {/* News Ticker - Full Width */}
        <div className="relative z-10 w-full">
          <NewsTicker items={defaultStatusItems} speed={10} />
        </div>

        {/* Bottom gradient border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Soft shadow below header */}
        <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-b from-background/20 to-transparent pointer-events-none" />
      </header>

      {/* Main Content */}
      <main className="flex-1">
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
      <Toaster />
    </div>
  );
};

export default Index;
