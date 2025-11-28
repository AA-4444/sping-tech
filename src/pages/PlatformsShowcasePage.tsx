// src/pages/PlatformsShowcasePage.tsx
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

import ImagePreviewModal from "@/components/ImagePreviewModal";

import case1Img from "@/assets/preview.png";
import previewImg from "@/assets/preview.png";

type PlatformCase = {
  id: number;
  codename: string;
  type: string;
  region: string;
  scale: string;
  role: string;
  stack: string;
  image: string;
};

const platformCases: PlatformCase[] = [
  {
	id: 1,
	codename: "Tier-1 Casino · Europe",
	type: "Casino platform",
	region: "EU regulated markets",
	scale: "1M+ monthly active players",
	role: "Full platform build & migration from legacy vendor",
	stack: "Casino engine, PAM, payments, risk & bonus tools",
	image: case1Img,
  },
];

type PlatformCardProps = {
  data: PlatformCase;
  onPreview: (src: string) => void;
};

const PlatformCard = ({ data: p, onPreview }: PlatformCardProps) => (
  <article className="relative flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card/95 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
	{/* фон-скриншот, кликабельный — открывает большой preview */}
	<div
	  className="relative h-44 sm:h-48 cursor-pointer"
	  onClick={() => onPreview(previewImg)}
	>
	  <img
		src={p.image}
		alt={p.codename}
		className="h-full w-full object-cover brightness-[0.45] saturate-75"
	  />
	  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/5" />

	  {/* псевдо-логотип / чип */}
	  <div className="absolute bottom-4 left-4 flex items-center gap-3">
		<div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/50 bg-[radial-gradient(circle_at_30%_0%,rgba(250,204,21,0.35),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(250,204,21,0.16),transparent_60%)] shadow-[0_0_25px_rgba(250,204,21,0.25)]">
		  <span className="text-sm font-semibold text-primary">{`C${p.id}`}</span>
		</div>
		<div>
		  <p className="text-[10px] uppercase tracking-[0.24em] text-primary/70">
			Case study
		  </p>
		  <h3 className="text-xs sm:text-sm font-semibold">{p.codename}</h3>
		</div>
	  </div>
	</div>

	{/* контент */}
	<div className="flex-1 p-5 sm:p-6 space-y-4">
	  <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground">
		<span className="rounded-full border border-border/70 px-3 py-1 bg-background/60">
		  {p.type}
		</span>
		<span className="rounded-full border border-border/70 px-3 py-1 bg-background/60">
		  {p.region}
		</span>
		<span className="rounded-full border border-primary/40 px-3 py-1 bg-primary/5 text-primary">
		  {p.scale}
		</span>
	  </div>

	  <div className="space-y-1.5 text-sm text-muted-foreground">
		<p className="text-foreground/90">{p.role}</p>
		<p className="text-xs sm:text-[13px] text-muted-foreground">
		  {p.stack}
		</p>
	  </div>

	  <button
		type="button"
		className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors"
		onClick={() => {
		  window.location.href = "/contact";
		}}
	  >
		Request full case study
		<ArrowRight className="h-3.5 w-3.5" />
	  </button>
	</div>
  </article>
);

const PlatformsShowcasePage = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewSrc, setPreviewSrc] = useState<string>("");

  const openPreview = (src: string) => {
	setPreviewSrc(src);
	setPreviewOpen(true);
  };

  const closePreview = () => {
	setPreviewOpen(false);
	setPreviewSrc("");
  };

  return (
	<div className="min-h-screen bg-background text-foreground">
	  <Navigation />

	  <main className="pt-20 pb-16 sm:pb-20 lg:pb-24">
		{/* HERO */}
		<section className="py-10 sm:py-14 lg:py-16 border-b border-border/60 bg-background/80">
		  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl space-y-4">
			  <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-primary">
				Platforms
			  </p>
			  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
				Selected{" "}
				<span className="text-primary">platforms we’ve built</span>
			  </h1>
			  <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
				We design, build and operate full casino, sportsbook and crypto
				platforms. Client brands and visual identities are anonymised
				due to NDA — but the scale, stack and results are real.
			  </p>
			</div>
		  </div>
		</section>

		{/* GRID С КЕЙСАМИ */}
		<section className="py-12 sm:py-16 lg:py-20">
		  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
			  {platformCases.map((item) => (
				<PlatformCard
				  key={item.id}
				  data={item}
				  onPreview={openPreview}
				/>
			  ))}
			</div>

			{/* NDA дисклеймер */}
			<p className="mt-10 text-xs sm:text-[13px] text-muted-foreground max-w-3xl">
			  Brand names, logos, domains and parts of the interface are
			  intentionally hidden or restyled under non-disclosure agreements.
			  For a deep dive into specific cases, reach out to our team and we
			  can share details under NDA.
			</p>
		  </div>
		</section>
	  </main>

	  <Footer />

	  {/* Модалка предпросмотра платформы */}
	  <ImagePreviewModal
		src={previewSrc}
		isOpen={previewOpen}
		onClose={closePreview}
	  />
	</div>
  );
};

export default PlatformsShowcasePage;