// src/pages/CareersPage.tsx
import { useState, FormEvent } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, X } from "lucide-react";
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
  const [activeJobTitle, setActiveJobTitle] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const openForm = (jobTitle: string) => {
	setActiveJobTitle(jobTitle);
	setFormName("");
	setFormEmail("");
	setFormMessage("");
	setIsModalOpen(true);
  };

  const closeForm = () => {
	setIsModalOpen(false);
	setActiveJobTitle(null);
  };

  const handleSubmit = (e: FormEvent) => {
	e.preventDefault();

	// здесь можно будет подвязать отправку на бекенд / почту
	console.log("Job application:", {
	  position: activeJobTitle,
	  name: formName,
	  email: formEmail,
	  message: formMessage,
	});

	closeForm();
  };

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
				  onClick={() => openForm(job.title)}
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

	  {isModalOpen && activeJobTitle && (
		<div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4">
		  <div className="relative w-full max-w-lg rounded-2xl border border-border bg-card shadow-[0_18px_55px_rgba(0,0,0,0.85)] p-6 sm:p-7">
			<button
			  onClick={closeForm}
			  className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
			>
			  <X className="h-5 w-5" />
			</button>

			<h2 className="text-2xl font-bold">
			  Apply for <span className="text-primary">{activeJobTitle}</span>
			</h2>
			<p className="text-sm text-muted-foreground mt-2">
			  Share a few details about yourself and we’ll get back to you.
			</p>

			<form onSubmit={handleSubmit} className="mt-6 space-y-4">
			  <div>
				<label className="block text-sm mb-1">Full name</label>
				<input
				  required
				  value={formName}
				  onChange={(e) => setFormName(e.target.value)}
				  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
				/>
			  </div>

			  <div>
				<label className="block text-sm mb-1">Email</label>
				<input
				  required
				  type="email"
				  value={formEmail}
				  onChange={(e) => setFormEmail(e.target.value)}
				  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
				/>
			  </div>

			  <div>
				<label className="block text-sm mb-1">Message / Cover letter</label>
				<textarea
				  required
				  value={formMessage}
				  onChange={(e) => setFormMessage(e.target.value)}
				  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary min-h-[120px]"
				/>
			  </div>

			  <Button
				type="submit"
				className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
			  >
				Submit application
			  </Button>
			</form>
		  </div>
		</div>
	  )}
	</div>
  );
};

export default CareersPage;