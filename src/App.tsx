import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHash from "@/components/ScrollToHash";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Servicios from "@/components/sections/Servicios";
import Plataformas from "@/components/sections/Plataformas";
import Sedes from "@/components/sections/Sedes";
import Resenas from "@/components/sections/Resenas";
import Contacto from "@/components/sections/Contacto";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import SedesPage from "@/pages/SedesPage";
import ContactoPage from "@/pages/ContactoPage";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Plataformas />
        <Sedes />
        <Resenas />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Handles /#hash scroll after every navigation */}
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sedes" element={<SedesPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
