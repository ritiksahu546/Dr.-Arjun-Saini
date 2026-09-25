import React from 'react';
import { Sparkles, CheckCircle2, Phone, MessageCircle, ShieldCheck, HeartPulse, Clock, FileText } from 'lucide-react';
import { CLINIC_DATA } from '../constants/clinicData';

export const KsharSutra: React.FC = () => {
  return (
    <section id="kshar-sutra" className="py-16 sm:py-24 bg-gradient-to-b from-emerald-950 via-emerald-900 to-teal-950 text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 text-amber-300 border border-amber-400/20 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Specialized Ayurvedic Para-Surgical Care
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Kshar Sutra Ayurvedic Care
          </h2>
          <p className="text-emerald-200 text-sm sm:text-base mt-3 leading-relaxed max-w-2xl mx-auto">
            A traditional, time-tested Ayurvedic parasurgical technique utilized in the clinical management of fistula in ano, chronic anal fissures, and selected anorectal conditions.
          </p>
        </div>

        {/* Informational Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Educational Explanation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-emerald-900/40 border border-emerald-700/40 p-6 sm:p-8 rounded-3xl backdrop-blur-sm space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-200">
                What is Kshar Sutra?
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Kshar Sutra is a standardized Ayurvedic para-surgical procedure originally documented by Maharshi Sushruta in classical Ayurvedic surgical treatises. It employs a sterile surgical linen thread (Barbour linen thread No. 20) repeatedly coated with herbal alkaline extracts.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Unlike open excision surgery that cuts through healthy tissues and muscles, Kshar Sutra slowly and steadily debrides, cuts, and simultaneously heals the infected track from inside out without sudden trauma to the sphincter apparatus.
              </p>

              {/* Three Natural Components */}
              <div className="pt-4 border-t border-emerald-700/40">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
                  Key Natural Herbal Ingredients Coated on the Thread:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-emerald-950/70 p-3 rounded-xl border border-emerald-800/50">
                    <span className="text-xs font-bold text-white block">1. Snuhi Ksheera</span>
                    <span className="text-[11px] text-emerald-300">Latex of Euphorbia neriifolia</span>
                    <p className="text-[10px] text-slate-300 mt-1">Binds the alkaline powders and aids tissue debridement.</p>
                  </div>

                  <div className="bg-emerald-950/70 p-3 rounded-xl border border-emerald-800/50">
                    <span className="text-xs font-bold text-white block">2. Apamarga Kshara</span>
                    <span className="text-[11px] text-amber-300">Alkaline Ash of Achyranthes aspera</span>
                    <p className="text-[10px] text-slate-300 mt-1">Exerts therapeutic chemical excision of unhealthy granulation tissue.</p>
                  </div>

                  <div className="bg-emerald-950/70 p-3 rounded-xl border border-emerald-800/50">
                    <span className="text-xs font-bold text-white block">3. Haridra Churna</span>
                    <span className="text-[11px] text-emerald-300">Curcuma longa (Pure Turmeric)</span>
                    <p className="text-[10px] text-slate-300 mt-1">Provides natural antiseptic, anti-inflammatory, and wound-healing action.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-emerald-900/30 p-4 rounded-2xl border border-emerald-800/40 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Preserves Sphincter Continence</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Gradual cutting allows gradual fibrosis behind the thread, safeguarding anal sphincter tone and preventing fecal incontinence.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-900/30 p-4 rounded-2xl border border-emerald-800/40 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Outpatient Procedure</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Patients typically do not require prolonged hospital bed-confinement and can resume normal daily routine with care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Consultation & Clinical Process Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-emerald-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                  Clinical Assessment
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Evaluation with Dr. Arjun Saini
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                PGCKS certified from Parul University, Gujarat
              </p>

              <div className="mt-5 space-y-3.5 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Proctoscopic Examination</strong> to locate external/internal openings and tract trajectory.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Assessment of Indication:</strong> Evaluation whether Kshar Sutra, conservative medical management, or surgical referral is most suitable.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Weekly Thread Revision:</strong> Periodic follow-up visits until the tract is completely cleared and healed.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Post-Care Guidance:</strong> Medicated Sitz baths (Avagaha Sweda) and bowel-softening nutrition to support smooth recovery.</span>
                </div>
              </div>

              {/* Consultation CTA Box */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                <a
                  href={`tel:${CLINIC_DATA.phone1}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-colors shadow-md shadow-emerald-950/20 active:scale-98"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Consult the Doctor</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_DATA.whatsappNumber}?text=Hello%20Dr.%20Arjun%20Saini%2C%20I%20would%20like%20to%20consult%20regarding%20Kshar%20Sutra%20therapy%20at%20Kastbhanjan%20Clinic`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-200 font-bold text-xs sm:text-sm rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>WhatsApp for Kshar Sutra Enquiry</span>
                </a>
              </div>

              <p className="text-[11px] text-slate-500 text-center mt-3">
                Clinic Location: Near M.S. Hospital, Bus Stand, Gangoh, UP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
