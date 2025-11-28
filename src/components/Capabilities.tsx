import { Card } from "@/components/ui/card";
import { Zap, Shield, Globe, Paintbrush, Coins, Users } from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Launch your casino platform in weeks, not months. Pre-built solutions ready to customize."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security protocols to protect your business and users."
  },
  {
    icon: Globe,
    title: "Multi-Currency",
    description: "Support for multiple currencies and payment methods for global reach."
  },
  {
    icon: Paintbrush,
    title: "Full Customization",
    description: "Every visual element and feature can be tailored to your specifications."
  },
  {
    icon: Coins,
    title: "Proven Economics",
    description: "Replicate successful revenue models and optimize for maximum profitability."
  },
  {
    icon: Users,
    title: "Player Management",
    description: "Advanced CRM and analytics to understand and engage your player base."
  }
];

const Capabilities = () => {
  return (
    <section className="py-24 relative overflow-hidden transition-all duration-700">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade technology stack powering your success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground">
                  {capability.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;