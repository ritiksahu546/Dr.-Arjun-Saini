/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutDoctor } from './components/AboutDoctor';
import { Services } from './components/Services';
import { KsharSutra } from './components/KsharSutra';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ClinicGallery } from './components/ClinicGallery';
import { ClinicInfo } from './components/ClinicInfo';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { LightboxModal } from './components/LightboxModal';
import { DoctorVisitingCardGraphic } from './components/DoctorVisitingCardGraphic';

export default function App() {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-800 selection:text-white pb-14 md:pb-0">
      {/* Primary Header and Sticky Nav */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenCardModal={() => setIsCardModalOpen(true)} />

        {/* 2. About Doctor Section */}
        <AboutDoctor />

        {/* 3. Clinical Services Section */}
        <Services />

        {/* 4. Dedicated Kshar Sutra Section */}
        <KsharSutra />

        {/* 5. Why Choose Us Feature Cards */}
        <WhyChooseUs />

        {/* 6. Clinic Gallery with Lightbox */}
        <ClinicGallery />

        {/* 7. Clinic Information, Timings & Directions */}
        <ClinicInfo />

        {/* 8. Contact & Consultation Enquiry Section */}
        <ContactSection />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Mobile Fixed Sticky Action Bar */}
      <MobileStickyBar />

      {/* Interactive Visiting Card Lightbox Modal */}
      {isCardModalOpen && (
        <LightboxModal
          isOpen={isCardModalOpen}
          onClose={() => setIsCardModalOpen(false)}
          title="Dr. Arjun Saini – Official Visiting Card"
          subtitle="Kastbhanjan Bawasir & General Clinic · Gangoh"
        >
          <div className="max-w-md mx-auto py-2">
            <DoctorVisitingCardGraphic />
          </div>
        </LightboxModal>
      )}
    </div>
  );
}
