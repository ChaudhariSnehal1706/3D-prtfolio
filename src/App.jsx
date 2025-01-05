import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";

const App = () => {
  const whatsappNumber = import.meta.env.VITE_WP_NO;
  const instagramUrl = import.meta.env.VITE_IG_URL;
  const callNumber = import.meta.env.VITE_CALL_NO;

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Floating Social Icons */}
        <div className="fixed top-1/2 right-4 transform -translate-y-1/2 space-y-4 z-50">
          {/* WhatsApp Icon */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
          >
            <FaWhatsapp size={24} />
          </a>

          {/* Instagram Icon */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition"
          >
            <FaInstagram size={24} />
          </a>

          {/* Jio Call Icon */}
          <a
            href={`tel:+${callNumber}`}
            className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            <FaPhoneAlt size={24} />
          </a>
        </div>

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
