// src/components/PlatformHero.tsx
import { Button } from "@/components/ui/button";
import { Gauge, ShieldCheck, Zap } from "lucide-react";
import platformHeroImage from "@/assets/bg3.png";

const stats = [
  {
	label: "Average spin latency",
	value: "< 120 ms",
	hint: "Optimized pipelines for high-frequency play.",
  },
  {
	label: "Transactions per second",
	value: "54 000+",
	hint: "Scaling horizontally across regions and brands.",
  },
  {
	label: "Uptime SLA",
	value: "99.96%",
	hint: "Redundant infra, failover and observability.",
  },
];

const PlatformHero = () => {
  return (
	<section
	  className="
		relative min-h-screen flex items-center justify-center overflow-hidden
		pt-24 sm:pt-28 lg:pt-32
	  "
	>
	  {/* === BACKGROUND LAYERS === */}
	  <div className="absolute inset-0 z-0">
		{/* Базовый градиент-фон */}
		<div className="absolute inset-0 bg-gradient-to-br from-navy via-background to-navy-light" />

		{/* Анимированный градиент поверх */}
		<div
		  className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/20 animate-pulse"
		  style={{ animationDuration: "8s" }}
		/>

		{/* Картинка фоном с overlay */}
		<img
		  src={platformHeroImage}
		  alt="High-load Casino Platform"
		  className="w-full h-full object-cover opacity-25 mix-blend-overlay"
		/>

		{/* Геометрический/радальный паттерн */}
		<div
		  className="absolute inset-0 opacity-40"
		  style={{
			backgroundImage: `
			  radial-gradient(circle at 15% 40%, hsl(var(--primary) / 0.16) 0%, transparent 55%),
			  radial-gradient(circle at 80% 75%, hsl(var(--primary) / 0.18) 0%, transparent 55%),
			  radial-gradient(circle at 45% 15%, hsl(var(--gold) / 0.18) 0%, transparent 45%)
			`,
		  }}
		/>

		{/* Светящиеся “шары” */}
		<div
		  className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/25 rounded-full blur-3xl animate-pulse"
		  style={{ animationDuration: "6s" }}
		/>
		<div
		  className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold/18 rounded-full blur-3xl animate-pulse"
		  style={{ animationDuration: "9s", animationDelay: "1.5s" }}
		/>

		{/* Нижний fade, чтобы текст читался */}
		<div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/95" />
	  </div>

	  {/* === CONTENT === */}
	  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
		  <div className="space-y-4">
			<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
			  Sping.tech
			  <span className="block text-primary mt-1">Casino Platform</span>
			</h1>

			<p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
			  Your iGaming journey starts with a stack that actually keeps up
			  with your ambitions. Streamline operations, automate workflows and
			  scale to new markets without rewriting your core.
			</p>
		  </div>

		  {/* Чипы */}
		  <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
			<span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1 text-foreground/90 transition-transform duration-200 hover:-translate-y-0.5">
			  <Gauge className="h-4 w-4 text-primary" />
			  High-load ready
			</span>
			<span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1 text-foreground/90 transition-transform duration-200 hover:-translate-y-0.5">
			  <Zap className="h-4 w-4 text-primary" />
			  Crypto-first payments
			</span>
			<span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1 text-foreground/90 transition-transform duration-200 hover:-translate-y-0.5">
			  <ShieldCheck className="h-4 w-4 text-primary" />
			  Security by design
			</span>
		  </div>

		  {/* Кнопки */}
		  <div className="flex flex-col sm:flex-row gap-4 justify-center">
			<Button className="rounded-full bg-primary px-8 py-3 text-sm sm:text-base font-semibold text-primary-foreground shadow-[0_0_40px_hsl(var(--primary)/0.25)] hover:bg-primary/90 hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)] transition-all duration-300">
			  Get started
			</Button>

			<Button
			  variant="outline"
			  className="rounded-full border-primary/60 px-8 py-3 text-sm sm:text-base font-medium text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
			>
			  Explore platform
			</Button>
		  </div>

		  <p className="text-xs sm:text-sm text-muted-foreground/80 max-w-md mx-auto">
			Built for high-load casino, sportsbook and crypto operations with
			security, observability and modularity baked in.
		  </p>

		  <div className="grid gap-4 sm:grid-cols-3 pt-4">
			{stats.map((stat) => (
			  <div
				key={stat.label}
				className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-black/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
			  >
				<div className="text-lg sm:text-xl font-semibold text-primary leading-none">
				  {stat.value}
				</div>
				<div className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
				  {stat.label}
				</div>
				<p className="mt-1 text-[0.7rem] text-muted-foreground/80">
				  {stat.hint}
				</p>
			  </div>
			))}
		  </div>
		</div>
	  </div>
	</section>
  );
};

export default PlatformHero;