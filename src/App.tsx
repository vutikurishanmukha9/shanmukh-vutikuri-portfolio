import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { SkillFilterProvider } from "@/context/SkillFilterContext";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { HapticProvider } from "@/components/providers/HapticProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ActiveSkillFilterDock } from "@/components/ActiveSkillFilterDock";
import { CustomCursor } from "@/components/ui/CustomCursor";
import Index from "./pages/Index";
import ProductDesigner from "./pages/ProductDesigner";
import NotFound from "./pages/NotFound";
import CaseStudyUnicorn from "./pages/CaseStudyUnicorn";
import CaseStudyAdidas from "./pages/CaseStudyAdidas";
import CaseStudySalesReport from "./pages/CaseStudySalesReport";
import ProjectContextLy from "./pages/ProjectContextLy";

const queryClient = new QueryClient();

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isDesignRoute = location.pathname.startsWith("/design") || location.pathname.startsWith("/product-design");

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      {!isDesignRoute && <ActiveSkillFilterDock />}
      <Toaster />
      {children}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <HapticProvider>
        <SkillFilterProvider>
          <SmoothScrollProvider>
            <TooltipProvider>
              <BrowserRouter>
                <LayoutWrapper>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/design" element={<ProductDesigner />} />
                    <Route path="/product-design" element={<ProductDesigner />} />
                    <Route path="/case-study/unicorn" element={<CaseStudyUnicorn />} />
                    <Route path="/case-study/adidas" element={<CaseStudyAdidas />} />
                    <Route path="/case-study/sales" element={<CaseStudySalesReport />} />
                    <Route path="/case-study/sales-report" element={<CaseStudySalesReport />} />
                    <Route path="/project/contextly" element={<ProjectContextLy />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </LayoutWrapper>
              </BrowserRouter>
            </TooltipProvider>
          </SmoothScrollProvider>
        </SkillFilterProvider>
      </HapticProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
