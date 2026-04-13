import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Banknote,
  Smartphone,
  Printer,
  Headphones,
  Package,
  Monitor,
} from "lucide-react";

const serviciosItems = [
  { icon: Banknote,   label: "Envío de dinero" },
  { icon: Smartphone, label: "Recargas de móvil" },
  { icon: Printer,    label: "Impresiones y fotocopias" },
  { icon: Headphones, label: "Accesorios y móviles" },
  { icon: Package,    label: "Paquetería" },
  { icon: Monitor,    label: "Internet y ordenadores" },
];

const otherNavLinks = [
  { to: "/#plataformas", label: "Plataformas" },
  { to: "/contacto",     label: "Contacto" },
  { to: "/sedes",        label: "Nuestras Sedes" },
];

const linkClass =
  "text-sm font-medium text-[#94A3B8] hover:text-white transition-colors relative group";
const underline =
  "absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4AA] transition-all duration-300 group-hover:w-full";

function scrollToServicios() {
  if (window.location.pathname !== "/") {
    window.location.href = "/#servicios";
  } else {
    document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Link to="/" className="flex items-center">
            <img src="/logo-kamranp.svg" alt="KAMRANP" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Servicios dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors relative">
                Servicios
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                <span className={underline} />
              </button>
              {/* Dropdown panel — shown on group hover */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto -translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                <div className="bg-[#0F2040] border border-[#1a3050] rounded-xl shadow-xl shadow-black/20 p-2 min-w-[260px] animate-dropdown-in">
                  {serviciosItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.label}
                        onClick={scrollToServicios}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#132035] text-sm text-gray-300 hover:text-white transition-colors cursor-pointer text-left whitespace-nowrap"
                      >
                        <Icon className="w-4 h-4 text-[#00D4AA] shrink-0" />
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Other links */}
            {otherNavLinks.map((link) => (
              <Link key={link.to} to={link.to} className={linkClass}>
                {link.label}
                <span className={underline} />
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
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
            {/* Servicios expandable */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between text-[#94A3B8] hover:text-white hover:bg-[#132035] px-4 py-3 rounded-lg transition-colors font-medium"
              >
                Servicios
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-0.5">
                  {serviciosItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.label}
                        onClick={() => {
                          scrollToServicios();
                          setIsOpen(false);
                          setServicesOpen(false);
                        }}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-[#94A3B8] hover:text-white hover:bg-[#132035] transition-colors"
                      >
                        <Icon className="w-4 h-4 text-[#00D4AA] shrink-0" />
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other links */}
            {otherNavLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-left text-[#94A3B8] hover:text-white hover:bg-[#132035] px-4 py-3 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
