import Header from '@/components/feature/Header';
import HeroSection from './components/HeroSection';
import ConceptSection from './components/ConceptSection';
import MenuSection from './components/MenuSection';
import InfoSection from './components/InfoSection';
import AccessSection from './components/AccessSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import background from '@/assets/background.png';
import tennai from '@/assets/tennai.jpg';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat md:bg-fixed"
      style={{ backgroundImage: `url(${background})` }}
    >
    <main className="w-full">
      <Header />
      <HeroSection />
      <ConceptSection />
      <MenuSection />
      <InfoSection />
      <AccessSection />
      <ContactSection />
      <FooterSection />
    </main>
    </div>
  );
}