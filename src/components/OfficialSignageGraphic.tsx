import React from 'react';
import { Phone, Clock, MapPin, ShieldCheck, ZoomIn, Download } from 'lucide-react';
import { CLINIC_DATA } from '../constants/clinicData';

interface Props {
  onOpenLightbox?: () => void;
  userCustomImage?: string | null;
}

export const OfficialSignageGraphic: React.FC<Props> = ({ onOpenLightbox, userCustomImage }) => {
  if (userCustomImage) {
    return (
      <div className="relative group overflow-hidden rounded-2xl border border-emerald-900/20 shadow-xl bg-slate-900">
        <img
          src={userCustomImage}
          alt="Clinic Official Signboard & Poster"
          className="w-full h-auto object-cover max-h-[420px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          {onOpenLightbox && (
            <button
              onClick={onOpenLightbox}
              className="text-white text-xs bg-emerald-800/90 hover:bg-emerald-700 px-3 py-1.5 rounded-lg flex items-center gap-1.5"
            >
              <ZoomIn className="w-3.5 h-3.5" /> Enlarge Photo
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onOpenLightbox}
      className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-emerald-800/30 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-emerald-600/50"
    >
      {/* Top Auspicious Inscription */}
      <div className="bg-emerald-950/90 border-b border-emerald-800/40 px-4 py-2 text-center">
        <p className="text-amber-300/90 text-xs sm:text-sm font-medium tracking-wide devanagari">
          ।। श्री कष्टभंजन देवाय नमः ।।
        </p>
      </div>

      <div className="p-5 sm:p-7 relative">
        {/* Subtle decorative watermark */}
        <div className="absolute top-1/2 right-6 -translate-y-1/2 opacity-5 pointer-events-none">
          <svg className="w-64 h-64 text-amber-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>

        {/* Main Bilingual Banner Header */}
        <div className="text-center space-y-1.5 border-b border-emerald-700/40 pb-5">
          <div className="inline-flex items-center gap-1.5 bg-amber-400/10 text-amber-300 border border-amber-400/20 px-3 py-0.5 rounded-full text-xs font-medium tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Ayurvedic Anorectal Clinic
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-200 tracking-tight devanagari">
            {CLINIC_DATA.nameHindi}
          </h3>
          <h4 className="text-lg sm:text-xl font-bold tracking-wider text-white uppercase">
            {CLINIC_DATA.name}
          </h4>
        </div>

        {/* Doctor Details */}
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center bg-emerald-900/40 p-4 rounded-xl border border-emerald-700/30">
          <div>
            <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wider block">
              Consulting Specialist
            </span>
            <h5 className="text-xl font-extrabold text-white">
              {CLINIC_DATA.doctorName}
            </h5>
            <p className="text-amber-300 font-medium text-sm devanagari">
              {CLINIC_DATA.doctorNameHindi}
            </p>
            <p className="text-slate-300 text-xs mt-1">
              <span className="text-white font-semibold">{CLINIC_DATA.degrees}</span> ({CLINIC_DATA.university})
            </p>
          </div>

          <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-emerald-700/40 pt-3 sm:pt-0 sm:pl-4">
            <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wider block">
              Specialization
            </span>
            <p className="text-base font-bold text-amber-300">
              {CLINIC_DATA.specialty}
            </p>
            <p className="text-sm font-semibold text-slate-200 devanagari">
              {CLINIC_DATA.specialtyHindi}
            </p>
            <p className="text-emerald-200 text-xs mt-1">
              Kshar Sutra &amp; Ayurvedic Care
            </p>
          </div>
        </div>

        {/* Services Highlight on Signboard */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2">
            Specialized Care Offered:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            <div className="bg-emerald-950/60 px-2.5 py-1.5 rounded-lg border border-emerald-800/40 text-slate-200">
              • बवासीर (Piles / Arsha)
            </div>
            <div className="bg-emerald-950/60 px-2.5 py-1.5 rounded-lg border border-emerald-800/40 text-slate-200">
              • फिशर (Anal Fissure)
            </div>
            <div className="bg-emerald-950/60 px-2.5 py-1.5 rounded-lg border border-emerald-800/40 text-slate-200">
              • भगंदर (Fistula in Ano)
            </div>
            <div className="bg-emerald-950/60 px-2.5 py-1.5 rounded-lg border border-emerald-800/40 text-slate-200">
              • क्षार सूत्र (Kshar Sutra)
            </div>
            <div className="bg-emerald-950/60 px-2.5 py-1.5 rounded-lg border border-emerald-800/40 text-slate-200">
              • नाक के मस्से (Nasal Polyps)
            </div>
            <div className="bg-emerald-950/60 px-2.5 py-1.5 rounded-lg border border-emerald-800/40 text-slate-200">
              • साइनस (Sinus Care)
            </div>
          </div>
        </div>

        {/* Footer info: Location, Timings, Contact */}
        <div className="pt-4 border-t border-emerald-700/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{CLINIC_DATA.address.full}</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-200">
            <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{CLINIC_DATA.timings}</span>
          </div>
        </div>

        {/* Contact Numbers Bar */}
        <div className="mt-4 pt-3 border-t border-emerald-700/30 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-amber-400" />
            <span className="font-bold text-amber-300 text-sm tracking-wide">
              {CLINIC_DATA.phone1} / {CLINIC_DATA.phone2}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-emerald-300/80 group-hover:text-emerald-200 flex items-center gap-1 transition-colors">
              <ZoomIn className="w-3.5 h-3.5" /> Click to enlarge banner
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
