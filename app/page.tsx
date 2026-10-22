'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import QualityInspectorSection from '@/components/QualityInspectorSection';
import StitchCategoriesSection from '@/components/StitchCategoriesSection';
import ServicesSection from '@/components/ServicesSection';
import OurWorkSection from '@/components/OurWorkSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import FormatsSection from '@/components/FormatsSection';
import BlogSection from '@/components/BlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import QuoteFaqSection from '@/components/QuoteFaqSection';
import Footer from '@/components/Footer';
import WorkLightboxModal from '@/components/WorkLightboxModal';
import { WorkProject } from '@/types/work';

export default function Home() {
  const [selectedWorkProject, setSelectedWorkProject] = useState<WorkProject | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Embroidery Digitizing');

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      {/* 1. Top Announcement Bar & Responsive Navbar */}
      <Header />

      {/* 2. Hero Section with Live Machine / Slider Showcase */}
      <HeroSection />

      {/* 3. Trust Bar with Core Guarantees & Turnaround Metrics */}
      <TrustBar />

      {/* 4. Interactive Quality Inspector (Vector vs. Sewout Slider) */}
      <QualityInspectorSection />

      {/* 5. Stitch Categories Studio */}
      <StitchCategoriesSection />

      {/* 6. Core Embroidery Services */}
      <ServicesSection />

      {/* 7. Our Work & Production Sewout Portfolio */}
      <OurWorkSection onSelectProject={setSelectedWorkProject} />

      {/* 8. Why Choose Us (22+ Years Studio Craftsmanship) */}
      <WhyChooseUsSection />

      {/* 9. Supported Machine File Formats */}
      <FormatsSection />

      {/* 10. Industry Guides & Digitizing Tips */}
      <BlogSection />

      {/* 11. Client Reviews & Testimonials Slider */}
      <TestimonialsSection />

      {/* 12. Instant Quote Request & FAQ Accordion */}
      <QuoteFaqSection
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />

      {/* 13. Luxury Light Footer */}
      <Footer />

      {/* Work Portfolio Lightbox Modal */}
      {selectedWorkProject && (
        <WorkLightboxModal
          project={selectedWorkProject}
          onClose={() => setSelectedWorkProject(null)}
          onOrderStyle={(service) => {
            setSelectedService(service);
            setSelectedWorkProject(null);
          }}
        />
      )}
    </main>
  );
}