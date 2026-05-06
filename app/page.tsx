import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import Process from './components/Process';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <FeaturedProjects />
      <Process />
      <SocialProof />
      <CTA />
      <Footer />
    </main>
  );
}
