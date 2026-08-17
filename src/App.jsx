import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Product from "./components/Product.jsx";
import Features from "./components/Features.jsx";
import FeatureShowcase from "./components/FeatureShowcase.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Audience from "./components/Audience.jsx";
import Pricing from "./components/Pricing.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WaPicker from "./components/WaPicker.jsx";
import ScrollFX from "./components/ScrollFX.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-slate-100">
      <ScrollFX />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Product />
        <Features />
        <FeatureShowcase />
        <HowItWorks />
        <Audience />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <WaPicker />
    </div>
  );
}
