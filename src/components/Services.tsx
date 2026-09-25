import React, { useState } from 'react';
import {
  Activity,
  ShieldAlert,
  GitCommit,
  HeartPulse,
  Sparkles,
  Stethoscope,
  Wind,
  Sun,
  UserCheck,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Phone,
  Info
} from 'lucide-react';
import { CLINIC_SERVICES, CLINIC_DATA, ServiceItem } from '../constants/clinicData';

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  GitCommit: <GitCommit className="w-5 h-5" />,
  HeartPulse: <HeartPulse className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Stethoscope: <Stethoscope className="w-5 h-5" />,
  Wind: <Wind className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  UserCheck: <UserCheck className="w-5 h-5" />,
};

export const Services: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'anorectal' | 'ent' | 'general'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredServices = CLINIC_SERVICES.filter((service) => {
    if (filter === 'all') return true;
    return service.category === filter;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
            Clinical Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Specialized Ayurvedic Healthcare
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Professional clinical consultation for anorectal conditions, sinus &amp; nasal polyps, and general Ayurvedic health at our Gangoh clinic.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors ${
              filter === 'all'
                ? 'bg-emerald-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            All Services ({CLINIC_SERVICES.length})
          </button>
          <button
            onClick={() => setFilter('anorectal')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors ${
              filter === 'anorectal'
                ? 'bg-emerald-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            Anorectal Care (Piles, Fissure, Fistula)
          </button>
          <button
            onClick={() => setFilter('ent')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors ${
              filter === 'ent'
                ? 'bg-emerald-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            Nasal Polyps &amp; Sinus
          </button>
          <button
            onClick={() => setFilter('general')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors ${
              filter === 'general'
                ? 'bg-emerald-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            General Ayurvedic Consultation
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                className="bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon and Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100/90 text-emerald-900 flex items-center justify-center font-bold shadow-sm">
                      {iconMap[service.iconName] || <Activity className="w-5 h-5" />}
                    </div>

                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {service.category === 'anorectal'
                        ? 'Anorectal'
                        : service.category === 'ent'
                        ? 'ENT Care'
                        : 'General'}
                    </span>
                  </div>

                  {/* Title & Hindi Title */}
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-800 mt-0.5 devanagari">
                    {service.titleHindi}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Expanded Information */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-200 space-y-3 text-xs animate-in fade-in duration-200">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1">
                          <Info className="w-3.5 h-3.5 text-emerald-700" />
                          About this Condition:
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {service.details}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">
                          Common Symptoms:
                        </h4>
                        <ul className="space-y-1 text-slate-600">
                          {service.symptoms.map((symptom, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-emerald-700 font-bold">•</span>
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-100">
                        <h4 className="font-bold text-emerald-950 mb-0.5">
                          Ayurvedic Approach:
                        </h4>
                        <p className="text-emerald-900">
                          {service.ayurvedicApproach}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="text-xs font-semibold text-emerald-900 hover:text-emerald-700 flex items-center gap-1 transition-colors"
                  >
                    <span>{isExpanded ? 'Less details' : 'Learn more'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <a
                    href={`https://wa.me/${CLINIC_DATA.whatsappNumber}?text=Hello%20Dr.%20Arjun%20Saini%2C%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(service.title)}%20at%20Kastbhanjan%20Clinic`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-colors"
                    title={`Inquire about ${service.title}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-amber-300" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Unsure which consultation you need?
              </h4>
              <p className="text-xs text-slate-600">
                Call the clinic directly for guidance on symptoms and consultation timings.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${CLINIC_DATA.phone1}`}
              className="px-4 py-2 bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors"
            >
              Call: {CLINIC_DATA.phone1}
            </a>
            <a
              href={`tel:${CLINIC_DATA.phone2}`}
              className="px-4 py-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold rounded-xl transition-colors"
            >
              Call: {CLINIC_DATA.phone2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
