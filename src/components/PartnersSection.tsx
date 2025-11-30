// src/components/PartnersSection.tsx

import googleLogo from "@/assets/google.png";
import tgtartLogo from "@/assets/trgtart.png";
import sgLogo from "@/assets/sg.png";

import { useRef, type WheelEvent } from "react";

const partners = [
  { name: "Google", logo: googleLogo, url: "https://google.com" },
  { name: "TGTart", logo: tgtartLogo, url: "https://trgtart.com" },
  { name: "StateGate", logo: sgLogo, url: "https://stategate.us" },
];

const PartnersSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
	const container = scrollRef.current;
	if (!container) return;

	if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
	  e.preventDefault();
	  container.scrollLeft += e.deltaY;
	}
  };

  return (
	<section className="py-16 sm:py-20 bg-background">
	  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
		<h2 className="text-3xl sm:text-4xl font-bold mb-10">Partners</h2>

		<div
		  ref={scrollRef}
		  onWheel={handleWheel}
		  className="
			flex gap-6 overflow-x-auto pb-3 
			-mx-4 px-4 sm:mx-0 sm:px-0
			snap-x snap-mandatory
			scrollbar-none
		  "
		>
		  {partners.map((p) => (
			<a
			  key={p.name}
			  href={p.url}
			  target="_blank"
			  rel="noopener noreferrer"
			  className="
				snap-start
				flex items-center justify-center

				min-w-[80px] aspect-square
				sm:min-w-[100px]

				rounded-full
				bg-card/95
				border border-yellow-400/60

				transition-colors
				hover:border-yellow-300
				hover:bg-yellow-400/5
			  "
			>
			  <img
				src={p.logo}
				alt={p.name}
				className="max-w-[60%] max-h-[60%] object-contain opacity-95"
			  />
			</a>
		  ))}
		</div>
	  </div>
	</section>
  );
};

export default PartnersSection;