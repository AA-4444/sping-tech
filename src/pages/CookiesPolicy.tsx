// src/pages/CookiesPolicy.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiesPolicyPage = () => {
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
			  Cookies <span className="text-primary">Policy</span>
			</h1>
			<p className="mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
			  This Cookies Policy explains how Sping.tech uses cookies and
			  similar technologies on our websites and products, and how you can
			  manage your preferences.
			</p>
			<p className="mt-2 text-xs sm:text-sm text-muted-foreground">
			  Last updated: 2025-01-01
			</p>
		  </div>
		</section>

		{/* CONTENT */}
		<section className="py-10 sm:py-14 lg:py-16">
		  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-10">
			{/* 1. What are cookies */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				1. What are cookies?
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground">
				Cookies are small text files that are stored on your device when
				you visit a website. They help websites remember your actions
				and preferences over time and enable core functionality such as
				session management, security and analytics.
			  </p>
			</div>

			{/* 2. Types of cookies we use */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				2. Types of cookies we use
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground mb-3">
				We use different categories of cookies and similar technologies:
			  </p>
			  <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base text-muted-foreground">
				<li>
				  <span className="font-medium text-foreground">
					Strictly necessary cookies:
				  </span>{" "}
				  required for basic site functionality, security and to allow
				  you to log in and navigate the platform. These cannot be
				  disabled via our cookie banner.
				</li>
				<li>
				  <span className="font-medium text-foreground">
					Performance &amp; analytics cookies:
				  </span>{" "}
				  help us understand how visitors use our website (for example,
				  which pages are viewed most often) so we can improve content
				  and performance.
				</li>
				<li>
				  <span className="font-medium text-foreground">
					Preference cookies:
				  </span>{" "}
				  remember your choices such as language, region or previously
				  dismissed banners, so you don’t have to set them each time.
				</li>
				<li>
				  <span className="font-medium text-foreground">
					Marketing cookies:
				  </span>{" "}
				  used to measure the effectiveness of campaigns and, where
				  applicable, to deliver more relevant content or ads. These are
				  only used where allowed by law and your preferences.
				</li>
			  </ul>
			</div>

			{/* 3. Third-party cookies */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				3. Third-party cookies
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground">
				We may use third-party analytics and infrastructure providers
				(for example, for traffic analytics, crash reporting or CDN
				services). These providers may set their own cookies in order to
				deliver their services. We only work with vendors who process
				data in line with applicable data protection laws and our data
				processing agreements.
			  </p>
			</div>

			{/* 4. Cookie duration */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				4. How long are cookies stored?
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground">
				Some cookies are &quot;session cookies&quot; that are deleted
				when you close your browser. Others are &quot;persistent
				cookies&quot; that stay on your device for a defined period or
				until you delete them. The exact duration depends on the cookie
				and its purpose.
			  </p>
			</div>

			{/* 5. Managing your preferences */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				5. Managing cookies and tracking
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground mb-3">
				You can manage your cookie preferences in several ways:
			  </p>
			  <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-muted-foreground">
				<li>
				  By using the cookie banner or settings panel (where
				  available) on our website to accept or reject specific
				  categories of cookies.
				</li>
				<li>
				  By adjusting your browser settings to block or delete cookies.
				  Please note that blocking essential cookies may affect core
				  functionality.
				</li>
				<li>
				  By using industry tools to opt out of certain third-party
				  tracking or marketing cookies, depending on your region.
				</li>
			  </ul>
			  <p className="mt-3 text-sm sm:text-base text-muted-foreground">
				Your choices may need to be set separately on each device and
				browser that you use.
			  </p>
			</div>

			{/* 6. Relationship to Privacy Policy */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				6. Relationship to our Privacy Policy
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground">
				Information collected through cookies and similar technologies
				may constitute personal data. For details on how we process such
				data, including your rights and contact details, please refer to
				our{" "}
				<a
				  href="/privacy"
				  className="text-primary hover:text-primary/80 underline underline-offset-2"
				>
				  Privacy Policy
				</a>
				.
			  </p>
			</div>

			{/* 7. Updates */}
			<div className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
			  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
				7. Changes to this Cookies Policy
			  </h2>
			  <p className="text-sm sm:text-base text-muted-foreground">
				We may update this Cookies Policy from time to time as our use
				of cookies evolves or as legal requirements change. Any updates
				will be posted on this page together with a revised &quot;Last
				updated&quot; date.
			  </p>
			</div>
		  </div>
		</section>
	  </main>

	  <Footer />
	</div>
  );
};

export default CookiesPolicyPage;