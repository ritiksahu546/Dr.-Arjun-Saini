import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, ZoomIn, Building2 } from 'lucide-react';
import { CLINIC_DATA } from '../constants/clinicData';

interface Props {
  onOpenLightbox?: () => void;
  userCustomImage?: string | null;
}

export const ClinicExteriorGraphic: React.FC<Props> = ({ onOpenLightbox, userCustomImage }) => {
  if (userCustomImage) {
    return (
      <div className="relative group overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-slate-900">
        <img
          src={userCustomImage}
          alt="Clinic Exterior Photograph - Near M.S. Hospital, Gangoh"
          className="w-full h-auto object-cover max-h-[380px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          {onOpenLightbox && (
            <button
              onClick={onOpenLightbox}
              className="text-white text-xs bg-emerald-800/90 hover:bg-emerald-700 px-3 py-1.5 rounded-lg flex items-center gap-1.5"
            >
              <ZoomIn className="w-3.5 h-3.5" /> Enlarge Exterior Photo
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onOpenLightbox}
      className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      {/* Visual Architectural Clinic Front Illustration */}
      <div className="relative h-60 sm:h-72 w-full bg-gradient-to-b from-sky-100 via-emerald-50/40 to-slate-100 flex flex-col justify-between overflow-hidden">
        {/* Sky background and subtle clouds */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Location Badge */}
        <div className="p-4 z-10 flex justify-between items-start">
          <div className="bg-white/95 backdrop-blur-sm border border-emerald-900/10 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-900 flex items-center gap-1.5 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Clinic Exterior &amp; Premise</span>
          </div>

          <div className="bg-emerald-800 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <Clock className="w-3 h-3 text-amber-300" />
            <span>Open 7:00 AM – 9:00 PM</span>
          </div>
        </div>

        {/* Clinic Building Facade Structure */}
        <div className="relative mx-auto w-11/12 max-w-md z-10">
          {/* Main Top Clinic Signboard */}
          <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white p-3 rounded-t-xl border-t-2 border-x-2 border-amber-400/50 shadow-md text-center">
            <p className="text-[10px] text-amber-300 devanagari font-medium">।। श्री कष्टभंजन देवाय नमः ।।</p>
            <h4 className="text-sm sm:text-base font-extrabold text-amber-200 tracking-tight leading-tight">
              {CLINIC_DATA.name}
            </h4>
            <p className="text-[11px] text-slate-200 font-medium">
              {CLINIC_DATA.doctorName} · {CLINIC_DATA.degrees}
            </p>
            <p className="text-[10px] text-emerald-200 font-semibold devanagari">
              {CLINIC_DATA.specialtyHindi} ({CLINIC_DATA.specialty})
            </p>
          </div>

          {/* Clinic Entrance & Glass Chamber Facade */}
          <div className="bg-white border-x-2 border-slate-300 p-3 flex justify-between items-end h-28 shadow-inner">
            {/* Left window with privacy glass / medical symbol */}
            <div className="w-24 h-20 bg-emerald-50 rounded-lg border border-emerald-200 flex flex-col items-center justify-center text-center p-1">
              <span className="text-xs font-bold text-emerald-900">Ayurvedic</span>
              <span className="text-[9px] text-slate-600">Consultation</span>
              <ShieldCheck className="w-4 h-4 text-emerald-700 mt-1" />
            </div>

            {/* Clinic Main Door */}
            <div className="w-28 h-24 bg-gradient-to-b from-slate-100 to-slate-200 border-2 border-emerald-800/40 rounded-t-lg flex flex-col items-center justify-between p-1.5 shadow-sm">
              <span className="text-[9px] font-bold text-emerald-900 uppercase">Consulting Room</span>
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600 self-end mr-1 my-auto" />
              <div className="text-[9px] bg-emerald-800 text-white px-2 py-0.5 rounded text-center w-full">
                Dr. Arjun Saini
              </div>
            </div>

            {/* Right window / Timings */}
            <div className="w-24 h-20 bg-emerald-50 rounded-lg border border-emerald-200 flex flex-col items-center justify-center text-center p-1">
              <span className="text-[10px] font-bold text-emerald-900">Kshar Sutra</span>
              <span className="text-[9px] text-slate-600">Specialized Care</span>
              <span className="text-[9px] text-amber-800 font-bold mt-1">7 AM - 9 PM</span>
            </div>
          </div>

          {/* Clean Pavement & Steps */}
          <div className="h-4 bg-slate-300 border-x-2 border-b-2 border-slate-400 rounded-b-sm flex items-center justify-center">
            <div className="w-32 h-1.5 bg-slate-400 rounded-full" />
          </div>
        </div>

        {/* Street Landmark Label */}
        <div className="bg-slate-800/90 text-white text-[11px] py-1.5 px-4 flex justify-between items-center z-10 backdrop-blur-sm">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Near M.S. Hospital · Gangoh Bus Stand Road</span>
          </span>
          <span className="text-emerald-300 flex items-center gap-1">
            <ZoomIn className="w-3 h-3" /> Click to enlarge
          </span>
        </div>
      </div>

      {/* Info beneath exterior */}
      <div className="p-4 sm:p-5">
        <h5 className="font-bold text-slate-900 text-base">
          Clinic Landmark &amp; Accessibility
        </h5>
        <p className="text-xs text-slate-600 mt-1">
          Convenient ground-floor clinic premise located adjacent to M.S. Hospital, just a 2-minute walk from Gangoh Central Bus Stand.
        </p>

        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-emerald-800 font-semibold flex items-center gap-1">
            <Navigation className="w-3.5 h-3.5" />
            Easy patient access &amp; parking
          </span>
          <a
            href={CLINIC_DATA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-amber-800 font-bold hover:text-amber-900 hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
};
