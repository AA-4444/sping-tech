// src/pages/OurTeam.tsx
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";

import boryslavPhoto from "@/assets/boryslav.png";
import oleksiiPhoto from "@/assets/oleksii.png";
import iliaPhoto from "@/assets/ilia.png";
import daniaPhoto from "@/assets/dania.png";
import vasoPhoto from "@/assets/vaso.png";
import spingLogo from "@/assets/sping-logo.png";

type Teammate = {
  id: number;
  name: string;
  role: string;
  email: string;
  location?: string;
  avatarUrl?: string;
};

const coreTeam: Teammate[] = [
	
  {
	id: 1,
	name: "Boryslav Kyselov",
	role: "Co-Founder & CMO",
	email: "client@sping.tech",
	avatarUrl: boryslavPhoto,
  },
  {
	id: 2,
	name: "Oleksii Zarytskyi",
	role: "Lead Platform Architect",
	email: "client@sping.tech",
	avatarUrl: oleksiiPhoto,
  },
  {
	id: 3,
	name: "Ilia Zarytskyi",
	role: "Platform Backend Engineer",
	email: "client@sping.tech",
	avatarUrl: iliaPhoto,
  },
  {
	id: 4,
	name: "Dania Litkovics",
	role: "Platform Backend Engineer",
	email: "client@sping.tech",
	avatarUrl: daniaPhoto,
  },
  {
	id: 5,
	name: "Vaso Berulava",
	role: "Digital Marketing Lead",
	email: "client@sping.tech",
	avatarUrl: vasoPhoto,
  },
  {
	  id: 6,
	  name: "Alina Dianova",
	  role: "USA Miami represantative",
	  email: "@dianovafilmdirector",
	  avatarUrl: vasoPhoto,
	},
];

const contacts: Teammate[] = [
  {
	id: 1,
	name: "General inquiries",
	role: "Reach out for anything related to the platform or potential collaboration.",
	email: "client@sping.tech",
	avatarUrl: spingLogo,        
  },
  {
	id: 2,
	name: "Sales & Partnerships",
	role: "Platform deals, custom modules, white-label and revenue share models.",
	email: "client@sping.tech",
	avatarUrl: spingLogo,    
  },
  {
	id: 3,
	name: "Media & PR",
	role: "Interviews, conference talks, insights, press materials and quotes.",
	email: "client@sping.tech",
	avatarUrl: spingLogo,        
  },
];

const OurTeamPage = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollSlider = (direction: "left" | "right") => {
	if (!sliderRef.current) return;
	const container = sliderRef.current;
	const amount = container.clientWidth * 0.7;
	container.scrollBy({
	  left: direction === "left" ? -amount : amount,
	  behavior: "smooth",
	});
  };

  return (
	<div className="min-h-screen bg-background text-foreground">
	  <Navigation />

	  <main className="pt-16">
		{/* HERO */}
		<section className="py-16 sm:py-20 lg:py-24">
		  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl space-y-4">
			  <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1 text-xs sm:text-sm uppercase tracking-[0.25em] text-primary">
				Our team
			  </p>
			  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
				People behind <span className="text-primary">Sping.tech</span>
			  </h1>
			  <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
				A compact team of product, engineering and operations people
				focused on casino, and crypto platforms — not generic software
				projects.
			  </p>
			</div>
		  </div>
		</section>

		{/* SECTION 1 – HORIZONTAL TEAM SLIDER */}
		<section className="pb-16 sm:pb-20 lg:pb-24">
		  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="flex items-center justify-between gap-4 mb-6">
			  <h2 className="text-xl sm:text-2xl font-semibold">Core team</h2>

			  {/* стрелки только на md+ */}
			  <div className="hidden sm:flex items-center gap-2">
				<button
				  type="button"
				  onClick={() => scrollSlider("left")}
				  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-colors"
				>
				  <ArrowLeft className="w-4 h-4" />
				</button>
				<button
				  type="button"
				  onClick={() => scrollSlider("right")}
				  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-colors"
				>
				  <ArrowRight className="w-4 h-4" />
				</button>
			  </div>
			</div>

			<div className="relative">
			  <div
				ref={sliderRef}
				className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-border/60 scrollbar-track-transparent"
			  >
				{coreTeam.map((member) => (
				  <article
					key={member.id}
					className="snap-start shrink-0 w-[260px] sm:w-[280px] md:w-[300px] rounded-3xl border border-border bg-card/90 shadow-sm overflow-hidden flex flex-col"
				  >
					{/* Фото / плейсхолдер */}
					<div className="relative aspect-[3/4] bg-[radial-gradient(circle_at_0%_0%,rgba(255,184,66,0.2),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,184,66,0.12),transparent_55%)]">
					  {member.avatarUrl ? (
						<img
						  src={member.avatarUrl}
						  alt={member.name}
						  className="absolute inset-0 h-full w-full object-cover"
						/>
					  ) : (
						<div className="absolute inset-0 flex items-center justify-center">
						  <span className="text-4xl font-semibold text-primary/80">
							{member.name
							  .split(" ")
							  .map((n) => n[0])
							  .join("")}
						  </span>
						</div>
					  )}
					</div>

					<div className="flex-1 p-4 sm:p-5 space-y-2">
					  <h3 className="text-base sm:text-lg font-semibold">
						{member.name}
					  </h3>
					  <p className="text-sm text-primary/90">{member.role}</p>
					  {member.location && (
						<p className="text-xs text-muted-foreground">
						  {member.location}
						</p>
					  )}
					</div>

					<div className="px-4 sm:px-5 pb-4 sm:pb-5">
					  <a
						href={`mailto:${member.email}`}
						className="text-xs sm:text-sm text-primary underline underline-offset-4 hover:text-primary/80 break-all"
					  >
						{member.email}
					  </a>
					</div>
				  </article>
				))}
			  </div>

			  {/* стрелки поверх для мобильных (снизу по центру) */}
			  <div className="sm:hidden mt-2 flex justify-center gap-3">
				<button
				  type="button"
				  onClick={() => scrollSlider("left")}
				  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-colors"
				>
				  <ArrowLeft className="w-4 h-4" />
				</button>
				<button
				  type="button"
				  onClick={() => scrollSlider("right")}
				  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-colors"
				>
				  <ArrowRight className="w-4 h-4" />
				</button>
			  </div>
			</div>
		  </div>
		</section>

		<LocationsSection />

		{/* SECTION 2 – CONTACT BLOCKS */}
		
		<section className="pb-20 sm:pb-24 border-t border-border/60 bg-secondary/5">
		  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl py-10 space-y-3">
			  <h2 className="text-2xl sm:text-3xl font-bold">
				Talk to the <span className="text-primary">right person</span>
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground">
				Pick a track below to reach the team that can help you fastest.
				Each block opens your email client with the right address.
			  </p>
			</div>
		
			<div className="space-y-4">
			  {contacts.map((item) => (
				<a
				  key={item.id}
				  href={`mailto:${item.email}`}
				  className="group block rounded-3xl border border-border bg-card/90 px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7 shadow-sm hover:border-primary/70 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all"
				>
				  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
					{/* LEFT – title + description */}
					<div className="flex-1 space-y-1">
					  <h3 className="text-lg sm:text-xl font-semibold tracking-wide uppercase">
						{item.name}
					  </h3>
					  <p className="text-sm text-muted-foreground max-w-xl">
						{item.role}
					  </p>
					</div>
		
					{/* MIDDLE – email */}
					<div className="flex-1">
					  <p className="text-sm text-primary underline underline-offset-4 break-all group-hover:text-primary/80">
						{item.email}
					  </p>
					</div>
		
					{/* RIGHT – avatar or badge */}
					<div className="flex items-center justify-end sm:justify-center">
					  {item.avatarUrl ? (
						<div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-card flex items-center justify-center">
						  <img
							src={item.avatarUrl}
							alt={item.name}
							className="max-h-full max-w-full object-contain"
						  />
						</div>
					  ) : (
						<div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-[radial-gradient(circle_at_30%_0%,rgba(255,184,66,0.35),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(255,184,66,0.2),transparent_55%)] flex items-center justify-center text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">
						  Aereus
						</div>
					  )}
					</div>
				  </div>
				</a>
			  ))}
			</div>
		  </div>
		</section>
		
		<Footer />
	  </main>
	</div>
  );
};

export default OurTeamPage;