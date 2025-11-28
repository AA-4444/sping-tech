import { useEffect, useRef, useState } from "react";
import { ShieldAlert, ShieldCheck, Lock } from "lucide-react";

type Slide = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  metric: string;
  metricLabel: string;
};

const slides: Slide[] = [
  {
	id: "threat-detection",
	title: "Advanced threat detection",
	description:
	  "Layered protection for your casino stack: edge filtering, behavioral signals and automated incident response.",
	icon: ShieldAlert,
	metric: "98%",
	metricLabel: "of blocked attacks never reach your core systems.",
  },
  {
	id: "monitoring",
	title: "Continuous security monitoring",
	description:
	  "24/7 monitoring pipeline: logs, anomalies and alerts streamed and correlated in real time.",
	icon: ShieldCheck,
	metric: "24/7",
	metricLabel: "security coverage across infrastructure, apps and wallets.",
  },
  {
	id: "data-security",
	title: "Data & wallet security",
	description:
	  "Hardened environments for player data and treasury, with strict access controls and audit trails.",
	icon: Lock,
	metric: "100%",
	metricLabel: "of sensitive data can be encrypted at rest and in transit.",
  },
];

const SecurityHighlights = () => {
  const [active, setActive] = useState(0);
  const current = slides[active];

  const progress = ((active + 1) / slides.length) * 100;

  const goTo = (index: number) => {
	if (index < 0) index = slides.length - 1;
	if (index >= slides.length) index = 0;
	setActive(index);
  };

  useEffect(() => {
	const id = setInterval(() => {
	  setActive((prev) => (prev + 1) % slides.length);
	}, 8000);
	return () => clearInterval(id);
  }, []);

  const wheelLockRef = useRef(0);
  const touchStartYRef = useRef<number | null>(null);

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
	const now = Date.now();
	if (now - wheelLockRef.current < 700) return;

	if (Math.abs(e.deltaY) < 10) return;

	e.preventDefault();

	wheelLockRef.current = now;
	if (e.deltaY > 0) {
	  goTo(active + 1);
	} else {
	  goTo(active - 1);
	}
  };

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
	const touch = e.touches[0];
	touchStartYRef.current = touch.clientY;
  };

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
	const startY = touchStartYRef.current;
	touchStartYRef.current = null;
	if (startY == null) return;

	const touch = e.changedTouches[0];
	const deltaY = touch.clientY - startY;

	const threshold = 40;
	if (Math.abs(deltaY) < threshold) return;

	if (deltaY < 0) {
	  goTo(active + 1);
	} else {
	  goTo(active - 1);
	}
  };

  return (
	<section
	  className="relative overflow-hidden py-24 bg-gradient-to-b from-navy via-background to-background"
	  onWheel={handleWheel}
	  onTouchStart={handleTouchStart}
	  onTouchEnd={handleTouchEnd}
	>
	  {/* Фон: большой щит + синий glow */}
	  <div className="pointer-events-none absolute inset-0">
		{/* shield-иконка */}
		<svg
		  className="absolute -left-10 bottom-[-120px] w-[520px] opacity-[0.18]"
		  viewBox="0 0 400 480"
		>
		  <path
			d="M200 20L70 70v150c0 90 60 170 130 200 70-30 130-110 130-200V70L200 20Z"
			fill="none"
			stroke="rgba(59,130,246,0.5)" // was primary
			strokeWidth="10"
		  />
		</svg>

		<div className="absolute -left-24 -bottom-48 w-[520px] h-[520px] rounded-[36rem] border border-blue-500/15" />
		<div className="absolute -left-10 -bottom-40 w-[420px] h-[420px] rounded-[32rem] border border-blue-500/10" />
		<div className="absolute -bottom-40 left-0 right-0 h-80 bg-[radial-gradient(circle_at_10%_120%,rgba(56,132,255,0.45),transparent_55%)] opacity-90" />
	  </div>

	  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
		{/* Заголовок */}
		<div className="max-w-3xl mb-10 space-y-3">
		  <p className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1 text-xs sm:text-sm uppercase tracking-[0.2em] text-blue-200">
			Security & Reliability
		  </p>
		  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
			Security engineered for{" "}
			<span className="text-blue-300">high-stakes casinos</span>
		  </h2>
		  <p className="text-muted-foreground text-base sm:text-lg">
			We treat your platform like a financial-grade system: layered
			defense, real-time monitoring and hard isolation for critical
			components.
		  </p>
		</div>

		<div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.5fr)] items-center">
		  {/* Основная карточка */}
		  <div className="relative">
			{/* стек задних карточек для глубины */}
			<div className="absolute inset-0 translate-y-10 scale-[0.97] rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/30 to-slate-900/40 blur-[1px] border border-white/5 opacity-40" />
			<div className="absolute inset-0 translate-y-5 scale-[0.985] rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-900/50 border border-white/8 opacity-70" />

			{/* front card */}
			<div className="relative rounded-3xl bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-900/95 border border-white/12 shadow-[0_0_140px_rgba(37,99,235,0.35)] px-6 sm:px-10 py-8 sm:py-10 lg:py-12 overflow-hidden">
			  {/* синий “скан” по карточке */}
			  <div className="pointer-events-none absolute inset-0 opacity-60">
				<div className="absolute -inset-y-32 left-1/4 right-1/4 bg-gradient-to-b from-transparent via-blue-500/25 to-transparent blur-2xl animate-scan" />
			  </div>

			  <div className="relative flex flex-col gap-8 lg:gap-10">
				{/* верх: иконка + текст */}
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
				  {/* иконка с анимацией сканирования */}
				  <div className="inline-flex items-center gap-3">
					<div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-slate-900/80 border border-blue-400/40 shadow-[0_0_30px_rgba(37,99,235,0.65)] flex items-center justify-center overflow-hidden">
					  {/* сканирующая полоса */}
					  <div className="absolute inset-0">
						<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/70 to-transparent animate-scan" />
					  </div>
					  <current.icon className="relative z-10 h-6 w-6 text-blue-300" />
					</div>
					<div className="sm:hidden">
					  <h3 className="text-xl font-semibold uppercase tracking-[0.22em] text-blue-100">
						{current.title}
					  </h3>
					</div>
				  </div>

				  <div className="hidden sm:block">
					<h3 className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.25em] text-blue-100">
					  {current.title}
					</h3>
				  </div>
				</div>

				{/* описание */}
				<p className="text-sm sm:text-base text-slate-200/90 max-w-2xl">
				  {current.description}
				</p>

				{/* нижний блок с цифрой */}
				<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
				  <div className="flex items-baseline gap-3">
					<span className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-blue-400 leading-none">
					  {current.metric}
					</span>
					<span className="text-sm sm:text-base text-blue-200/90 max-w-xs">
					  {current.metricLabel}
					</span>
				  </div>

				  {/* кнопки переключения на десктопе */}
				  <div className="hidden sm:flex items-center gap-3">
					<button
					  type="button"
					  onClick={() => goTo(active - 1)}
					  className="rounded-full border border-blue-400/50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-blue-100/90 hover:bg-blue-500/10 transition-colors"
					>
					  Prev
					</button>
					<button
					  type="button"
					  onClick={() => goTo(active + 1)}
					  className="rounded-full bg-blue-500/80 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white hover:bg-blue-400/90 transition-colors"
					>
					  Next
					</button>
				  </div>
				</div>
			  </div>
			</div>
		  </div>

		  {/* Правая часть: навигация + краткий список */}
		  <div className="space-y-6">
			{/* вертикальный прогресс */}
			<div className="hidden md:flex items-center justify-end gap-4">
			  <div className="flex flex-col gap-3 text-right text-sm text-muted-foreground">
				{slides.map((slide, index) => (
				  <button
					key={slide.id}
					type="button"
					onClick={() => goTo(index)}
					className={`transition-colors ${
					  index === active
						? "text-foreground font-medium"
						: "hover:text-foreground/70"
					}`}
				  >
					{slide.title}
				  </button>
				))}
			  </div>

			  <div className="relative h-32 w-2 rounded-full bg-border/70 overflow-hidden">
				<div
				  className="absolute bottom-0 w-full rounded-full bg-blue-400 transition-all duration-500"
				  style={{ height: `${progress}%` }}
				/>
			  </div>
			</div>

			{/* мобильная навигация — точки */}
			<div className="flex md:hidden justify-center mt-6 gap-2">
			  {slides.map((slide, index) => (
				<button
				  key={slide.id}
				  type="button"
				  onClick={() => goTo(index)}
				  className={`h-2.5 w-2.5 rounded-full transition-all ${
					index === active
					  ? "bg-blue-400 scale-110"
					  : "bg-blue-400/30 hover:bg-blue-400/60"
				  }`}
				/>
			  ))}
			</div>
		  </div>
		</div>
	  </div>
	</section>
  );
};

export default SecurityHighlights;