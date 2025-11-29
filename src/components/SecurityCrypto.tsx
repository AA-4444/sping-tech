// src/components/ServicesSecurityCrypto.tsx
import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Check,
  Copy,
  Wrench,
  LifeBuoy,
  ShieldCheck,
  Lock,
  Bitcoin,
  EyeOff,
  WalletMinimal,
  Fingerprint,
} from "lucide-react";

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

const points = [
  {
	icon: ShieldCheck,
	title: "Enterprise-grade security",
	text: "Multi-layer protection, risk scoring, anti-fraud systems and infrastructure hardened for high-load casino operations.",
  },
  {
	icon: EyeOff,
	title: "Privacy by design",
	text: "We minimize stored data, segment access, and provide tools to meet modern privacy regulations and internal compliance.",
  },
  {
	icon: Bitcoin,
	title: "Crypto-first payments",
	text: "Deep crypto integration: deposits, withdrawals, on-ramp/off-ramp flows, and reporting tailored for digital assets.",
  },
  {
	icon: WalletMinimal,
	title: "Flexible payment stack",
	text: "Fiat + crypto, multiple PSPs, smart routing and configurable limits per region, brand, and risk profile.",
  },
];

const highlights = [
  "End-to-end encryption",
  "Advanced risk & compliance tools",
  "Real-time monitoring",
  "Full audit trails",
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
	  onClick={() => setIsFlipped((v) => !v)}
	>
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

const ServicesSecurityCrypto = () => {
  return (
	<section className="relative py-24 bg-secondary/20 overflow-hidden">
	  {/* === ОБЩИЙ ФОН: ГЛОУ + ЛИНИИ ДЛЯ ОБЕИХ ПОДСЕКЦИЙ === */}
	  <div className="pointer-events-none absolute inset-0 z-0 opacity-90">
		{/* мягкие свечения */}
		<div className="absolute -top-24 right-[-80px] w-72 h-72 rounded-full bg-primary/15 blur-3xl animate-glow" />
		<div className="absolute bottom-[-120px] -left-16 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl animate-glow" />

		{/* абстрактные линии (другая траектория, немного “волнами”) */}
		<svg
		  className="absolute inset-0 w-full h-full"
		  viewBox="0 0 1400 1200"
		  preserveAspectRatio="none"
		  fill="none"
		  stroke="currentColor"
		  strokeWidth="1"
		  strokeLinecap="round"
		  style={{ color: "rgba(250,204,21,0.20)" }}
		>
		  {Array.from({ length: 22 }).map((_, i) => {
			const offsetY = i * 40 - 260;
			return (
			  <path
				key={i}
				d={`
				  M -100 ${200 + offsetY}
				  C 250 ${80 + offsetY},
					520 ${260 + offsetY},
					880 ${180 + offsetY}
				  S 1450 ${520 + offsetY},
					1500 ${900 + offsetY}
				`}
			  />
			);
		  })}
		</svg>
	  </div>

	  {/* === КОНТЕНТ === */}
	  <div className="relative z-10">
		{/* SERVICES */}
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

		{/* SECURITY + CRYPTO */}
		<div className="mt-20">
		  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid gap-12 lg:grid-cols-2 items-center">
			  {/* Left: Text & badges */}
			  <div className="space-y-6 animate-fade-in-up">
				<div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1 text-xs sm:text-sm uppercase tracking-[0.2em] text-primary">
				  <Lock className="w-4 h-4" />
				  Privacy & Crypto First
				</div>

				<h2 className="text-4xl sm:text-5xl font-bold leading-tight">
				  Built for
				  <span className="text-primary block">
					privacy-driven casino brands
				  </span>
				</h2>

				<p className="text-lg text-muted-foreground max-w-xl">
				  Our platform is designed for operators where trust, data protection and
				  crypto-native payments are not just features, but core business requirements.
				</p>

				<div className="grid grid-cols-2 gap-3 max-w-md">
				  {highlights.map((item, idx) => (
					<div
					  key={idx}
					  className="flex items-center gap-2 rounded-xl border border-border/60 bg-card/70 px-3 py-2 text-sm text-foreground/90 animate-fade-in"
					  style={{ animationDelay: `${idx * 0.08}s` }}
					>
					  <Fingerprint className="w-4 h-4 text-primary" />
					  <span>{item}</span>
					</div>
				  ))}
				</div>

				<p className="text-sm text-muted-foreground/80">
				  We combine strict security practices with smooth UX, so your players feel
				  protected without friction at every step of the journey.
				</p>
			  </div>

			  {/* Right: Cards with icons */}
			  <div className="grid gap-4 sm:gap-6 md:grid-cols-2 animate-slide-in-right">
				{points.map((item, idx) => {
				  const Icon = item.icon;
				  return (
					<div
					  key={idx}
					  className="group rounded-2xl border border-border/70 bg-card/80 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_0_40px_hsl(var(--primary)/0.18)]"
					>
					  <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
						<Icon className="w-6 h-6 text-primary" />
					  </div>
					  <h3 className="mb-2 text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
						{item.title}
					  </h3>
					  <p className="text-sm sm:text-base text-muted-foreground">
						{item.text}
					  </p>
					</div>
				  );
				})}
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</section>
  );
};

export default ServicesSecurityCrypto;