import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TechStackSection from '@/components/TechStackSection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="ORACHITECH | Digital Product Design and Software Engineering"
        description="ORACHITECH designs and builds web applications, SaaS products, mobile experiences, AI workflows, and business software for ambitious teams."
        keywords="ORACHITECH, Orachi Tech, software house Pakistan, digital product studio, web development Pakistan, SaaS development, mobile app development, business software"
      />
      <Navbar />
      <WhatsAppButton />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechStackSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
