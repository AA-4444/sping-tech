// src/components/Footer.tsx
import { MessageCircle, Send } from "lucide-react";
import noiseTexture from "@/assets/noise.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
	<footer
	  className="
		relative 
		border-t border-border 
		pt-14 pb-8 overflow-hidden
		bg-gradient-to-b 
		from-[#1a1a1c] via-[#0d0d0e] to-[#000000]
	  "
	>
	  {/* Noise texture  */}
	  <div
		className="
		  pointer-events-none absolute inset-0 
		  opacity-[0.22] mix-blend-soft-light
		"
		style={{
		  backgroundImage: `url(${noiseTexture})`,
		  backgroundSize: "420px",
		  backgroundRepeat: "repeat",
		}}
	  />

	  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
		{/* GRID */}
		<div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
		  {/* Solutions */}
		  <div className="space-y-4">
			<h4 className="text-sm font-semibold text-foreground/90 tracking-wide">
			  Solutions
			</h4>
			<ul className="space-y-2 text-sm text-muted-foreground">
			  <li>
				<a href="/casino" className="hover:text-primary transition">
				  Casino Platform
				</a>
			  </li>
			  <li>
				<span className="opacity-60">Sportsbook (coming soon)</span>
			  </li>
			  <li>
				<a href="/crm" className="hover:text-primary transition">
				  CRM Platform
				</a>
			  </li>
			  <li>
				<span className="opacity-60">Crypto Payments (coming soon)</span>
			  </li>
			  <li>
				<span className="opacity-60">Risk & Anti-Fraud (coming soon)</span>
			  </li>
			</ul>
		  </div>

		  {/* Platform */}
		  <div className="space-y-4">
			<h4 className="text-sm font-semibold text-foreground/90 tracking-wide">
			  Platform
			</h4>
			<ul className="space-y-2 text-sm text-muted-foreground">
			  <li>
				<a href="/platforms" className="hover:text-primary transition">
				  Full Platform Overview
				</a>
			  </li>
			  <li>
				<a href="/viewplatform" className="hover:text-primary transition">
				  Case Studies
				</a>
			  </li>
			  <li>
				<span className="opacity-60">AI Systems (coming soon)</span>
			  </li>
			  <li>
				<span className="opacity-60">PAM (coming soon)</span>
			  </li>
			  <li>
				<span className="opacity-60">CMS (coming soon)</span>
			  </li>
			</ul>
		  </div>

		  {/* Company */}
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
				<a href="/about" className="hover:text-primary transition">
				  About Us
				</a>
			  </li>
			  <li>
				<a href="/blog" className="hover:text-primary transition">
				  Blog
				</a>
			  </li>
			</ul>
		  </div>

		  {/* Contacts */}
		  <div className="space-y-4">
			<h4 className="text-sm font-semibold text-foreground/90 tracking-wide">
			  Contacts
			</h4>
			<ul className="space-y-2 text-sm text-muted-foreground">
			  <li>
				<a
				  href="mailto:trgtart.office@gmail.com"
				  className="hover:text-primary transition-colors"
				>
				  hello@sping.tech
				</a>
			  </li>
			  <li className="max-w-[180px]">
				2801 NE 183rd Street; FL 33160, USA
			  </li>
			</ul>

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

		{/* Disclaimer */}
		<p className="mt-10 text-center text-[11px] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
		  Sping.tech operates solely as a B2B software service provider within
		  the iGaming industry and does not offer or operate gambling services
		  to consumers.
		</p>

		{/* Bottom */}
		<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
		  <span>All rights reserved © {year} Sping.tech</span>

		  <div className="flex gap-6">
			<a href="/privacy" className="hover:text-primary transition-colors">
			  Privacy Policy
			</a>
			<a href="/cookies" className="hover:text-primary transition-colors">
			  Cookies Policy
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