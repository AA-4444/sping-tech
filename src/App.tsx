
import ScrollToTop from "@/components/ScrollToTop";


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlatformsPage from "./pages/Platforms"; 
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import AboutPage from "./pages/About";
import OurTeamPage from "./pages/OurTeam";
import PlatformsShowcasePage from "./pages/PlatformsShowcasePage";
import CasinoPlatform from "./pages/CasinoPlatform";
import CrmPlatform from "./pages/CrmPlatform";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import CookiesPolicyPage from "./pages/CookiesPolicy";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/platforms" element={<PlatformsPage />} /> 
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/team" element={<OurTeamPage />} />
          <Route path="/viewplatform" element={< PlatformsShowcasePage />} />
          <Route path="/casino" element={< CasinoPlatform />} />
          <Route path="/crm" element={< CrmPlatform />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/cookies" element={<CookiesPolicyPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;