import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import CityPages from './components/CityPages';
import QuoteWizard from './components/QuoteWizard';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <CityPages />
        <QuoteWizard />
      </main>
      <Footer />
    </div>
  );
}
