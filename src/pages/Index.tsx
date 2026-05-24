import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TechStackSection from '@/components/TechStackSection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactSection from '@/components/ContactSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="ORACHITECH | Software House in Pakistan for Web Apps, SaaS & School Management Systems"
        description="ORACHITECH builds web applications, SaaS products, school management systems, mobile apps, and business software for startups, schools, and companies in Pakistan and beyond."
        keywords="ORACHITECH, Orachi Tech, software house Pakistan, web development Pakistan, SaaS development, school management system, mobile app development, business software"
      />
      <Navbar />
      <WhatsAppButton />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechStackSection />
        <FeaturesSection />
        {/* <TeamSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
