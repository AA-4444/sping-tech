// src/pages/EventsPage.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
	name: "ICE London 2025",
	date: "January 20–22, 2025",
	location: "London, UK",
	link: "https://www.icelondon.uk.com/",
  },
  {
	name: "iGB Affiliate London 2025",
	date: "January 23–25, 2025",
	location: "London, UK",
	link: "https://www.igbaffiliate.com/",
  },
  {
	name: "SiGMA World Europe",
	date: "November 2025",
	location: "Valletta, Malta",
	link: "https://sigma.world/europe/",
  },
  {
	name: "SiGMA Eurasia",
	date: "April 2025",
	location: "Dubai, UAE",
	link: "https://sigma.world/eurasia/",
  },
  {
	name: "SBC Summit Lisbon",
	date: "September 2025",
	location: "Lisbon, Portugal",
	link: "https://sbcevents.com/",
  },
  {
	name: "CasinoBeats Summit",
	date: "May 2025",
	location: "Malta",
	link: "https://sbcevents.com/casinobeats-summit/",
  },
  {
	name: "Affiliate World Dubai",
	date: "February 2025",
	location: "Dubai, UAE",
	link: "https://affiliateworldconferences.com/dubai/",
  },
  {
	name: "ASEAN Gaming Summit",
	date: "March 2025",
	location: "Manila, Philippines",
	link: "https://aseangaming.com/",
  },
];

const EventsPage = () => {
  return (
	<div className="min-h-screen bg-background text-foreground">
	  <Navigation />

	  <main className="pt-28 pb-20">
		<section className="container mx-auto px-4 sm:px-6 lg:px-8">

		  <div className="max-w-3xl mb-12">
			<h1 className="text-4xl sm:text-5xl font-bold">
			  iGaming & Affiliate  
			  <span className="text-primary"> Events 2025</span>
			</h1>
			<p className="text-muted-foreground mt-4 text-lg">
			  Major conferences, expos and networking events happening in 2025.
			  Meet operators, affiliates, platforms and industry leaders.
			</p>
		  </div>

		  <div className="grid gap-6 lg:grid-cols-2">
			{events.map((event, i) => (
			  <article
				key={i}
				className="p-6 rounded-2xl border border-border bg-card/70 backdrop-blur shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:border-primary/60 transition-all"
			  >
				<h3 className="text-xl font-semibold">{event.name}</h3>

				<div className="flex items-center gap-2 text-sm text-primary/80 mt-3">
				  <Calendar className="h-4 w-4" /> {event.date}
				</div>

				<div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
				  <MapPin className="h-4 w-4" /> {event.location}
				</div>

				<a
				  href={event.link}
				  target="_blank"
				  className="inline-flex items-center gap-2 text-sm text-primary mt-5 hover:text-primary/80 transition"
				>
				  Visit website <ArrowRight className="h-4 w-4" />
				</a>
			  </article>
			))}
		  </div>
		</section>
	  </main>

	  <Footer />
	</div>
  );
};

export default EventsPage;