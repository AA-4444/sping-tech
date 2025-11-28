// src/components/Footer.tsx
import { MessageCircle, Send } from "lucide-react";
import noiseTexture from "@/assets/noise.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
	<footer className="relative border-t border-border bg-background pt-14 pb-8 overflow-hidden">
	  <div
		className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light"
		style={{
		  backgroundImage: `url(${noiseTexture})`,
		  backgroundSize: "cover",
		  backgroundRepeat: "repeat",
		}}
	  />

	  {/* Весь контент поверх шума */}
	  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
		{/* GRID 4 COLUMNS like GR8 */}
		<div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
		  {/* COLUMN 1 — SOLUTIONS */}
		  <div className="space-y-4">
			<h4 className="text-sm font-semibold text-foreground/90 tracking-wide">
			  Solutions
			</h4>
			<ul className="space-y-2 text-sm text-muted-foreground">
			  <li>Casino Platform</li>
			  <li>Sportsbook</li>
			  <li>Crypto Payments</li>
			  <li>Risk & Anti-Fraud</li>
			</ul>
		  </div>

		  {/* COLUMN 2 – PLATFORM */}
		  <div className="space-y-4">
			<h4 className="text-sm font-semibold text-foreground/90 tracking-wide">
			  Platform
			</h4>
			<ul className="space-y-2 text-sm text-muted-foreground">
			  <li>Sping Core</li>
			  <li>AI Systems</li>
			  <li>CRM</li>
			  <li>PAM</li>
			  <li>CMS</li>
			</ul>
		  </div>

		  {/* COLUMN 3 – COMPANY */}
		  <div className="space-y-4">
			<h4 className="text-sm font-semibold text-foreground/90 tracking-wide">
			  Company
			</h4>
			<ul className="space-y-2 text-sm text-muted-foreground">
			  <li>
				<a href="/careers" className="hover:text-primary transition">
				  Careers
				</a>
			  </li>
			  <li>
				<a href="/events" className="hover:text-primary transition">
				  Events
				</a>
			  </li>
			  <li>
				<a href="/media" className="hover:text-primary transition">
				  Media
				</a>
			  </li>
			</ul>
		  </div>

		  {/* COLUMN 4 – CONTACTS */}
		  <div className="space-y-4">
			<h4 className="text-sm font-semibold text-foreground/90 tracking-wide">
			  Contacts
			</h4>

			<ul className="space-y-2 text-sm text-muted-foreground">
			  <li>
				<a
				  href="mailto:contact@aereus.tech"
				  className="hover:text-primary transition-colors"
				>
				  contact@sping.tech
				</a>
			  </li>
			  <li className="max-w-[180px]">
				Street , Miami, USA
			  </li>
			</ul>

			{/* SOCIAL ICONS (square, round, left aligned) */}
			<div className="flex items-center gap-3 pt-2">
			  <a
				href="https://wa.me/48555111222"
				target="_blank"
				rel="noreferrer"
				className="h-10 w-10 flex items-center justify-center rounded-xl border border-border hover:border-primary hover:bg-primary/10 transition-colors"
			  >
				<MessageCircle className="h-5 w-5 text-primary" />
			  </a>

			  <a
				href="https://t.me/spingtech"
				target="_blank"
				rel="noreferrer"
				className="h-10 w-10 flex items-center justify-center rounded-xl border border-border hover:border-primary hover:bg-primary/10 transition-colors"
			  >
				<Send className="h-5 w-5 text-primary" />
			  </a>
			</div>
		  </div>
		</div>

		{/* DISCLAIMER */}
		<p className="mt-10 text-center text-[11px] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
		  Sping.tech operates solely as a B2B software service provider within
		  the iGaming industry, and as such, does not offer or operate direct
		  gambling services to consumers on this website.
		</p>

		{/* COPYRIGHT + LEGAL LINKS */}
		<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
		  <span>All rights reserved © {year} Sping.tech</span>

		  <div className="flex gap-6">
			<a
			  href="/privacy-policy"
			  className="hover:text-primary transition-colors"
			>
			  Privacy Policy
			</a>
			<a href="/cookies" className="hover:text-primary transition-colors">
			  Cookie Notice
			</a>
			<a href="/legal" className="hover:text-primary transition-colors">
			  Legal Disclaimer
			</a>
		  </div>
		</div>
	  </div>
	</footer>
  );
};

export default Footer;