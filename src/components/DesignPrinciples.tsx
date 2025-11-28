import { useEffect, useRef, useState } from "react";

type Principle = {
  id: number;
  title: string;
  description: string;
};

const principles: Principle[] = [
  {
	id: 1,
	title: "Personalized player journeys",
	description:
	  "Adapt UX and funnels to match different player segments, from casuals to VIPs.",
  },
  {
	id: 2,
	title: "No-code configurability",
	description:
	  "Launch and adjust campaigns, layouts and flows without touching the codebase.",
  },
  {
	id: 3,
	title: "Modular architecture",
	description:
	  "Add, swap or remove platform modules fast while keeping the core stable.",
  },
  {
	id: 4,
	title: "Scalable by design",
	description:
	  "Handle peak traffic, new markets and additional brands on a single stack.",
  },
  {
	id: 5,
	title: "Cost-efficient operations",
	description:
	  "Optimize infrastructure, workflows and automation to keep total cost in control.",
  },
];

// простой hook для появления блока при скролле (используется в desktop-карточках)
const useInView = (threshold = 0.25) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
	const node = ref.current;
	if (!node) return;

	const observer = new IntersectionObserver(
	  ([entry]) => {
		if (entry.isIntersecting) {
		  setInView(true);
		  observer.disconnect(); // анимация один раз
		}
	  },
	  { threshold }
	);

	observer.observe(node);
	return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

type PrincipleCardProps = {
  principle: Principle;
  positionClass?: string;
  delay?: number;
};

const PrincipleCard = ({
  principle,
  positionClass,
  delay = 0,
}: PrincipleCardProps) => {
  const { ref, inView } = useInView(0.2);

  return (
	<div
	  ref={ref}
	  className={`absolute ${positionClass} max-w-xs sm:max-w-sm`}
	  style={{
		transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
		transitionDelay: `${delay}ms`,
		opacity: inView ? 1 : 0,
		transform: inView ? "translateY(0px)" : "translateY(24px)",
	  }}
	>
	  <div className="flex items-start gap-4">
		<div className="text-5xl sm:text-6xl font-bold text-primary/80 drop-shadow-[0_0_20px_hsl(var(--primary)/0.4)] leading-none">
		  {principle.id}
		</div>
		<div className="space-y-2">
		  <h3 className="text-lg sm:text-xl font-semibold">
			{principle.title}
		  </h3>
		  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
			{principle.description}
		  </p>
		</div>
	  </div>
	</div>
  );
};

const DesignPrinciples = () => {
  return (
	<section className="py-24 bg-background relative overflow-hidden">
	  {/* мягкий фон */}
	  <div className="pointer-events-none absolute inset-0 opacity-40">
		<div className="absolute -top-24 left-0 w-72 h-72 rounded-full bg-primary/15 blur-3xl animate-glow" />
		<div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gold/12 blur-3xl animate-glow" />
	  </div>

	  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
		<div className="text-center mb-12">
		  <h2 className="text-4xl sm:text-5xl font-bold mb-4">
			Platform design <span className="text-primary">principles</span>
		  </h2>
		  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
			Core ideas we follow when building casino platforms focused on
			growth, reliability and player experience.
		  </p>
		</div>

		{/* desktop / tablet layout с “линией” */}
		<div className="hidden md:block relative min-h-[420px] lg:min-h-[460px]">
		  {/* волнистый путь */}
		  <svg
			className="pointer-events-none absolute inset-y-0 left-1/2 h-full w-screen -translate-x-1/2"
			viewBox="0 0 1200 500"
			preserveAspectRatio="none"
		  >
			{/* основная линия */}
			<path
			  d="
				M 0 160
				C 250 110, 450 130, 600 170
				S 900 230, 1050 245
				S 1150 300, 1200 340
				S 900 370, 600 390
				S 300 380, 0 360
			  "
			  fill="none"
			  stroke="hsl(var(--gold) / 0.55)"
			  strokeWidth="5"
			  strokeLinecap="round"
			/>

			{/* вторая линия (чуть ниже) */}
			<path
			  d="
				M 0 180
				C 250 130, 460 150, 610 190
				S 910 255, 1060 265
				S 1160 315, 1200 355
				S 900 385, 600 405
				S 300 395, 0 375
			  "
			  fill="none"
			  stroke="hsl(var(--gold) / 0.35)"
			  strokeWidth="3"
			  strokeLinecap="round"
			/>

			{/* третья линия (чуть выше) */}
			<path
			  d="
				M 0 145
				C 250 100, 440 110, 590 155
				S 880 220, 1030 230
				S 1140 280, 1200 325
				S 900 355, 600 380
				S 300 365, 0 345
			  "
			  fill="none"
			  stroke="hsl(var(--gold) / 0.25)"
			  strokeWidth="2"
			  strokeLinecap="round"
			/>
		  </svg>

		  {/* сами карточки, раскиданные по пути */}
		  <PrincipleCard
			principle={principles[0]}
			positionClass="top-[12%] left-[4%]"
			delay={0}
		  />
		  <PrincipleCard
			principle={principles[1]}
			positionClass="top-[22%] left-[40%]"
			delay={120}
		  />
		  <PrincipleCard
			principle={principles[2]}
			positionClass="top-[46%] right-[6%]"
			delay={240}
		  />
		  <PrincipleCard
			principle={principles[3]}
			positionClass="bottom-[18%] right-[22%]"
			delay={360}
		  />
		  <PrincipleCard
			principle={principles[4]}
			positionClass="bottom-[5%] left-[10%]"
			delay={480}
		  />
		</div>

		{/* мобильная версия — таймлайн как на About */}
		{/* мобильная версия — строго как в примере с Tailwind */}
		<div className="md:hidden mt-6">
		  <ol className="relative border-s border-border/70 ps-4 ms-2">
			{principles.map((principle) => (
			  <li key={principle.id} className="mb-6 ms-4">
				{/* точка ровно на линии */}
				<div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-background shadow-[0_0_0_4px_rgba(255,184,66,0.18)]" />
		
				<h3 className="text-sm font-semibold text-foreground">
				  {principle.title}
				</h3>
				<p className="mt-1 text-xs text-muted-foreground leading-relaxed">
				  {principle.description}
				</p>
			  </li>
			))}
		  </ol>
		</div>
	  </div>
	</section>
  );
};

export default DesignPrinciples;