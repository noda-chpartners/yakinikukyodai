import Header from '@/components/feature/Header';
import HeroSection from './components/HeroSection';
import ConceptSection from './components/ConceptSection';
import MenuSection from './components/MenuSection';
import InfoSection from './components/InfoSection';
import AccessSection from './components/AccessSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

export default function Home() {
  return (
    <main className="w-full bg-background-50">
      <Header />
      <HeroSection />
      <ConceptSection />
      <MenuSection />
      <InfoSection />
      <AccessSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}