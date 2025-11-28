import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden transition-all duration-700">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Ready to Launch Your
            <span className="block text-primary mt-2">Casino Platform?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Join successful operators who trust our proven casino solutions. Get started today with a personalized consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-300 hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] hover:scale-105"
            >
              Schedule Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary/50 hover:border-primary text-foreground hover:bg-primary/10 transition-all duration-300"
            >
              View Pricing
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-glow"></div>
              <span>Licensed & Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-glow"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-glow"></div>
              <span>Proven Track Record</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;