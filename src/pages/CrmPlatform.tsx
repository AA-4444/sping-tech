// src/pages/CrmPlatform.tsx

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
import CRMSecuritySection from "@/components/CRMSecuritySection";
import heroBg from "@/assets/bg4.png";
import crmWorkspaceMock from "@/assets/CRMMac.png"; // путь подставь свой
import {
  ArrowRight,
  Users,
  Mail,
  LineChart,
  LayoutTemplate,
  Sparkles,
  Filter,
} from "lucide-react";

type CrmModuleCard = {
  id: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  features: string[];
};

const crmModules: CrmModuleCard[] = [
  {
	id: "player-360",
	title: "Player 360",
	icon: Users,
	description:
	  "Unify data from games, payments, KYC and support into a single player profile available to CRM, VIP and risk teams.",
	features: [
	  "Full activity timeline across web & mobile",
	  "Balance, sessions, deposits & withdrawals in one view",
	  "Risk, VIP and marketing tags per player",
	  "Real-time events stream for triggers & automations",
	  "Notes and tasks for support & VIP managers",
	],
  },
  {
	id: "campaigns",
	title: "Campaign automation",
	icon: Mail,
	description:
	  "Orchestrate retention, reactivation and VIP campaigns with no-code journeys and multi-channel messaging.",
	features: [
	  "Journeys by lifecycle stage and player value",
	  "Email, SMS, push, onsite & in-game messaging",
	  "Trigger campaigns by behaviour & segments",
	  "Frequency capping and fatigue control",
	  "Holdout / A/B groups and uplift measurement",
	],
  },
  {
	id: "segmentation",
	title: "Segmentation & analytics",
	icon: LineChart,
	description:
	  "Build slices of your base in seconds and measure promo ROI, churn risk and player value across markets.",
	features: [
	  "Dynamic segments by activity, value & risk",
	  "LTV, ARPU and retention dashboards per GEO",
	  "Promo performance & cohort analytics",
	  "Churn-risk and VIP potential scoring",
	  "Exports to BI / data warehouse via API",
	],
  },
];

const CrmPlatformPage = () => {
  const [moduleIndex, setModuleIndex] = useState(0);

  const nextModule = () => {
	setModuleIndex((prev) => (prev + 1) % crmModules.length);
  };

  const prevModule = () => {
	setModuleIndex((prev) =>
	  prev === 0 ? crmModules.length - 1 : prev - 1,
	);
  };

  // авто-ротация барабана
  useEffect(() => {
	const id = setInterval(() => {
	  setModuleIndex((prev) => (prev + 1) % crmModules.length);
	}, 8000);
	return () => clearInterval(id);
  }, []);

  // wheel / touch для барабана
  const wheelLockRef = useRef(0);
  const touchStartYRef = useRef<number | null>(null);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
	const now = Date.now();
	if (now - wheelLockRef.current < 600) return;
	if (Math.abs(e.deltaY) < 10) return;

	e.preventDefault();
	e.stopPropagation();

	wheelLockRef.current = now;

	if (e.deltaY > 0) nextModule();
	else prevModule();
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
	const touch = e.touches[0];
	touchStartYRef.current = touch.clientY;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
	e.preventDefault();
	e.stopPropagation();
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
	const startY = touchStartYRef.current;
	touchStartYRef.current = null;
	if (startY == null) return;

	const touch = e.changedTouches[0];
	const deltaY = touch.clientY - startY;

	const threshold = 40;
	if (Math.abs(deltaY) < threshold) return;

	if (deltaY < 0) nextModule();
	else prevModule();
  };

  return (
	<div className="min-h-screen bg-background text-foreground">
	  <Navigation />

	  <main className="pt-0 pb-4 sm:pb-6 lg:pb-8">
		{/* HERO */}
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
		  {/* Background */}
		  <div className="absolute inset-0 z-0">
			<div className="absolute inset-0 bg-gradient-to-br from-navy via-background to-navy" />

			<div
			  className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
			  style={{ backgroundImage: `url(${heroBg})` }}
			/>

			<div
			  className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/15 animate-pulse"
			  style={{ animationDuration: "8s" }}
			/>

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

			<div
			  className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/25 rounded-full blur-3xl animate-pulse"
			  style={{ animationDuration: "6s" }}
			/>
			<div
			  className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"
			  style={{ animationDuration: "9s", animationDelay: "2s" }}
			/>

			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
		  </div>

		  {/* Content */}
		  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<div className="max-w-4xl mx-auto text-center space-y-6">
			  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
				CRM platform built{" "}
				<span className="text-primary">
				  for player value & retention
				</span>
			  </h1>

			  <p className="text-base sm:text-lg lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
				Sping.tech CRM unifies player data, automates campaigns and
				gives your teams a single workspace to run retention, VIP and
				reactivation across brands and markets.
			  </p>

			  <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs sm:text-sm">
				<span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1 text-primary">
				  <Users className="h-4 w-4" />
				  Player 360 view
				</span>
				<span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/60 px-4 py-1 text-foreground/80">
				  <Mail className="h-4 w-4 text-primary" />
				  Multi-channel campaigns
				</span>
				<span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-4 py-1 text-foreground/80">
				  <LineChart className="h-4 w-4 text-primary" />
				  LTV & retention analytics
				</span>
			  </div>

			  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-3">
				<Button className="px-8 py-6 text-base sm:text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_hsl(var(--primary)/0.4)]">
				  Book CRM demo
				</Button>
				<Button
				  variant="outline"
				  className="px-8 py-6 text-base sm:text-lg border-primary/60 text-foreground hover:border-primary hover:bg-primary/10"
				>
				  Download one-pager
				</Button>
			  </div>
			</div>
		  </div>
		</section>

		{/* CRM MODULES – DRUM */}
		<section className="py-12 sm:py-16 lg:py-20 bg-background">
		  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mb-10 space-y-3">
			  <p className="text-xs uppercase tracking-[0.25em] text-primary/80">
				CRM modules
			  </p>
			  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
				One CRM stack that{" "}
				<span className="text-primary">keeps players active</span>
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
				Connect data, segments and journeys in a single system:
				Player 360, campaign automation and analytics built
				specifically for iGaming operators.
			  </p>
			</div>

			<div
			  className="relative max-w-5xl mx-auto h-[420px] sm:h-[360px] lg:h-[320px] overflow-hidden touch-none"
			  onWheel={handleWheel}
			  onTouchStart={handleTouchStart}
			  onTouchMove={handleTouchMove}
			  onTouchEnd={handleTouchEnd}
			>
			  {crmModules.map((module, index) => {
				const ModuleIcon = module.icon;
				const offset = index - moduleIndex;

				const translateY = offset * 80;
				const abs = Math.abs(offset);
				const scale = abs === 0 ? 1 : 0.9;
				const opacity = abs === 0 ? 1 : abs === 1 ? 0.55 : 0;
				const zIndex = crmModules.length - abs;

				if (abs > 1) {
				  return (
					<article
					  key={module.id}
					  className="absolute left-0 right-0 mx-auto w-full md:w-[90%]"
					  style={{ opacity: 0, pointerEvents: "none" }}
					/>
				  );
				}

				return (
				  <article
					key={module.id}
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
					  <div className="flex items-start justify-between gap-4 mb-4">
						<div className="flex items-center gap-3">
						  <div className="h-11 w-11 sm:h-12 sm:w-12 flex items-center justify-center rounded-2xl border border-yellow-400/60 bg-yellow-400/5">
							<ModuleIcon className="h-5 w-5 text-yellow-400" />
						  </div>
						  <div>
							<h3 className="text-lg sm:text-xl font-semibold">
							  {module.title}
							</h3>
							<p className="text-xs text-muted-foreground mt-1">
							  Core block of the CRM stack.
							</p>
						  </div>
						</div>

						<div className="hidden sm:inline-flex items-center rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-yellow-300">
						  CRM module
						</div>
					  </div>

					  <p className="text-sm sm:text-[15px] text-muted-foreground mb-4 max-w-2xl">
						{module.description}
					  </p>

					  <div className="grid sm:grid-cols-2 gap-2.5 text-sm text-muted-foreground">
						{module.features.map((f) => (
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
				  {crmModules.map((module, index) => (
					<button
					  key={module.id}
					  type="button"
					  onClick={() => setModuleIndex(index)}
					  className={`h-1.5 w-4 rounded-full transition-all ${
						index === moduleIndex
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
			  {crmModules.map((module, index) => (
				<button
				  key={module.id}
				  type="button"
				  onClick={() => setModuleIndex(index)}
				  className={`h-2 w-2 rounded-full transition-all ${
					index === moduleIndex
					  ? "bg-yellow-400 scale-110"
					  : "bg-muted hover:bg-yellow-300/70"
				  }`}
				/>
			  ))}
			</div>
		  </div>
		</section>

		{/* CRM WORKSPACE / FRONT-END ANALOG */}
		<section className="py-12 sm:py-16 lg:py-20 bg-secondary/5">
		  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid gap-10 lg:grid-cols-2 items-center">
			  {/* TEXT */}
			  <div className="space-y-5">
				<p className="text-xs uppercase tracking-[0.25em] text-primary/80">
				  CRM workspace
				</p>
				<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
				  One{" "}
				  <span className="text-primary">
					player engagement workspace
				  </span>{" "}
				  for all teams.
				</h2>
				<p className="text-sm sm:text-base text-muted-foreground">
				  Give CRM, VIP, support and risk teams the same live view of
				  the player. Build segments, launch campaigns and track
				  response without constant exports and spreadsheets.
				</p>
		
				<div className="grid gap-4 sm:grid-cols-2 text-sm text-muted-foreground">
				  <div className="space-y-1.5">
					<div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary">
					  <Filter className="h-3.5 w-3.5" />
					  Segments
					</div>
					<p>
					  Real-time segments by activity, value, risk, GEO and
					  device. Reusable in all campaigns.
					</p>
				  </div>
				  <div className="space-y-1.5">
					<div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary">
					  <LayoutTemplate className="h-3.5 w-3.5" />
					  Journeys
					</div>
					<p>
					  Drag-and-drop journeys for onboarding, retention and VIP
					  with conditions and delays.
					</p>
				  </div>
				</div>
		
				<div className="flex flex-wrap gap-4 text-xs sm:text-sm text-muted-foreground pt-2">
				  <div>
					<p className="font-semibold text-foreground">Cross-brand</p>
					<p>Run CRM across multiple brands from one hub.</p>
				  </div>
				  <div>
					<p className="font-semibold text-foreground">
					  iGaming-native
					</p>
					<p>Events, metrics and flows built for casinos.</p>
				  </div>
				</div>
			  </div>
		
			  {/* RIGHT SIDE — PURE IMAGE */}
			  <div className="relative flex justify-center">
				<img
				  src={crmWorkspaceMock}
				  alt="Sping.tech CRM workspace"
				  className="w-full h-auto object-contain"
				/>
			  </div>
			</div>
		  </div>
		</section>

		
		<CRMSecuritySection />
	  </main>

	  <div className="relative z-20">
		<Footer />
	  </div>
	</div>
  );
};

export default CrmPlatformPage;