import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const year = new Date().getFullYear();

  return (
	<div className="min-h-screen bg-background text-foreground">
	  <Navigation />

	  {/* main content with top offset for fixed nav */}
	  <main className="pt-20">
		{/* HERO */}
		<section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
		  <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] items-start">
			  {/* LEFT */}
			  <div className="space-y-6 animate-fade-in-up">
				<p className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1 text-xs sm:text-sm uppercase tracking-[0.25em] text-primary">
				  About Sping.tech
				</p>

				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
				  Building casino platforms
				  <span className="block text-primary">
					that don’t hold you back
				  </span>
				</h1>

				<p className="text-base sm:text-lg text-muted-foreground max-w-xl">
				  Sping.tech is a product–driven team focused on high-load casino,
				  sportsbook and crypto operations. We design platform stacks
				  that keep up with your ambitions instead of limiting them.
				</p>

				<p className="text-sm sm:text-base text-muted-foreground/90 max-w-xl">
				  We combine experience from iGaming, payments and infra
				  engineering to ship platforms that are fast, observable and
				  easy to extend — without rewriting the core every year.
				</p>
			  </div>

			  {/* RIGHT: STATS */}
			  <div className="space-y-6 lg:pl-10">
				<div className="text-xs uppercase tracking-[0.25em] text-gold/70">
				  Live platform profile*
				</div>

				<div className="rounded-3xl border border-gold/20 bg-gradient-to-b from-gold/5 via-background/90 to-background px-6 py-5 sm:px-8 sm:py-6 shadow-[0_0_40px_hsl(var(--gold)/0.2)]">
				  <div className="space-y-4">
					<div className="flex items-baseline justify-between gap-4">
					  <div className="text-sm text-muted-foreground/80">
						Average spin latency
					  </div>
					  <div className="text-right">
						<div className="text-2xl sm:text-3xl font-semibold text-primary">
						  {"< 120 ms"}
						</div>
						<div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
						  under peak load
						</div>
					  </div>
					</div>

					<div className="h-px bg-border/60" />

					<div className="flex items-baseline justify-between gap-4">
					  <div className="text-sm text-muted-foreground/80">
						Settlements per minute
					  </div>
					  <div className="text-right">
						<div className="text-2xl sm:text-3xl font-semibold text-primary">
						  1&nbsp;000&nbsp;000+
						</div>
						<div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
						  multi-brand stack
						</div>
					  </div>
					</div>
				  </div>

				  <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground/70">
					*Metrics reflect the type of load Aereus Platform is
					engineered for — multi-region, multi-brand, always-on casino
					operations.
				  </p>
				</div>
			  </div>
			</div>
		  </div>
		</section>

	{/* WHAT WE DO + VALUES (shared background with lines) */}
	<section className="relative py-16 sm:py-20 lg:py-24 bg-secondary/5 overflow-hidden">
	  {/* ФОН: мягкий свет + линии */}
	  <div className="pointer-events-none absolute inset-0 z-0">
		{/* мягкие пятна */}
		<div className="absolute -top-24 left-[-40px] w-72 h-72 rounded-full bg-primary/14 blur-3xl" />
		<div className="absolute bottom-[-60px] right-[-40px] w-80 h-80 rounded-full bg-yellow-400/12 blur-3xl" />
	
		{/* абстрактные линии (слегка диагональные, волной) */}
		<svg
		  className="absolute inset-0 w-full h-full"
		  viewBox="0 0 1400 1000"
		  preserveAspectRatio="none"
		  fill="none"
		  stroke="currentColor"
		  strokeWidth="1"
		  strokeLinecap="round"
		  style={{ color: "rgba(250,204,21,0.22)" }}
		>
		  {Array.from({ length: 22 }).map((_, i) => {
			const offset = i * 36 - 280; // шаг между линиями
	
			return (
			  <path
				key={i}
				d={`
				  M -120 ${260 + offset}
				  C 260 ${140 + offset},
					540 ${260 + offset},
					920 ${210 + offset}
				  S 1500 ${520 + offset},
					1520 ${880 + offset}
				`}
			  />
			);
		  })}
		</svg>
	  </div>
	
	 
	  <div className="relative z-10">
		<div className="container mx-auto px-4 sm:px-6 lg:px-8">
		  {/* WHAT WE DO */}
		  <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
			<div className="space-y-4">
			  <h2 className="text-2xl sm:text-3xl font-bold">
				We’re a product studio
				<span className="text-primary"> for casino infrastructure</span>
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
				Sping.tech is not another generic dev shop. We work only on
				iGaming and adjacent fintech — where uptime, compliance and
				player experience sit on the same level.
			  </p>
			  <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
				Our platform blueprint combines modular PAM, payments, CRM,
				analytics and security into a stack that can be deployed as a
				whole or in phases, depending on where you are in your journey.
			  </p>
			</div>
	
			<div className="grid gap-4 sm:grid-cols-2">
			  <div className="rounded-2xl border border-border/70 bg-card/90 p-4 sm:p-5 shadow-sm">
				<h3 className="text-sm font-semibold mb-1 text-primary">
				  High-load by default
				</h3>
				<p className="text-xs sm:text-sm text-muted-foreground">
				  Architected around spikes: tournaments, promos, big sports
				  events and new market launches.
				</p>
			  </div>
			  <div className="rounded-2xl border border-border/70 bg-card/90 p-4 sm:p-5 shadow-sm">
				<h3 className="text-sm font-semibold mb-1 text-primary">
				  Crypto-first, not crypto-only
				</h3>
				<p className="text-xs sm:text-sm text-muted-foreground">
				  Digital assets, stablecoins and fiat in one stack with
				  transparent reporting and risk controls.
				</p>
			  </div>
			  <div className="rounded-2xl border border-border/70 bg-card/90 p-4 sm:p-5 shadow-sm">
				<h3 className="text-sm font-semibold mb-1 text-primary">
				  Privacy & observability
				</h3>
				<p className="text-xs sm:text-sm text-muted-foreground">
				  We minimise data, but maximise insight — logs, traces and
				  metrics wired from day one.
				</p>
			  </div>
			  <div className="rounded-2xl border border-border/70 bg-card/90 p-4 sm:p-5 shadow-sm">
				<h3 className="text-sm font-semibold mb-1 text-primary">
				  Product thinking
				</h3>
				<p className="text-xs sm:text-sm text-muted-foreground">
				  We care about funnels, retention and ARPU as much as about
				  latency or infra costs.
				</p>
			  </div>
			</div>
		  </div>
	
		  {/* VALUES */}
		  <div className="mt-16 sm:mt-20 lg:mt-24">
			<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
			  <div>
				<h2 className="text-2xl sm:text-3xl font-bold mb-3">
				  Principles we don’t{" "}
				  <span className="text-primary">negotiate on</span>
				</h2>
				<p className="text-sm sm:text-base text-muted-foreground max-w-xl">
				  These are the guardrails that shape every engagement and every
				  release — from the first discovery call to live operations.
				</p>
			  </div>
			</div>
	
			<div className="grid gap-5 md:grid-cols-3">
			  <div className="group rounded-2xl border border-border/70 bg-card/90 p-5 sm:p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_0_40px_hsl(var(--primary)/0.25)]">
				<p className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-3">
				  01
				</p>
				<h3 className="text-base sm:text-lg font-semibold mb-2">
				  Long-term partnerships
				</h3>
				<p className="text-sm text-muted-foreground">
				  We prefer fewer clients, deeper integrations and joint product
				  roadmaps instead of one-off deliveries.
				</p>
			  </div>
	
			  <div className="group rounded-2xl border border-border/70 bg-card/90 p-5 sm:p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_0_40px_hsl(var(--primary)/0.25)]">
				<p className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-3">
				  02
				</p>
				<h3 className="text-base sm:text-lg font-semibold mb-2">
				  Honest constraints
				</h3>
				<p className="text-sm text-muted-foreground">
				  If something is risky, expensive or unrealistic, we say it on
				  day one — and co-design a path that actually works.
				</p>
			  </div>
	
			  <div className="group rounded-2xl border border-border/70 bg-card/90 p-5 sm:p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_0_40px_hsl(var(--primary)/0.25)]">
				<p className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-3">
				  03
				</p>
				<h3 className="text-base sm:text-lg font-semibold mb-2">
				  Operability first
				</h3>
				<p className="text-sm text-muted-foreground">
				  We optimise for the team that will run the platform at 3 a.m.,
				  not only for the team that builds it.
				</p>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</section>

		
		{/* HOW WE WORK / TIMELINE */}
		<section className="py-16 sm:py-20 lg:py-24 bg-secondary/5">
		  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
			  {/* ЛЕВАЯ ЧАСТЬ */}
			  <div className="space-y-3">
				<h2 className="text-2xl sm:text-3xl font-bold">
				  A focused way of{" "}
				  <span className="text-primary">working together</span>
				</h2>
				<p className="text-sm sm:text-base text-muted-foreground max-w-xl">
				  We don’t force a one-size-fits-all framework. Most successful
				  engagements follow a simple and predictable shape.
				</p>
			  </div>
		
			  {/* ПРАВАЯ ЧАСТЬ — ТАЙМЛАЙН КАК В ПРИМЕРЕ */}
			  <div>
				<ol className="relative border-s border-border/70 ps-6 space-y-8 sm:space-y-10">
				  {/* STEP 1 */}
				  <li className="ms-4">
					<div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-background shadow-[0_0_0_4px_rgba(255,184,66,0.16)]" />
					<p className="text-[11px] font-medium leading-none tracking-[0.24em] text-primary/80 uppercase">
					  Discovery
					</p>
					<h3 className="text-sm sm:text-base font-semibold mt-2 mb-1 text-foreground">
					  Understand your brands & markets
					</h3>
					<p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
					  We map stack, constraints and ambitions across casino, sportsbook and
					  payments.
					</p>
				  </li>
		
				  {/* STEP 2 */}
				  <li className="ms-4">
					<div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-background shadow-[0_0_0_4px_rgba(255,184,66,0.16)]" />
					<p className="text-[11px] font-medium leading-none tracking-[0.24em] text-primary/80 uppercase">
					  Blueprint
					</p>
					<h3 className="text-sm sm:text-base font-semibold mt-2 mb-1 text-foreground">
					  Design an architecture that can scale
					</h3>
					<p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
					  Target platform, migration plan and quick wins — without a risky “big bang”.
					</p>
				  </li>
		
				  {/* STEP 3 */}
				  <li className="ms-4">
					<div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-background shadow-[0_0_0_4px_rgba(255,184,66,0.16)]" />
					<p className="text-[11px] font-medium leading-none tracking-[0.24em] text-primary/80 uppercase">
					  Build & integrate
					</p>
					<h3 className="text-sm sm:text-base font-semibold mt-2 mb-1 text-foreground">
					  Ship modules into real traffic
					</h3>
					<p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
					  We prioritise flows that move revenue or reduce risk, then iterate under real load.
					</p>
				  </li>
		
				  {/* STEP 4 */}
				  <li className="ms-4">
					<div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-background shadow-[0_0_0_4px_rgba(255,184,66,0.16)]" />
					<p className="text-[11px] font-medium leading-none tracking-[0.24em] text-primary/80 uppercase">
					  Operate & evolve
					</p>
					<h3 className="text-sm sm:text-base font-semibold mt-2 mb-1 text-foreground">
					  Stay ahead of markets, not behind them
					</h3>
					<p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
					  We keep tuning, extending and hardening the platform as your business grows.
					</p>
				  </li>
				</ol>
			  </div>
			</div>
		  </div>
		</section>
	  </main>

	  {/* Footer */}
	  < Footer />
	</div>
  );
};

export default AboutPage;