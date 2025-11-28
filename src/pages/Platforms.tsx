import Navigation from "@/components/Navigation";
import PlatformHero from "@/components/PlatformHero";
import PlatformConfigurator from "@/components/PlatformConfigurator";
import DesignPrinciples from "@/components/DesignPrinciples";
import SecurityHighlights from "@/components/SecurityHighlights";
import Footer from "@/components/Footer";

const PlatformsPage = () => {
  return (
	<div className="min-h-screen bg-background text-foreground">
	  <Navigation />
	  <main className="pt-16">
		<PlatformHero />
		<PlatformConfigurator />
		<DesignPrinciples />
		<SecurityHighlights />
	  </main>
	  
 < Footer />

	</div>
  );
};

export default PlatformsPage;