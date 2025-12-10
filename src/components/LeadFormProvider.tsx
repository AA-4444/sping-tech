// src/components/LeadFormProvider.tsx
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  FormEvent,
} from "react";
import { X } from "lucide-react";

type LeadFormContextValue = {
  openLeadForm: () => void;
  closeLeadForm: () => void;
};

const LeadFormContext = createContext<LeadFormContextValue | undefined>(
  undefined
);

export const useLeadForm = () => {
  const ctx = useContext(LeadFormContext);
  if (!ctx) {
	throw new Error("useLeadForm must be used inside LeadFormProvider");
  }
  return ctx;
};

export const LeadFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const openLeadForm = () => {
	setSent(false);
	setIsOpen(true);
  };
  const closeLeadForm = () => setIsOpen(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	if (isSubmitting) return;

	setIsSubmitting(true);
	const form = e.currentTarget;
	const formData = new FormData(form);

	try {
	  await fetch("https://formsubmit.co/ajax/trgtart.office@gmail.com", {
		method: "POST",
		body: formData,
		headers: {
		  Accept: "application/json",
		},
	  });

	  setSent(true);
	  form.reset();
	  // если хочешь сразу закрывать:
	  // closeLeadForm();
	} catch (err) {
	  console.error("Lead form error", err);
	  // тут можно повесить тост/алерт об ошибке
	} finally {
	  setIsSubmitting(false);
	}
  };

  return (
	<LeadFormContext.Provider value={{ openLeadForm, closeLeadForm }}>
	  {children}

	  {isOpen && (
		<div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-sm">
		  <div className="relative w-full max-w-lg mx-4 rounded-3xl bg-background border border-border p-6 sm:p-8">
			<button
			  className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/5"
			  onClick={closeLeadForm}
			>
			  <X className="w-5 h-5 text-muted-foreground" />
			</button>

			<h2 className="text-2xl sm:text-3xl font-bold mb-2">
			  Let&apos;s partner up
			</h2>
			<p className="text-sm sm:text-base text-muted-foreground mb-6">
			  Tell us a bit about your iGaming project and we&apos;ll get back
			  with a tailored proposal.
			</p>

			{sent ? (
			  <div className="text-sm sm:text-base text-primary">
				Thanks! Your request has been sent. We&apos;ll get back to you
				soon.
			  </div>
			) : (
			  <form onSubmit={handleSubmit} className="space-y-4">
				<div className="space-y-1">
				  <label className="text-sm text-muted-foreground">Name</label>
				  <input
					name="name"
					required
					className="w-full rounded-xl bg-secondary border border-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
					placeholder="Your name"
				  />
				</div>

				<div className="space-y-1">
				  <label className="text-sm text-muted-foreground">
					Company
				  </label>
				  <input
					name="company"
					className="w-full rounded-xl bg-secondary border border-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
					placeholder="Brand / Operator"
				  />
				</div>

				<div className="space-y-1">
				  <label className="text-sm text-muted-foreground">
					Work email
				  </label>
				  <input
					type="email"
					name="email"
					required
					className="w-full rounded-xl bg-secondary border border-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
					placeholder="you@company.com"
				  />
				</div>

				<div className="space-y-1">
				  <label className="text-sm text-muted-foreground">
					Project details
				  </label>
				  <textarea
					name="message"
					rows={4}
					className="w-full rounded-xl bg-secondary border border-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary resize-none"
					placeholder="Casino / sportsbook / platform needs, timelines, markets..."
				  />
				</div>

				<button
				  type="submit"
				  disabled={isSubmitting}
				  className="w-full mt-4 rounded-xl bg-primary text-primary-foreground text-sm font-semibold py-3 hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
				>
				  {isSubmitting ? "Sending..." : "Submit"}
				</button>
			  </form>
			)}
		  </div>
		</div>
	  )}
	</LeadFormContext.Provider>
  );
};