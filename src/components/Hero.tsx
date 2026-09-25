import React from 'react';
import { Phone, MessageCircle, Navigation, ShieldCheck, Clock, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { CLINIC_DATA } from '../constants/clinicData';
import { DoctorVisitingCardGraphic } from './DoctorVisitingCardGraphic';

interface HeroProps {
  onOpenCardModal?: () => void;
  userVisitingCardImage?: string | null;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCardModal, userVisitingCardImage }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Subtle organic background elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-amber-50/70 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Doctor Credentials, Subheadline, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust and Location context line */}
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Gangoh, Uttar Pradesh</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600">Ayurvedic Clinical Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Specialized Ayurvedic Care for{' '}
              <span className="text-emerald-900 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-4">
                Anorectal Problems
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Professional Ayurvedic consultation and care for piles, fissure, fistula and other anorectal concerns.
            </p>

            {/* Doctor Profile Banner Card */}
            <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white p-5 rounded-2xl shadow-lg border border-emerald-700/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Consulting Physician
                    </span>
                    <span className="text-[11px] bg-emerald-950/80 text-emerald-200 px-2 py-0.5 rounded border border-emerald-700/60">
                      B.A.M.S.
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-white mt-0.5 tracking-tight">
                    {CLINIC_DATA.doctorName}
                  </h2>
                  <p className="text-sm font-semibold text-amber-200 devanagari">
                    {CLINIC_DATA.doctorNameHindi}
                  </p>

                  <p className="text-xs text-slate-200 mt-1">
                    <strong className="text-white">{CLINIC_DATA.degrees}</strong> ({CLINIC_DATA.university})
                  </p>
                  <p className="text-xs font-semibold text-amber-300 mt-1">
                    {CLINIC_DATA.specialty} / {CLINIC_DATA.specialtyHindi}
                  </p>
                </div>

                <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-emerald-700/60 pt-3 sm:pt-0 sm:pl-5 flex flex-col justify-center">
                  <div className="flex items-center sm:justify-end gap-1.5 text-xs text-emerald-200">
                    <Clock className="w-3.5 h-3.5 text-amber-300" />
                    <span>Clinic Timings</span>
                  </div>
                  <span className="text-sm font-extrabold text-white">
                    {CLINIC_DATA.timings}
                  </span>
                  <span className="text-[11px] text-slate-300 mt-0.5">
                    Open 7 Days a Week
                  </span>
                </div>
              </div>
            </div>

            {/* Key Clinical Care Attributes (No exaggerated promises, only professional attributes) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Kshar Sutra Expertise</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Confidential Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Near M.S. Hospital</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Call for Consultation */}
              <a
                href={`tel:${CLINIC_DATA.phone1}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md shadow-emerald-950/20 active:scale-95"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call for Consultation</span>
              </a>

              {/* WhatsApp Us */}
              <a
                href={`https://wa.me/${CLINIC_DATA.whatsappNumber}?text=Hello%20Dr.%20Arjun%20Saini%2C%20I%20would%20like%20to%20consult%20regarding%20anorectal%20care%20at%20Kastbhanjan%20Clinic`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300 font-bold text-sm sm:text-base rounded-xl transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Us</span>
              </a>

              {/* Get Directions */}
              <a
                href={CLINIC_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-sm sm:text-base rounded-xl transition-colors"
              >
                <Navigation className="w-4 h-4 text-slate-600" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Quick Location Note */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{CLINIC_DATA.address.full}</span>
            </div>
          </div>

          {/* Right Column: Doctor Visiting Card Visual & Quick Action */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" /> Official Visiting Card
                </span>
                <span className="text-xs text-slate-500">Tap to flip &amp; save</span>
              </div>

              {/* Interactive Visiting Card */}
              <DoctorVisitingCardGraphic
                onOpenLightbox={onOpenCardModal}
                userCustomImage={userVisitingCardImage}
              />

              <div className="mt-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
                <p className="text-xs text-slate-600">
                  Direct patient care at Gangoh. For inquiries, please call{' '}
                  <a href={`tel:${CLINIC_DATA.phone1}`} className="text-emerald-900 font-bold underline">
                    {CLINIC_DATA.phone1}
                  </a>{' '}
                  or{' '}
                  <a href={`tel:${CLINIC_DATA.phone2}`} className="text-emerald-900 font-bold underline">
                    {CLINIC_DATA.phone2}
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
