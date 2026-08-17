import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Product from "./components/Product.jsx";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Audience from "./components/Audience.jsx";
import Pricing from "./components/Pricing.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Product />
        <Features />
        <HowItWorks />
        <Audience />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
