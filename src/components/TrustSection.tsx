// src/components/TrustSection.tsx
import mapImage from "@/assets/map.png";

const TrustSection = () => {
  return (
	<section className="py-20 relative overflow-hidden bg-background">
	  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
		
		
		<h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
		  Trust Your <span className="text-primary">Pit Crew</span>
		</h2>

		
		<div className="relative w-full overflow-hidden ">
		  <img
			src={mapImage}
			alt="World Map"
			className="w-full h-full object-cover opacity-95"
		  />

		  
		  <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/30" />
		</div>

		
		<p className="max-w-3xl mx-auto mt-8 text-center text-muted-foreground text-lg leading-relaxed">
		  Sping.tech provides a tried-and-tested foundation for uncovering new
		  growth opportunities in the high-stakes world of iGaming.
		</p>
	  </div>
	</section>
  );
};

export default TrustSection;