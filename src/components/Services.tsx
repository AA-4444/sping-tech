// src/components/Services.tsx
import { Card } from "@/components/ui/card";
import { Check, Copy, Wrench, LifeBuoy } from "lucide-react";
import { useState } from "react";

type Service = {
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  {
    title: "Platform Cloning",
    description:
      "Exact replicas of successful casino platforms with proven performance and reliability.",
    features: [
      "100% functional replica",
      "Proven game mechanics",
      "Established user flows",
      "Complete backend systems",
    ],
    icon: Copy,
  },
  {
    title: "Custom Modifications",
    description:
      "Tailor every aspect to match your brand identity and business requirements.",
    features: [
      "Brand customization",
      "Feature additions",
      "UI/UX modifications",
      "Payment integrations",
    ],
    icon: Wrench,
  },
  {
    title: "Full Support",
    description:
      "Enterprise-level support and maintenance to ensure smooth operations.",
    features: [
      "24/7 technical support",
      "Regular updates",
      "Security patches",
      "Performance optimization",
    ],
    icon: LifeBuoy,
  },
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className="relative h-[340px] cursor-pointer"
      style={{
        perspective: "1200px",
        animationDelay: `${index * 0.1}s`,
      }}
      // flip ТОЛЬКО по клику
      onClick={() => setIsFlipped((v) => !v)}
    >
      {/* Внутренняя часть, которую вращаем */}
      <div
        className="
          relative w-full h-full
          transition-transform duration-500
          [transform-style:preserve-3d]
          [will-change:transform]
        "
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <Card
          className="
            absolute inset-0 h-full
            rounded-2xl
            bg-card
            border border-yellow-400/50
            p-8
            flex flex-col items-center justify-center text-center
            group
            hover:border-yellow-400
            hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]
            transition-all duration-300
            [backface-visibility:hidden]
            [transform:rotateY(0deg)]
            [will-change:transform]
            before:absolute before:inset-0
            before:bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,0.12),transparent_60%)]
            before:pointer-events-none
          "
        >
          <div className="mb-4 flex items-center justify-center">
            <div className="h-14 w-14 rounded-2xl border border-yellow-400/60 bg-yellow-400/10 flex items-center justify-center">
              <Icon className="w-7 h-7 text-yellow-400" />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            {service.description}
          </p>
        </Card>

        {/* BACK */}
        <Card
          className="
            absolute inset-0 h-full
            rounded-2xl
            bg-card
            border border-yellow-400/40
            p-8
            flex flex-col
            hover:border-yellow-400/70
            hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]
            transition-all duration-300
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
            [will-change:transform]
            before:absolute before:inset-0
            before:bg-[radial-gradient(circle_at_70%_80%,rgba(250,204,21,0.10),transparent_60%)]
            before:pointer-events-none
          "
        >
          <h3 className="text-xl font-semibold mb-3 text-yellow-400">
            {service.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4">
            {service.description}
          </p>

          <ul className="space-y-3 text-sm mt-auto">
            {service.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span className="text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-yellow-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What We <span className="text-yellow-400">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete casino platform solutions designed for rapid deployment and maximum profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} service={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;