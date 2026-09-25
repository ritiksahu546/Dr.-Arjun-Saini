import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { CLINIC_DATA } from '../constants/clinicData';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick mobile action bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-3 py-2"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href={`tel:${CLINIC_DATA.phone1}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-emerald-50 active:bg-emerald-100 text-emerald-900 border border-emerald-200 rounded-xl transition-colors min-h-[50px]"
          aria-label="Call clinic directly"
        >
          <Phone className="w-5 h-5 text-emerald-800" />
          <span className="text-[11px] font-bold mt-0.5">Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/${CLINIC_DATA.whatsappNumber}?text=Hello%20Dr.%20Arjun%20Saini%2C%20I%20would%20like%20to%20consult%20at%20Kastbhanjan%20Clinic%20in%20Gangoh`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-emerald-800 active:bg-emerald-900 text-white rounded-xl shadow-sm transition-colors min-h-[50px]"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-amber-300" />
          <span className="text-[11px] font-bold mt-0.5">WhatsApp</span>
        </a>

        {/* Directions button */}
        <a
          href={CLINIC_DATA.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-slate-100 active:bg-slate-200 text-slate-800 border border-slate-200 rounded-xl transition-colors min-h-[50px]"
          aria-label="Get directions on Google Maps"
        >
          <Navigation className="w-5 h-5 text-slate-700" />
          <span className="text-[11px] font-bold mt-0.5">Directions</span>
        </a>
      </div>
    </aside>
  );
};
