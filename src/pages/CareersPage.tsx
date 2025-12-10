// src/pages/CareersPage.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  {
	id: 1,
	title: "Senior Backend Engineer (Node.js)",
	type: "Full-time · Remote",
	description:
	  "Build and scale high-load services powering our casino and CRM platforms. You’ll work on real-time pipelines, payments, risk engines and modular architecture.",
  },
  {
	id: 2,
	title: "Frontend Engineer (React / TypeScript)",
	type: "Full-time · Remote",
	description:
	  "Help deliver highly-configurable casino lobbies, dashboards and internal tools used by operators worldwide.",
  },
  {
	id: 3,
	title: "Senior UX / UI Designer",
	type: "Full-time · Remote",
	description:
	  "Design casino lobbies, CRM workflows, player journeys and enterprise dashboards with a clean product-first approach.",
  },
  {
	id: 4,
	title: "DevOps Engineer (Kubernetes)",
	type: "Full-time · Remote",
	description:
	  "Maintain multi-region deployments, observability stack, CI/CD pipelines and infrastructure security.",
  },
  {
	id: 5,
	title: "QA Automation Engineer",
	type: "Full-time · Remote",
	description:
	  "Develop automated testing pipelines for games, payments, CRM and admin tools. Experience with high-load systems is a bonus.",
  },
  {
	id: 6,
	title: "Project Manager (iGaming)",
	type: "Full-time · Remote",
	description:
	  "Manage releases, coordinate teams and ensure smooth delivery of casino & sportsbook solutions.",
  },
  {
	id: 7,
	title: "Product Manager (Casino Platform)",
	type: "Full-time · Remote",
	description:
	  "Own roadmap for bonus engine, payments, risk tools and player systems. Previous iGaming experience required.",
  },
  {
	id: 8,
	title: "Data Engineer",
	type: "Full-time · Remote",
	description:
	  "Build ETL pipelines, event streams, cohort analytics and retention metrics for casino operators.",
  },
  {
	id: 9,
	title: "Affiliate Manager",
	type: "Full-time · Remote",
	description:
	  "Work with affiliate networks, optimize traffic performance and build long-term partnerships.",
  },
  {
	id: 10,
	title: "Customer Success Manager",
	type: "Full-time · Remote",
	description:
	  "Guide operators through onboarding, feature adoption and scaling strategies.",
  },
];

const CareersPage = () => {
  return (
	<div className="min-h-screen bg-background text-foreground">
	  <Navigation />

	  <main className="pt-28 pb-20">
		<section className="container mx-auto px-4 sm:px-6 lg:px-8">
		  
		  <div className="max-w-3xl mb-12">
			<h1 className="text-4xl sm:text-5xl font-bold">
			  Careers at <span className="text-primary">Sping.tech</span>
			</h1>
			<p className="text-muted-foreground mt-4 text-lg">
			  We're a fully remote engineering team building next-generation
			  iGaming platforms. Join us and work on products used by operators worldwide.
			</p>
		  </div>

		  <div className="grid gap-6 lg:grid-cols-2">
			{jobs.map((job) => (
			  <article
				key={job.id}
				className="p-6 rounded-2xl border border-border bg-card/70 backdrop-blur shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:border-primary/60 transition-all"
			  >
				<h3 className="text-xl font-semibold">{job.title}</h3>
				<p className="text-sm text-primary/80 mt-1">{job.type}</p>

				<p className="text-sm text-muted-foreground mt-4">
				  {job.description}
				</p>

				<Button
				  className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
				>
				  Apply Now
				  <ArrowRight className="ml-2 h-4 w-4" />
				</Button>
			  </article>
			))}
		  </div>
		</section>
	  </main>

	  <Footer />
	</div>
  );
};

export default CareersPage;