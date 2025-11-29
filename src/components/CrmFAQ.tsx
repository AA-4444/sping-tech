// src/components/CrmFAQ.tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const crmFaqs = [
  {
	q: "What is included in the CRM platform?",
	a: "The CRM includes player 360 profiles, segmentation, lifecycle journeys, campaign automation, real-time triggers, multi-channel messaging, and performance analytics.",
  },
  {
	q: "How does CRM help increase player retention?",
	a: "By using behavior-based triggers, personalized journeys, VIP segmentation, churn-risk scoring, and automated reactivation flows that run without manual work from CRM teams.",
  },
  {
	q: "Can I run multi-channel campaigns?",
	a: "Yes. The CRM supports email, SMS, push notifications, onsite popups, in-game messages, and custom channels through API. You can mix channels in the same journey.",
  },
  {
	q: "Does the CRM support real-time player data?",
	a: "Yes. Player balances, sessions, bets, deposits, withdrawals, tags, and events update instantly, enabling real-time triggers and dynamic segmentation.",
  },
  {
	q: "Is it possible to create automated journeys without developers?",
	a: "Absolutely. The CRM includes a visual drag-and-drop journey builder where marketing teams can create flows using conditions, delays, A/B groups, and triggers.",
  },
  {
	q: "Does the CRM integrate with external marketing tools?",
	a: "Yes. You can push segments, event streams, and campaign data to external BI, email services, affiliate systems, and ad networks via API.",
  },
  {
	q: "How does the CRM support VIP management?",
	a: "VIP managers receive full player profiles, notes, tasks, tags, activity timelines, and priority dashboards for managing high-value players efficiently.",
  },
];

const CrmFAQ = () => {
  return (
	<section className="py-24 bg-background relative">
	  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
		<div className="text-center mb-12">
		  <h2 className="text-4xl sm:text-5xl font-bold mb-4">
			CRM Platform <span className="text-primary">FAQ</span>
		  </h2>
		  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
			Answers to the most common questions about Sping.tech CRM and its capabilities.
		  </p>
		</div>

		<Accordion
		  type="single"
		  collapsible
		  className="space-y-4 max-w-4xl mx-auto"
		>
		  {crmFaqs.map((item, i) => (
			<AccordionItem
			  key={i}
			  value={`crm-faq-${i}`}
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

export default CrmFAQ;