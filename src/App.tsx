
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomCursor } from "@/components/CustomCursor";
import { ThemeProvider } from "@/context/ThemeContext";
import { SkillFilterProvider } from "@/context/SkillFilterContext";
import { LoadingScreen } from "@/components/LoadingScreen";
import { BackgroundCanvas } from "@/components/ui/background-canvas";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { GithubSection } from './components/GithubSection';
import { CareerJourneySection } from './components/CareerJourneySection';
import { ProjectsSection } from './components/ProjectsSection';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <SkillFilterProvider>
        <TooltipProvider>
          <BackgroundCanvas />
          <LoadingScreen />
          <CustomCursor />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={
                <>
                  <Index />
                  <ProjectsSection />
                  <GithubSection />
                  <CareerJourneySection />
                </>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </SkillFilterProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
