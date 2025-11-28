import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
	q: "What features does your casino platform offer?",
	a: "Our platform includes full back-office, payment system integrations, advanced analytics, customizable frontend, risk tools, bonus systems, and multi-language & multi-currency support.",
  },
  {
	q: "Can I customize the casino platform?",
	a: "Yes. You can customize UI/UX, features, branding, payment options, game providers, bonus logic, and even backend modules depending on your needs.",
  },
  {
	q: "How does the platform handle multiple languages and currencies?",
	a: "The system supports unlimited languages, RTL layouts, and automatic currency conversion with configurable exchange rates.",
  },
  {
	q: "Why is security important?",
	a: "We follow enterprise-grade security standards, including encryption, multi-layer fraud protection, risk scoring, and continuous monitoring.",
  },
  {
	q: "What tools are available?",
	a: "KPI dashboards, segmentation tools, promotion builders, CRM, affiliate system, player history, fraud detection, payment routing and more.",
  },
];

const FAQ = () => {
  return (
	<section className="py-24 bg-background relative">
	  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
		<div className="text-center mb-12">
		  <h2 className="text-4xl sm:text-5xl font-bold mb-4">
			Frequently Asked <span className="text-primary">Questions</span>
		  </h2>
		  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
			Everything you need to know about our casino platform solutions.
		  </p>
		</div>

		<Accordion
		  type="single"
		  collapsible
		  className="space-y-4 max-w-4xl mx-auto"
		>
		  {faqs.map((item, i) => (
			<AccordionItem
			  key={i}
			  value={`faq-${i}`}
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

export default FAQ;