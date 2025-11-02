import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import StatsSection from "@/components/StatsSection";
import Features from "@/components/Features";
import ScreenshotsShowcase from "@/components/ScreenshotsShowcase";
import ComparisonSection from "@/components/ComparisonSection";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustSection />
      <StatsSection />
      <Features />
      <ScreenshotsShowcase />
      <ComparisonSection />
      <Pricing />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
