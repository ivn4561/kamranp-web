import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const scrollLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#plataformas", label: "Plataformas" },
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
          ? "bg-[#0A1628]/95 backdrop-blur-md border-b border-[#1a3050] shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center"
          >
            <img src="/logo-kamranp.svg" alt="KAMRANP" className="h-8 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {scrollLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4AA] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Link
              to="/sedes"
              className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors relative group"
            >
              Nuestras Sedes
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4AA] transition-all duration-300 group-hover:w-full" />
            </Link>
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
            className="md:hidden text-white p-2 hover:bg-[#132035] rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0C1830] border-b border-[#1a3050]">
          <div className="px-4 py-4 flex flex-col gap-1">
            {scrollLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-[#94A3B8] hover:text-white hover:bg-[#132035] px-4 py-3 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/sedes"
              onClick={() => setIsOpen(false)}
              className="text-left text-[#94A3B8] hover:text-white hover:bg-[#132035] px-4 py-3 rounded-lg transition-colors font-medium"
            >
              Nuestras Sedes
            </Link>
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
