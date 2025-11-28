import { useState } from "react";
import {
  LayoutDashboard,
  WalletCards,
  LineChart,
  ShieldCheck,
  Gamepad2,
  Users,
  Link2,
  Globe2,
} from "lucide-react";

type Module = {
  id: string;
  name: string;
  shortLabel: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const allModules: Module[] = [
  {
	id: "casino",
	name: "Casino Core",
	shortLabel: "Casino",
	description: "Game aggregation, bonus engine and player journeys.",
	icon: Gamepad2,
  },
  {
	id: "payments",
	name: "Crypto & Payments",
	shortLabel: "Crypto",
	description: "Crypto-first gateway with fiat support and smart routing.",
	icon: WalletCards,
  },
  {
	id: "analytics",
	name: "Reporting & Analytics",
	shortLabel: "Analytics",
	description: "Real-time dashboards, cohorts and profitability tracking.",
	icon: LineChart,
  },
  {
	id: "security",
	name: "Security & Risk",
	shortLabel: "Security",
	description: "Fraud checks, limits, velocity rules and incident alerts.",
	icon: ShieldCheck,
  },
  {
	id: "crm",
	name: "CRM & Retention",
	shortLabel: "CRM",
	description: "Segmentation, campaigns, journeys and promotion tools.",
	icon: Users,
  },
  {
	id: "backoffice",
	name: "Back-Office",
	shortLabel: "Back Office",
	description: "Permissions, brand management and operational tooling.",
	icon: LayoutDashboard,
  },
  {
	id: "affiliate",
	name: "Affiliate Hub",
	shortLabel: "Affiliate",
	description: "Partner programs, tracking, payouts and analytics.",
	icon: Link2,
  },
  {
	id: "localization",
	name: "Localization",
	shortLabel: "Localization",
	description: "Multi-language, multi-currency and regional settings.",
	icon: Globe2,
  },
];

// helpers
const polarToCartesian = (cx: number, cy: number, r: number, angleDeg: number) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
	x: cx + r * Math.cos(rad),
	y: cy + r * Math.sin(rad),
  };
};

const getRingSectorPath = (
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  startAngle: number,
  endAngle: number
) => {
  const outerStart = polarToCartesian(cx, cy, outerR, startAngle);
  const outerEnd = polarToCartesian(cx, cy, outerR, endAngle);
  const innerEnd = polarToCartesian(cx, cy, innerR, endAngle);
  const innerStart = polarToCartesian(cx, cy, innerR, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
	"M",
	outerStart.x,
	outerStart.y,
	"A",
	outerR,
	outerR,
	0,
	largeArcFlag,
	1,
	outerEnd.x,
	outerEnd.y,
	"L",
	innerEnd.x,
	innerEnd.y,
	"A",
	innerR,
	innerR,
	0,
	largeArcFlag,
	0,
	innerStart.x,
	innerStart.y,
	"Z",
  ].join(" ");
};

const PlatformConfigurator = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([
	"casino",
	"payments",
	"analytics",
	"security",
  ]);

  const handleToggle = (id: string) => {
	setSelectedIds((prev) =>
	  prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
	);
  };

  const handleDropToSelected = (e: React.DragEvent<HTMLDivElement>) => {
	e.preventDefault();
	const id = e.dataTransfer.getData("moduleId");
	if (!id) return;
	handleToggle(id);
  };

  const handleDropToAvailable = (e: React.DragEvent<HTMLDivElement>) => {
	e.preventDefault();
	const id = e.dataTransfer.getData("moduleId");
	if (!id) return;
	setSelectedIds((prev) => prev.filter((x) => x !== id));
  };

  const availableModules = allModules.filter((m) => !selectedIds.includes(m.id));
  const selectedModules = allModules.filter((m) => selectedIds.includes(m.id));

  const totalSlots = allModules.length;
  const anglePer = 360 / totalSlots;

  const isFull = selectedModules.length === allModules.length;

  return (
	<section className="py-24 bg-background relative overflow-hidden">
	  {/* фон */}
	  <div className="pointer-events-none absolute inset-0 opacity-40">
		<div className="absolute -top-32 left-0 w-80 h-80 rounded-full bg-primary/15 blur-3xl animate-glow" />
		<div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/12 blur-3xl animate-glow" />
	  </div>

	  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
		<div className="text-center mb-12 max-w-3xl mx-auto">
		  <h2 className="text-4xl sm:text-5xl font-bold mb-4">
			Platform tailored to <span className="text-primary">your needs</span>
		  </h2>
		  <p className="text-lg text-muted-foreground">
			Drag modules into the wheel to design your ideal casino platform. Remove
			them just as easily. Tap on cards or active sectors on mobile to toggle.
		  </p>
		</div>

		<div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
		  {/* ЛЕВАЯ ЧАСТЬ — круг */}
		  <div className="flex justify-center">
			<div
			  className="relative w-full max-w-xl aspect-square rounded-full bg-gradient-to-br from-navy via-background to-navy-light shadow-[0_0_80px_hsl(var(--primary)/0.35)] animate-scale-in"
			  onDragOver={(e) => e.preventDefault()}
			  onDrop={handleDropToSelected}
			>
			  <svg className="w-full h-full" viewBox="0 0 200 200">
				<circle
				  cx="100"
				  cy="100"
				  r="96"
				  fill="none"
				  stroke="hsl(var(--primary) / 0.35)"
				  strokeWidth="1.2"
				/>

				{allModules.map((mod, index) => {
				  const selected = selectedIds.includes(mod.id);
				  if (!selected) return null;

				  const start = index * anglePer;
				  const end = (index + 1) * anglePer;
				  const mid = (start + end) / 2;

				  const path = getRingSectorPath(100, 100, 48, 92, start, end);
				  const labelPos = polarToCartesian(100, 100, 70, mid);

				  const label = mod.shortLabel || mod.name;
				  const fontSize = label.length > 9 ? 5 : 6.5;

				  return (
					<g key={mod.id}>
					  <path
						d={path}
						style={{
						  fill: "hsl(var(--primary) / 0.7)",
						  stroke: "hsl(var(--border))",
						  strokeWidth: 0.6,
						}}
						className="cursor-pointer transition-all duration-300 hover:brightness-110"
						onClick={() => handleToggle(mod.id)}
					  />
					  <text
						x={labelPos.x}
						y={labelPos.y}
						textAnchor="middle"
						dominantBaseline="middle"
						className="pointer-events-none select-none"
						style={{
						  fontSize,
						  fill: "hsl(var(--primary-foreground))",
						}}
					  >
						{label}
					  </text>
					</g>
				  );
				})}

				<circle
				  cx="100"
				  cy="100"
				  r="44"
				  fill="hsl(var(--card) / 0.95)"
				  stroke="hsl(var(--border))"
				  strokeWidth="0.8"
				/>
			  </svg>

			  <div className="pointer-events-none absolute inset-[30%] flex flex-col items-center justify-center text-center px-4">
				<p className="text-sm sm:text-base font-semibold uppercase tracking-[0.35em] text-primary">
				  {isFull ? "All-In-One Platform" : "Your Platform"}
				</p>
			  </div>

			  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-muted-foreground/80">
				Drag modules here to activate • Click active sector to remove
			  </div>
			</div>
		  </div>

		  {/* ПРАВАЯ ЧАСТЬ — список модулей */}
		  <div
			className="space-y-4 lg:max-h-[520px] lg:overflow-y-auto pr-1 mt-8 lg:mt-0"
			onDragOver={(e) => e.preventDefault()}
			onDrop={handleDropToAvailable}
		  >
			<p className="text-sm uppercase tracking-[0.25em] text-primary/80 mb-2">
			  Available Modules
			</p>

			{availableModules.map((mod) => {
			  const Icon = mod.icon;
			  const isSelected = selectedIds.includes(mod.id);

			  return (
				<div
				  key={mod.id}
				  className="group rounded-2xl border border-border/70 bg-card/80 p-4 sm:p-5 shadow-sm flex items-center gap-3 sm:gap-4 cursor-grab active:cursor-grabbing transition-all duration-300 hover:border-primary/70 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)]"
				  draggable
				  onDragStart={(e) => e.dataTransfer.setData("moduleId", mod.id)}
				  onClick={() => handleToggle(mod.id)}
				>
				  <div className="rounded-2xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors shrink-0">
					<Icon className="w-5 h-5 text-primary" />
				  </div>
				  <div className="space-y-1">
					<div className="flex items-center gap-2">
					  <h3 className="text-base sm:text-lg font-semibold">
						{mod.name}
					  </h3>
					  {isSelected && (
						<span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/40">
						  Active
						</span>
					  )}
					</div>
					<p className="text-sm text-muted-foreground">
					  {mod.description}
					</p>
				  </div>
				</div>
			  );
			})}

			{availableModules.length === 0 && (
			  <p className="text-sm text-muted-foreground/70">
				All modules are already in your platform wheel. Drop any active
				sector here or tap it to deactivate.
			  </p>
			)}
		  </div>
		</div>
	  </div>
	</section>
  );
};

export default PlatformConfigurator;