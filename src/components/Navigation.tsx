// src/components/Navigation.tsx
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { useLeadForm } from "@/components/LeadFormProvider"; // ⬅️ ВАЖНО
import logo from "@/assets/sping-logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openLeadForm } = useLeadForm(); // ⬅️ подключаем модалку

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Sping Tech Logo"
              className="w-[160px] h-auto object-contain"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">

            {/* PLATFORM DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors">
                Platform
                <ChevronDown className="w-4 h-4 mt-[2px]" />
              </button>

              <div className="absolute left-0 mt-2 w-44 rounded-xl border border-border bg-card shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <NavLink
                  to="/platforms"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-t-xl"
                >
                  Platform
                </NavLink>

                <NavLink
                  to="/casino"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/10"
                >
                  Casino
                </NavLink>

                <NavLink
                  to="/crm"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-b-xl"
                >
                  CRM
                </NavLink>
              </div>
            </div>

            {/* SIMPLE LINKS */}
            <NavLink to="/blog" className="text-foreground/80 hover:text-primary">Blog</NavLink>
            <NavLink to="/team" className="text-foreground/80 hover:text-primary">Team</NavLink>
            <NavLink to="/about" className="text-foreground/80 hover:text-primary">About</NavLink>

            {/* CTA BUTTON */}
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={openLeadForm} // ⬅️ открываем lead form
            >
              LET'S PARTNER UP
            </Button>
          </div>

          {/* Mobile  Button */}
          <button
            className="md:hidden p-3 rounded-xl bg-background/80 border border-border shadow-sm hover:bg-background/90 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="
            md:hidden mt-2 mb-4 
            rounded-2xl border border-border 
            bg-background/80 backdrop-blur-xl 
            shadow-xl py-4 px-4 
            space-y-2 animate-fade-in
          ">
            <details className="group">
              <summary className="cursor-pointer py-2 flex items-center justify-between text-foreground/80 hover:text-primary">
                <span>Platform</span>
                <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>

              <div className="pl-2 mt-1 space-y-1">
                <NavLink to="/platforms" className="block py-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Platform
                </NavLink>

                <NavLink to="/casino" className="block py-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Casino
                </NavLink>

                <NavLink to="/crm" className="block py-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  CRM
                </NavLink>
              </div>
            </details>

            <NavLink to="/blog" className="block py-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </NavLink>

            <NavLink to="/team" className="block py-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Team
            </NavLink>

            <NavLink to="/about" className="block py-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              About
            </NavLink>

            {/* MOBILE CTA */}
            <Button
              className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                setMobileMenuOpen(false);
                openLeadForm(); // ⬅️ тоже открывает lead form
              }}
            >
              LET'S PARTNER UP
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;