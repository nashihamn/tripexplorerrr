import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PromoCountdown from "@/components/PromoCountdown";
import PaketWisata from "@/components/PaketWisata";
import GaleriSection from "@/components/GaleriSection";
import TestimoniSection from "@/components/TestimoniSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <PromoCountdown />
        <PaketWisata />
        <GaleriSection />
        <TestimoniSection />
        <BlogSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
