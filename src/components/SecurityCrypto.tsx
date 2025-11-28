import {
  ShieldCheck,
  Lock,
  Bitcoin,
  EyeOff,
  WalletMinimal,
  Fingerprint,
} from "lucide-react";

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

const SecurityCrypto = () => {
  return (
	<section className="py-24 bg-secondary/20 relative overflow-hidden">
	  {/* Soft animated background */}
	  <div className="pointer-events-none absolute inset-0 opacity-40">
		<div className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-primary/15 blur-3xl animate-glow" />
		<div className="absolute bottom-0 -left-16 w-80 h-80 rounded-full bg-gold/10 blur-3xl animate-glow" />
	  </div>

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
			  <span className="text-primary block">privacy-driven casino brands</span>
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
	</section>
  );
};

export default SecurityCrypto;