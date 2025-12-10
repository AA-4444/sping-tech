// src/components/CTA.tsx
import { useState, FormEvent } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/bg3.png";

const CTA = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const openDemo = () => {
    setSent(false);
    setIsDemoOpen(true);
  };

  const closeDemo = () => setIsDemoOpen(false);

  const handleDemoSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("form_type", "demo_request");

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
    } catch (err) {
      console.error("Demo form error", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-10 w-full">
        <div
          className="
            w-full
            max-w-[1600px] mx-auto
            rounded-[2.5rem]
            overflow-hidden
            relative
          "
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-background to-navy-light" />

            <div
              className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/20 animate-pulse"
              style={{ animationDuration: "8s" }}
            />

            <img
              src={heroBg}
              alt="Casino CTA Background"
              className="w-full h-full object-cover opacity-25 mix-blend-overlay"
            />

            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 15% 40%, hsl(var(--primary) / 0.16) 0%, transparent 55%),
                  radial-gradient(circle at 80% 75%, hsl(var(--primary) / 0.18) 0%, transparent 55%),
                  radial-gradient(circle at 45% 15%, hsl(var(--gold) / 0.18) 0%, transparent 45%)
                `,
              }}
            />

            <div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/25 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: "6s" }}
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gold/18 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: "9s", animationDelay: "1.5s" }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/80" />
          </div>

          <div className="relative z-10 px-6 sm:px-16 py-20 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Ready to Launch Your
              <span className="block text-primary mt-2">Casino Platform?</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
              Join successful operators who trust our proven casino solutions.
              Get started today with a personalized consultation.
            </p>

            <div className="pt-10 flex justify-center">
              <Button
                size="lg"
                className="
                  w-full sm:w-56
                  px-8 py-6
                  text-base sm:text-lg
                  font-semibold
                  bg-primary text-primary-foreground
                  hover:bg-primary/90
                  shadow-[0_0_40px_hsl(var(--primary)/0.4)]
                  transition-all
                "
                onClick={openDemo}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {isDemoOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-lg mx-4 rounded-3xl bg-background border border-border p-6 sm:p-8">
            <button
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/5"
              onClick={closeDemo}
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Schedule a demo
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Share a few details and we&apos;ll arrange a live walkthrough of the Sping.tech platform.
            </p>

            {sent ? (
              <div className="text-sm sm:text-base text-primary">
                Thanks! Your demo request has been sent. We&apos;ll get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-4">
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
                    What do you want to see in the demo?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full rounded-xl bg-secondary border border-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Casino / sportsbook / backoffice / CRM / bonus engine…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 rounded-xl bg-primary text-primary-foreground text-sm font-semibold py-3 hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Request demo"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CTA;