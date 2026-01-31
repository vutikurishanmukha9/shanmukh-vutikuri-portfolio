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
import { GithubSection } from '@/components/GithubSection';
import { PageLoader } from '@/components/PageLoader';

const Index = () => {

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageLoader />

      {/* Sticky Header Container */}
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full">
        {/* News Ticker at Top */}
        <div className="w-full relative z-50">
          <NewsTicker items={defaultStatusItems} speed={20} />
        </div>

        {/* Navigation Wrapper - Pushed down slightly */}
        <div className="w-full mt-4 flex justify-center relative z-40">
          <Navigation />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <GrindingActivitySection />
        <SkillsSection />
        <CareerJourneySection />
        <ProjectsSection />
        <GithubSection />
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
