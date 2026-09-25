import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink, Compass, ShieldCheck } from 'lucide-react';
import { CLINIC_DATA } from '../constants/clinicData';

export const ClinicInfo: React.FC = () => {
  return (
    <section id="clinic-info" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
            Clinic Location &amp; Hours
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Visit Our Clinic in Gangoh
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Centrally situated near the Bus Stand and M.S. Hospital, providing accessible Ayurvedic consultation for patients from Gangoh and surrounding regions.
          </p>
        </div>

        {/* Clinic Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                Ayurvedic Anorectal Center
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                {CLINIC_DATA.name}
              </h3>
              <p className="text-sm font-semibold text-emerald-900 devanagari">
                {CLINIC_DATA.nameHindi}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Dr. Arjun Saini, B.A.M.S., PGCKS (Parul University)
              </p>
            </div>

            {/* Address Details */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">Clinic Address:</h4>
                  <p className="text-slate-700 font-medium">Near M.S. Hospital,</p>
                  <p className="text-slate-700 font-medium">Bus Stand, Gangoh,</p>
                  <p className="text-slate-700 font-medium">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-100 flex items-start gap-2.5 text-xs sm:text-sm">
              <Clock className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-emerald-950">Clinic Consultation Timings:</h4>
                <p className="text-emerald-900 font-bold text-base mt-0.5">
                  {CLINIC_DATA.timings}
                </p>
                <p className="text-xs text-emerald-800 mt-0.5 devanagari">
                  {CLINIC_DATA.timingsHindi}
                </p>
              </div>
            </div>

            {/* Telephone Numbers */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-2">
              <div className="flex items-start gap-2.5">
                <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Contact Numbers:</h4>
                  <div className="flex flex-col sm:flex-row gap-3 mt-1.5">
                    <a
                      href={`tel:${CLINIC_DATA.phone1}`}
                      className="text-base font-extrabold text-emerald-900 hover:text-emerald-700 transition-colors"
                    >
                      {CLINIC_DATA.phone1}
                    </a>
                    <span className="hidden sm:inline text-slate-300">|</span>
                    <a
                      href={`tel:${CLINIC_DATA.phone2}`}
                      className="text-base font-extrabold text-emerald-900 hover:text-emerald-700 transition-colors"
                    >
                      {CLINIC_DATA.phone2}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons: "Call Now", "WhatsApp", "Get Directions" */}
            <div className="pt-2 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${CLINIC_DATA.phone1}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_DATA.whatsappNumber}?text=Hello%20Dr.%20Arjun%20Saini%2C%20I%20would%20like%20to%20consult%20at%20Kastbhanjan%20Clinic%20in%20Gangoh`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-xs sm:text-sm rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <a
                href={CLINIC_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm rounded-xl transition-colors"
              >
                <Navigation className="w-4 h-4 text-slate-700" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map View & Landmark Directions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Map Frame Card */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="text-xs sm:text-sm font-bold">
                    Location: Near M.S. Hospital, Bus Stand, Gangoh, UP
                  </span>
                </div>
                <a
                  href={CLINIC_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1 font-semibold"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map View Frame */}
              <div className="relative h-72 sm:h-80 w-full bg-slate-100 flex items-center justify-center">
                <iframe
                  title="Kastbhanjan Bawasir & General Clinic Location Map"
                  src="https://maps.google.com/maps?q=M.S.+Hospital+Bus+Stand+Gangoh+Uttar+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* How to Reach Guide */}
              <div className="p-5 sm:p-6 bg-white space-y-4">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-emerald-800" />
                  How to Reach the Clinic
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <span className="font-bold text-slate-900 block">From Gangoh Bus Stand:</span>
                    <p className="text-slate-600 mt-1">
                      Located within 150–200 meters (approx. 2-minute walk) from the main Gangoh bus terminal. Proceed towards M.S. Hospital road.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <span className="font-bold text-slate-900 block">From Nanauta / Saharanpur:</span>
                    <p className="text-slate-600 mt-1">
                      Arrive at Gangoh town bus stop area. Clinic is prominently situated right adjacent to M.S. Hospital with clear signboard.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>Ground floor clinic · Wheelchair / senior patient friendly</span>
                  <span className="font-semibold text-emerald-800">Gangoh, Uttar Pradesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
