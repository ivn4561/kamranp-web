import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Servicios from "@/components/sections/Servicios";
import Plataformas from "@/components/sections/Plataformas";
import Sedes from "@/components/sections/Sedes";
import Contacto from "@/components/sections/Contacto";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Plataformas />
        <Sedes />
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
