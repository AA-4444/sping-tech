import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import SecurityCrypto from "@/components/SecurityCrypto";
import PlatformConfigurator from "@/components/PlatformConfigurator";
import DesignPrinciples from "@/components/DesignPrinciples";
import SecurityHighlights from "@/components/SecurityHighlights";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import TrustSection from "@/components/TrustSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <SecurityCrypto />
      <Capabilities />
      <TrustSection />
      < PartnersSection /> 
      <FAQ />
      <CTA />
      
      
      {/* Footer */}
      < Footer />
    </div>
  );
};

export default Index;