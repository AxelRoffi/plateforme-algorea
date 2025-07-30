import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import ProductDemo from '@/components/ProductDemo'
import TestimonialsSection from '@/components/TestimonialsSection'
import StatsSection from '@/components/StatsSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductDemo />
        <TestimonialsSection />
        <StatsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
