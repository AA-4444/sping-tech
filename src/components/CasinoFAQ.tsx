// src/components/CasinoFAQ.tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const casinoFaqs = [
  {
	q: "What types of iGaming products does the casino platform support?",
	a: "The platform supports online casino, live casino, sportsbook extensions, instant games and jackpots. You can start with casino only and add extra verticals later without re-platforming.",
  },
  {
	q: "Which game providers can be connected?",
	a: "We work with leading aggregators and direct integrations. You can plug in hundreds of providers (slots, live, crash, instant games) and control availability per GEO, brand and segment.",
  },
  {
	q: "How long does it take to launch a new casino brand?",
	a: "Typical launches take from 4 to 10 weeks depending on your jurisdictions, integrations and custom features. With our default setup, we can spin up an MVP casino much faster.",
  },
  {
	q: "Can you migrate an existing casino to your platform?",
	a: "Yes. We handle full migration: data import, wallet and bonus migration, game mapping, payment routing, and traffic cut-over with minimal downtime and no loss of player balances.",
  },
  {
	q: "How do you handle responsible gaming and compliance?",
	a: "The platform includes configurable limits, self-exclusion, reality checks, activity monitoring and reporting for regulated markets. Compliance rules can be adjusted per license and GEO.",
  },
  {
	q: "Is the platform optimized for mobile players?",
	a: "Yes. The casino frontend is mobile-first with fast loading times, smooth navigation, and support for PWA, deep links and app wrappers if needed.",
  },
];

const CasinoFAQ = () => {
  return (
	<section className="py-24 bg-background relative">
	  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
		<div className="text-center mb-12">
		  <h2 className="text-4xl sm:text-5xl font-bold mb-4">
			Casino Platform <span className="text-primary">FAQ</span>
		  </h2>
		  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
			Answers to the most common questions about launching and running
			an online casino with Sping.tech.
		  </p>
		</div>

		<Accordion
		  type="single"
		  collapsible
		  className="space-y-4 max-w-4xl mx-auto"
		>
		  {casinoFaqs.map((item, i) => (
			<AccordionItem
			  key={i}
			  value={`casino-faq-${i}`}
			  className="bg-card border border-border/70 rounded-2xl transition-colors duration-300 data-[state=open]:border-primary/70"
			>
			  <AccordionTrigger className="text-left text-lg sm:text-xl px-6 py-5">
				{item.q}
			  </AccordionTrigger>
			  <AccordionContent className="px-6 pb-6 text-muted-foreground text-base sm:text-lg">
				{item.a}
			  </AccordionContent>
			</AccordionItem>
		  ))}
		</Accordion>
	  </div>
	</section>
  );
};

export default CasinoFAQ;