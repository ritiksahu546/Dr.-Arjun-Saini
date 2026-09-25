import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { CLINIC_DATA } from '../constants/clinicData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Clinic Brand & Doctor Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-900 text-amber-300 flex items-center justify-center font-bold text-lg border border-emerald-700">
                🌿
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {CLINIC_DATA.name}
                </h3>
                <p className="text-xs text-amber-300/90 font-medium devanagari">
                  {CLINIC_DATA.nameHindi}
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs sm:text-sm text-slate-300 space-y-1">
              <p className="text-white font-bold text-base">
                {CLINIC_DATA.doctorName}
              </p>
              <p className="text-emerald-300 font-semibold">
                {CLINIC_DATA.degrees} ({CLINIC_DATA.university})
              </p>
              <p className="text-slate-400">
                {CLINIC_DATA.specialty} / {CLINIC_DATA.specialtyHindi}
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Providing dedicated Ayurvedic clinical care and Kshar Sutra assessment for piles, fissure, and fistula conditions in Gangoh and neighboring Saharanpur region.
            </p>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-doctor" className="hover:text-amber-300 transition-colors">
                  About Dr. Arjun Saini
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Clinical Services
                </a>
              </li>
              <li>
                <a href="#kshar-sutra" className="hover:text-amber-300 transition-colors">
                  Kshar Sutra Ayurvedic Care
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  Clinic Gallery
                </a>
              </li>
              <li>
                <a href="#clinic-info" className="hover:text-amber-300 transition-colors">
                  Location &amp; Timings
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Contact &amp; Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Clinic NAP & Timings (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Clinic Contact &amp; Hours
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Near M.S. Hospital, Bus Stand, Gangoh, Uttar Pradesh, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="text-slate-300">
                  <a href={`tel:${CLINIC_DATA.phone1}`} className="hover:text-white font-semibold">
                    {CLINIC_DATA.phone1}
                  </a>{' '}
                  |{' '}
                  <a href={`tel:${CLINIC_DATA.phone2}`} className="hover:text-white font-semibold">
                    {CLINIC_DATA.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">Timing: </span>
                  <span className="text-slate-300">{CLINIC_DATA.timings}</span>
                  <p className="text-[11px] text-slate-400">Open 7 days a week</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CLINIC_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 underline underline-offset-4"
              >
                <span>Find clinic on Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer & Transparency Note */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong>Medical Notice:</strong> Information presented on this website is for general educational and clinical consultation inquiry purposes regarding Ayurvedic care and does not constitute a guaranteed clinical outcome. Diagnostic confirmation and personalized treatment protocols are determined during direct physical clinical examination by Dr. Arjun Saini, B.A.M.S., PGCKS.
          </p>
        </div>

        {/* Copyright and Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Kastbhanjan Bawasir &amp; General Clinic. All rights reserved. Gangoh, UP.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
