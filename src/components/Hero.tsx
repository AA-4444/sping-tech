import { Button } from "@/components/ui/button";
import heroImage from "@/assets/bg5.png";
import { NavLink } from "@/components/NavLink";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-background to-navy-light"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        
        {/* Background Image with Overlay */}
        <img 
          src={heroImage} 
          alt="Premium Casino Platform" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, hsl(var(--gold) / 0.1) 0%, transparent 40%)`
        }}></div>
        
        {/* Animated glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        
        {/* Bottom gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Sping.tech IGaming
            <span className="block text-primary mt-2">Platform Solutions</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Software development company specializing in building iGaming platforms, casino systems, and custom digital products for operators worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <NavLink
          to="/viewplatform"
          className="
            inline-flex items-center justify-center
            text-sm sm:text-base
            px-6 py-3
            bg-primary
            text-black
            border border-primary
            rounded-lg
            font-medium
            shadow-[0_0_40px_hsl(var(--primary)/0.25)]
            hover:bg-primary/90
            hover:border-primary/90
            transition-all duration-300
            hover:shadow-[0_0_55px_hsl(var(--primary)/0.35)]
          "
        >
          View Platforms
        </NavLink>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary/50 hover:border-primary text-foreground hover:bg-primary transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;