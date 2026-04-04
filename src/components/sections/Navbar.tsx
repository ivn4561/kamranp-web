import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#plataformas", label: "Plataformas" },
  { href: "#sedes", label: "Nuestras Sedes" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1E1E1E] shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 bg-[#E8832A] rounded-lg flex items-center justify-center font-black text-white text-sm tracking-tighter shadow-lg shadow-orange-900/40 group-hover:bg-[#C56E18] transition-colors">
              K
            </div>
            <span className="text-white font-black text-xl tracking-wider">
              KAMRAN<span className="text-[#E8832A]">P</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-[#999] hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E8832A] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              onClick={() =>
                window.open("https://wa.me/34600000000", "_blank")
              }
              className="gap-2"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2 hover:bg-[#1A1A1A] rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-b border-[#1E1E1E]">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-[#AAA] hover:text-white hover:bg-[#1A1A1A] px-4 py-3 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <Button
                className="w-full"
                onClick={() =>
                  window.open("https://wa.me/34600000000", "_blank")
                }
              >
                <Phone className="w-4 h-4" />
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
