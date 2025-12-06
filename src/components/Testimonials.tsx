// src/components/Testimonials.tsx
import { Card } from "@/components/ui/card";
import testimonialImage from "@/assets/spinglogo.jpg";
import { Quote } from "lucide-react";

const testimonials = [
  {
	quote:
	  "Migrating to Sping.tech was the best technical decision we made. Platform uptime, reporting accuracy and bonus engine flexibility significantly improved player retention across all markets.",
	name: "Jonathan R.",
	role: "COO, Tier-2 Casino Operator",
  },
  {
	quote:
	  "We launched our crypto casino on Sping.tech in record time. Seamless integrations, stable payment flows and high-speed gameplay helped us scale faster than expected.",
	name: "Elena M.",
	role: "Founder, Crypto iGaming Brand",
  },
  {
	quote:
	  "Traffic during major sports events is no longer a problem. The system handled peak loads flawlessly. Their support team reacts instantly and understands iGaming specifics deeply.",
	name: "Michael B.",
	role: "Head of Operations, Sportsbook",
  },
  {
	quote:
	  "The level of customization Sping.tech provides is unmatched. We received a fully branded platform with unique features tailored to our player base. True enterprise-grade engineering.",
	name: "David K.",
	role: "CEO, Multi-Brand Casino Group",
  },
];

const Testimonials = () => {
  return (
	<section className="py-24 bg-background relative">
	  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

		<div className="text-center mb-16">
		  <h2 className="text-5xl sm:text-6xl font-bold">
			What our <span className="text-primary">clients say</span>
		  </h2>
		  <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
			Real feedback from operators scaling on the Sping.tech iGaming platform.
		  </p>
		</div>

		<div
		  className="
			md:grid md:grid-cols-4 md:gap-8
			flex gap-6
			overflow-x-auto md:overflow-visible
			pb-4
		  "
		>
		  {testimonials.map((t) => (
			<div
			  key={t.name}
			  className="
				relative group
				h-[420px]
				min-w-[280px] sm:min-w-[320px] md:min-w-0
				shrink-0 md:shrink
			  "
			>
			  <div
				className="
				  absolute left-0 right-0 top-0
				  h-[180px]
				  z-10
				  overflow-hidden
				  rounded-2xl
				  opacity-0 
				  translate-y-[70px]
				  scale-95
				  rotate-0
				  transition-all duration-700 ease-out
				  group-hover:opacity-100
				  group-hover:translate-y-0
				  group-hover:scale-100
				  group-hover:rotate-[-8deg]
				  pointer-events-none
				"
				style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8)" }}
			  >
				<img src={testimonialImage} alt="" className="w-full h-full object-cover" />
			  </div>

			  <Card
				className="
				  absolute left-0 right-0 top-[50px]
				  h-full
				  z-20
				  rounded-2xl
				  bg-background
				  border border-border
				  p-6
				  text-left
				  shadow-[0_4px_20px_rgba(0,0,0,0.35)]
				  transition-all duration-700
				  flex flex-col justify-between
				  group-hover:translate-y-[90px]
				  group-hover:rotate-[5deg]
				  group-hover:border-primary
				"
			  >
				<div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary">
				  <Quote className="w-5 h-5 text-background" />
				</div>

				<p className="text-sm sm:text-base text-foreground leading-relaxed">
				  {t.quote}
				</p>

				<div>
				  <div className="font-semibold text-lg text-foreground">{t.name}</div>
				  <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
				</div>
			  </Card>
			</div>
		  ))}
		</div>

	  </div>
	</section>
  );
};

export default Testimonials;