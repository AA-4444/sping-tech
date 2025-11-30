// src/pages/PrivacyPolicy.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
	<div className="min-h-screen bg-background text-foreground">
	  <Navigation />

	  <main className="pt-20 pb-16 sm:pb-20 lg:pb-24">
		{/* HERO */}
		<section className="border-b border-border/60 bg-background/80">
		  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
			<p className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-primary">
			  Legal
			</p>
			<h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
			  Privacy <span className="text-primary">Policy</span>
			</h1>
			<p className="mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
			  This Privacy Policy explains how Sping.tech (&quot;we&quot;,
			  &quot;us&quot; or &quot;our&quot;) collects, uses and protects
			  personal data when you interact with our products, websites and
			  services.
			</p>
			<p className="mt-2 text-xs sm:text-sm text-muted-foreground">
			  Last updated: 2025-01-01
			</p>
		  </div>
		</section>

		{/* CONTENT */}
		<section className="py-10 sm:py-14 lg:py-16">
		  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-10">
			{/* 1. Controller */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				1. Data controller
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground">
				The controller responsible for processing your personal data is
				Sping.tech. If you have any questions about this Privacy
				Policy, data protection or your rights, you can contact us at:
			  </p>
			  <ul className="mt-3 space-y-1 text-sm sm:text-base text-muted-foreground">
				<li>Email: <span className="text-foreground">privacy@sping.tech</span></li>
				<li>Subject line: <span className="text-foreground">“Privacy request”</span></li>
			  </ul>
			</div>

			{/* 2. What data we collect */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				2. What data we collect
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground mb-3">
				We only collect data that is necessary to provide, improve and
				secure our services. Depending on how you interact with us, this
				may include:
			  </p>
			  <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-muted-foreground">
				<li>
				  <span className="text-foreground font-medium">
					Account data:
				  </span>{" "}
				  name, email address, company name, role, communication
				  preferences.
				</li>
				<li>
				  <span className="text-foreground font-medium">
					Usage data:
				  </span>{" "}
				  pages visited, product features used, clicks, session length,
				  referring URLs, approximate location by IP.
				</li>
				<li>
				  <span className="text-foreground font-medium">
					Technical data:
				  </span>{" "}
				  browser type, device type, operating system, IP address,
				  cookie identifiers.
				</li>
				<li>
				  <span className="text-foreground font-medium">
					Communication data:
				  </span>{" "}
				  information you provide when you contact us (support tickets,
				  sales requests, demo forms).
				</li>
			  </ul>
			</div>

			{/* 3. How we use data */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				3. How we use your data
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground mb-3">
				We process personal data only for specific and legitimate
				purposes, including:
			  </p>
			  <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-muted-foreground">
				<li>Providing access to our platform and related services.</li>
				<li>Responding to demo requests, questions and support tickets.</li>
				<li>
				  Improving product performance, security and user experience.
				</li>
				<li>
				  Sending product updates, security notifications and
				  occasional marketing communication (where permitted by law).
				</li>
				<li>
				  Complying with legal obligations, enforcing our agreements and
				  preventing fraud or abuse.
				</li>
			  </ul>
			</div>

			{/* 4. Legal bases */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				4. Legal bases for processing
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground mb-3">
				Where the GDPR or similar data protection laws apply, we rely on
				the following legal bases:
			  </p>
			  <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-muted-foreground">
				<li>
				  <span className="font-medium text-foreground">Contract:</span>{" "}
				  to provide access to our platform and fulfil our agreements.
				</li>
				<li>
				  <span className="font-medium text-foreground">
					Legitimate interest:
				  </span>{" "}
				  to secure our services, prevent abuse, and improve products.
				</li>
				<li>
				  <span className="font-medium text-foreground">Consent:</span>{" "}
				  for specific activities such as non-essential cookies or
				  marketing emails where required.
				</li>
				<li>
				  <span className="font-medium text-foreground">
					Legal obligation:
				  </span>{" "}
				  to comply with applicable laws and regulatory requirements.
				</li>
			  </ul>
			</div>

			{/* 5. Sharing data */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				5. How we share data
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground mb-3">
				We do not sell your personal data. We may share it with:
			  </p>
			  <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-muted-foreground">
				<li>
				  Trusted service providers (hosting, analytics, communication
				  tools) that process data on our behalf under strict data
				  protection agreements.
				</li>
				<li>
				  Professional advisors (lawyers, auditors) where necessary.
				</li>
				<li>
				  Authorities or law enforcement where we are legally required
				  to do so.
				</li>
				<li>
				  In connection with a merger, acquisition or other corporate
				  transaction, subject to appropriate safeguards.
				</li>
			  </ul>
			</div>

			{/* 6. Retention */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				6. Data retention
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground">
				We keep personal data only for as long as it is necessary for
				the purposes described above or as required by law. When data is
				no longer needed, we securely delete or anonymise it.
			  </p>
			</div>

			{/* 7. Your rights */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				7. Your rights
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground mb-3">
				Depending on your location, you may have the right to:
			  </p>
			  <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-muted-foreground">
				<li>Access the personal data we hold about you.</li>
				<li>Request correction of inaccurate or incomplete data.</li>
				<li>Request deletion of your data in certain circumstances.</li>
				<li>
				  Object to or restrict certain types of processing, including
				  direct marketing.
				</li>
				<li>Request a copy of your data in a portable format.</li>
				<li>
				  Withdraw consent where processing is based on consent (this
				  will not affect processing carried out before withdrawal).
				</li>
			  </ul>
			  <p className="mt-3 text-sm sm:text-base text-muted-foreground">
				To exercise any of these rights, contact us at{" "}
				<span className="text-foreground">privacy@sping.tech</span>.
				We may need to verify your identity before responding.
			  </p>
			</div>

			{/* 8. International transfers */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				8. International data transfers
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground">
				Our infrastructure and some of our service providers may be
				located in different countries. Where data is transferred across
				borders, we use appropriate safeguards (such as Standard
				Contractual Clauses) to protect your personal data in accordance
				with applicable law.
			  </p>
			</div>

			{/* 9. Changes */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				9. Changes to this policy
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground">
				We may update this Privacy Policy from time to time to reflect
				product changes, legal requirements or best practices. The
				&quot;Last updated&quot; date at the top indicates when the
				latest version came into effect. We encourage you to review this
				page periodically.
			  </p>
			</div>
		  </div>
		</section>
	  </main>

	  <Footer />
	</div>
  );
};

export default PrivacyPolicyPage;