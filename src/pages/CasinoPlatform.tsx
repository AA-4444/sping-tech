// src/pages/CasinoPlatform.tsx

import {
  useEffect,
  useState,
  useRef,
  type WheelEvent,
  type TouchEvent,
} from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import CasinoSecuritySection from "@/components/CasinoSecuritySection";
import heroBg from "@/assets/bg2.png";
import platformMock from "@/assets/casino-mac.png"; 
import {
  ArrowRight,
  Gift,
  Trophy,
  Coins,
  LayoutTemplate,
  ShieldCheck,
  Sparkles,
  Gamepad2,
} from "lucide-react";

type EngineCard = {
  id: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  features: string[];
};

const promotionEngines: EngineCard[] = [
  {
	id: "bonus-engine",
	title: "Bonus engine",
	icon: Gift,
	description:
	  "Design smart onboarding, retention and VIP campaigns without touching code.",
	features: [
	  "Deposit bonuses & reloads",
	  "Cashback bonuses",
	  "Free spins / free bets for slots & instant games",
	  "Deep bonus configuration with multi-triggers",
	  "Automated bonus acquisition flows",
	  "Configurable % of bets & reward limits",
	  "Bonus cancellation & manual adjustments",
	  "Simultaneous launch across slots, live casino & instant games",
	],
  },
  {
	id: "jackpot-engine",
	title: "Jackpot engine",
	icon: Coins,
	description:
	  "Layer dynamic jackpots on top of your games to boost engagement, session length and revenue.",
	features: [
	  "Network & operator-level jackpots",
	  "Multi-level jackpot structures (mini / major / grand)",
	  "Support for external & in-house jackpot feeds",
	  "Real-time updates on web & mobile",
	  "Multiple widgets & placements for jackpot display",
	  "Flexible contribution & payout configuration",
	],
  },
  {
	id: "tournament-engine",
	title: "Tournament engine",
	icon: Trophy,
	description:
	  "Run local and network tournaments that keep players engaged and returning to your brand.",
	features: [
	  "Operator & network tournaments",
	  "Multi-format competitions: wins, wagers, rounds, points",
	  "Support for slots, live casino & instant games",
	  "Real-time leaderboards & in-lobby widgets",
	  "Configurable prize pools & reward types",
	  "Automated settlement & prize distribution",
	],
  },
];

const CasinoPlatformPage = () => {
  const [engineIndex, setEngineIndex] = useState(0);

  const nextEngine = () => {
	setEngineIndex((prev) => (prev + 1) % promotionEngines.length);
  };

  const prevEngine = () => {
	setEngineIndex((prev) =>
	  prev === 0 ? promotionEngines.length - 1 : prev - 1
	);
  };

  // авто-ротация
  useEffect(() => {
	const id = setInterval(() => {
	  setEngineIndex((prev) => (prev + 1) % promotionEngines.length);
	}, 8000);
	return () => clearInterval(id);
  }, []);

 // wheel / touch как у барабана
 const wheelLockRef = useRef(0);
 const touchStartYRef = useRef<number | null>(null);
 
 const handleEngineWheel = (e: WheelEvent<HTMLDivElement>) => {
   const now = Date.now();
   if (now - wheelLockRef.current < 600) return;
   if (Math.abs(e.deltaY) < 10) return;
 
   e.preventDefault();
   e.stopPropagation(); // 👈 не даём событию улететь на страницу
 
   wheelLockRef.current = now;
 
   if (e.deltaY > 0) nextEngine();
   else prevEngine();
 };
 
 const handleEngineTouchStart = (e: TouchEvent<HTMLDivElement>) => {
   const touch = e.touches[0];
   touchStartYRef.current = touch.clientY;
 };
 
 const handleEngineTouchMove = (e: TouchEvent<HTMLDivElement>) => {
   // 👈 блокируем нативный скролл страницы при свайпе по барабану
   e.preventDefault();
   e.stopPropagation();
 };
 
 const handleEngineTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
   const startY = touchStartYRef.current;
   touchStartYRef.current = null;
   if (startY == null) return;
 
   const touch = e.changedTouches[0];
   const deltaY = touch.clientY - startY;
 
   const threshold = 40;
   if (Math.abs(deltaY) < threshold) return;
 
   if (deltaY < 0) {
	 // свайп вверх -> следующая карточка
	 nextEngine();
   } else {
	 // свайп вниз -> предыдущая
	 prevEngine();
   }
 };
  return (
	<div className="min-h-screen bg-background text-foreground">
	  <Navigation />

	  <main className="pt-0 pb-4 sm:pb-6 lg:pb-8">
		
		{/* HERO */}
		<section className="relative min-h-screen  flex items-center justify-center overflow-hidden">
		  {/* Background */}
		  <div className="absolute inset-0 z-0">
			{/* Base gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-navy via-background to-navy" />
		
			{/* Background image with overlay */}
			<div
			  className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
			  style={{ backgroundImage: `url(${heroBg})` }} // import heroBg from "@/assets/bg2.png"
			/>
		
			{/* Soft animated gradient overlay */}
			<div
			  className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/15 animate-pulse"
			  style={{ animationDuration: "8s" }}
			/>
		
			{/* Geometric pattern */}
			<div
			  className="absolute inset-0 opacity-30"
			  style={{
				backgroundImage: `
				  radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.12) 0%, transparent 55%),
				  radial-gradient(circle at 80% 80%, hsl(var(--primary) / 0.16) 0%, transparent 55%),
				  radial-gradient(circle at 40% 15%, rgba(250, 204, 21, 0.15) 0%, transparent 45%)
				`,
			  }}
			/>
		
			{/* Orbs */}
			<div
			  className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/25 rounded-full blur-3xl animate-pulse"
			  style={{ animationDuration: "6s" }}
			/>
			<div
			  className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"
			  style={{ animationDuration: "9s", animationDelay: "2s" }}
			/>
		
			{/* Bottom fade */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
		  </div>
		
		  {/* Content */}
		  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<div className="max-w-4xl mx-auto text-center space-y-6">
		
			  {/* UPDATED TITLE */}
			  <h1 className="
				text-4xl sm:text-5xl lg:text-7xl 
				font-bold leading-tight
			  ">
				Casino engine built{" "}
				<span className="text-primary">for scale, speed & retention</span>
			  </h1>
		
			  {/* UPDATED PARAGRAPH */}
			  <p className="
				text-base sm:text-lg lg:text-2xl 
				text-muted-foreground max-w-2xl mx-auto
			  ">
				Sping.tech provides a full casino platform with bonus, jackpot and
				tournament engines, flexible front-end and risk tooling — designed for
				fast launches and high LTV players.
			  </p>
		
			  {/* CTA */}
			  <div className="pt-2">
				<Button
				  size="lg"
				  className="px-8 py-6 text-base sm:text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
				>
				  Contact Us
				</Button>
			  </div>
		
			</div>
		  </div>
		</section>
	

		{/* BONUS / JACKPOT / TOURNAMENT ENGINES – DRUM */}
		<section className="py-12 sm:py-16 lg:py-20 bg-background">
		  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mb-10 space-y-3">
			  <p className="text-xs uppercase tracking-[0.25em] text-primary/80">
				Engines
			  </p>
			  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
				Promotion engines that{" "}
				<span className="text-primary">actually move the numbers</span>
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
				Our bonus, jackpot and tournament engines are built for growth teams:
				fast to configure, deeply configurable, and safe from abuse.
			  </p>
			</div>

			{/* DRUM-CAROUSEL */}
			<div
			  className="relative max-w-5xl mx-auto h-[420px] sm:h-[360px] lg:h-[320px] overflow-hidden touch-none"
			  onWheel={handleEngineWheel}
			  onTouchStart={handleEngineTouchStart}
			  onTouchMove={handleEngineTouchMove}
			  onTouchEnd={handleEngineTouchEnd}
			>
			  {promotionEngines.map((engine, index) => {
				const EngineIcon = engine.icon;
				const offset = index - engineIndex;
			
				// Чуть меньше шаг, чтобы верхняя/нижняя были видны аккуратно
				const translateY = offset * 80;
				const abs = Math.abs(offset);
				const scale = abs === 0 ? 1 : 0.9;
				const opacity = abs === 0 ? 1 : abs === 1 ? 0.55 : 0;
				const zIndex = promotionEngines.length - abs;
			
				if (abs > 1) {
				  return (
					<article
					  key={engine.id}
					  className="absolute left-0 right-0 mx-auto w-full md:w-[90%]"
					  style={{ opacity: 0, pointerEvents: "none" }}
					/>
				  );
				}
			
				return (
				  <article
					key={engine.id}
					className="absolute left-0 right-0 mx-auto w-full md:w-[90%] rounded-3xl border bg-card/95 shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
					style={{
					  borderColor:
						abs === 0
						  ? "rgba(250, 204, 21, 0.9)"
						  : "rgba(250, 204, 21, 0.45)",
					  transform: `translateY(${translateY}%) scale(${scale})`,
					  opacity,
					  zIndex,
					  transition:
						"transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.35s ease-out, border-color 0.35s ease-out",
					  pointerEvents: abs === 0 ? "auto" : "none",
					}}
				  >
					<div className="px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-6">
					  {/* верх: иконка + заголовок + бейдж */}
					  <div className="flex items-start justify-between gap-4 mb-4">
						<div className="flex items-center gap-3">
						  <div className="h-11 w-11 sm:h-12 sm:w-12 flex items-center justify-center rounded-2xl border border-yellow-400/60 bg-yellow-400/5">
							<EngineIcon className="h-5 w-5 text-yellow-400" />
						  </div>
						  <div>
							<h3 className="text-lg sm:text-xl font-semibold">
							  {engine.title}
							</h3>
							<p className="text-xs text-muted-foreground mt-1">
							  Part of the core promo engine stack.
							</p>
						  </div>
						</div>
			
						<div className="hidden sm:inline-flex items-center rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-yellow-300">
						  Promo module
						</div>
					  </div>
			
					  {/* описание */}
					  <p className="text-sm sm:text-[15px] text-muted-foreground mb-4 max-w-2xl">
						{engine.description}
					  </p>
			
					  {/* фичи */}
					  <div className="grid sm:grid-cols-2 gap-2.5 text-sm text-muted-foreground">
						{engine.features.map((f) => (
						  <div key={f} className="flex gap-2">
							<span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-400/80 flex-shrink-0" />
							<span>{f}</span>
						  </div>
						))}
					  </div>
					</div>
				  </article>
				);
			  })}
			
			  {/* индикаторы справа (десктоп) */}
			  <div className="absolute right-3 bottom-3 hidden sm:flex items-center gap-3">
				<div className="flex flex-col gap-1">
				  {promotionEngines.map((engine, index) => (
					<button
					  key={engine.id}
					  type="button"
					  onClick={() => setEngineIndex(index)}
					  className={`h-1.5 w-4 rounded-full transition-all ${
						index === engineIndex
						  ? "bg-yellow-400 w-6"
						  : "bg-muted hover:bg-yellow-400/70"
					  }`}
					/>
				  ))}
				</div>
			  </div>
			</div>
			
			{/* индикатор на телефоне */}
			<div className="mt-4 flex sm:hidden justify-center gap-2">
			  {promotionEngines.map((engine, index) => (
				<button
				  key={engine.id}
				  type="button"
				  onClick={() => setEngineIndex(index)}
				  className={`h-2 w-2 rounded-full transition-all ${
					index === engineIndex
					  ? "bg-yellow-400 scale-110"
					  : "bg-muted hover:bg-yellow-300/70"
				  }`}
				/>
			  ))}
			</div>
		  </div>
		</section>

		{/* FLEXIBLE FRONT-END SECTION */}
		{/* FLEXIBLE FRONT-END SECTION */}
		<section className="py-12 sm:py-16 lg:py-20 bg-secondary/5">
		  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid gap-10 lg:grid-cols-2 items-center">
			  {/* TEXT */}
			  <div className="space-y-5">
				<p className="text-xs uppercase tracking-[0.25em] text-primary/80">
				  Front-end
				</p>
				<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
				  Flexible front-end{" "}
				  <span className="text-primary">configured in minutes.</span>
				  <br />
				  No code needed.
				</h2>
				<p className="text-sm sm:text-base text-muted-foreground">
				  We provide a fully configurable casino lobby built on a widget
				  system with dozens of layout options. You can launch
				  country-specific lobbies, test line-ups, and adapt the
				  experience to any segment without involving engineers.
				</p>
		
				<div className="grid gap-4 sm:grid-cols-2 text-sm text-muted-foreground">
				  <div className="space-y-1.5">
					<div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary">
					  <LayoutTemplate className="h-3.5 w-3.5" />
					  Widgets
					</div>
					<p>
					  Home, category carousels, providers, jackpots, tournaments
					  and more.
					</p>
				  </div>
				  <div className="space-y-1.5">
					<div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary">
					  <Gamepad2 className="h-3.5 w-3.5" />
					  Game catalog
					</div>
					<p>
					  200+ games connected via aggregation — slots, live,
					  instant and exclusive content.
					</p>
				  </div>
				</div>
		
				<div className="flex flex-wrap gap-4 text-xs sm:text-sm text-muted-foreground pt-2">
				  <div>
					<p className="font-semibold text-foreground">200+ games</p>
					<p>Ready to plug into your lobby.</p>
				  </div>
				  <div>
					<p className="font-semibold text-foreground">
					  Region-specific UX
					</p>
					<p>Line-ups per GEO, segment or brand.</p>
				  </div>
				</div>
			  </div>
		
			  {/* VISUAL MOCK → REAL IMAGE */}
			<div className="relative flex justify-center">
			  <img
				src={platformMock}
				alt="Sping.tech casino front-end on MacBook"
				className="w-full h-auto object-contain"
			  />
			</div>
			</div>
		  </div>
		</section>

		{/* RISK & ANTI-FRAUD SECTION */}
		<CasinoSecuritySection />
	  </main>

	  <div className="relative z-20">
		<Footer />
	  </div>
	</div>
  );
};

export default CasinoPlatformPage;