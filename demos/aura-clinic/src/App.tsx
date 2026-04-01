import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import FeaturePanel from './components/FeaturePanel';
import Treatments from './components/Treatments';
import Team from './components/Team';
import Location from './components/Location';
import Reviews from './components/Reviews';
import Consultation from './components/Consultation';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative min-h-screen bg-aura-cream">
      <Navbar />
      <Hero />
      <TrustStrip />
      <FeaturePanel />
      <Treatments />
      <Team />
      <Location />
      <Reviews />
      <Consultation />
      <Footer />
    </main>
  );
}

export default App;
