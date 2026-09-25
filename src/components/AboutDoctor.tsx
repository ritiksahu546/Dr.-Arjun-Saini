import React from 'react';
import { Award, BookOpen, HeartHandshake, ShieldCheck, Stethoscope, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { CLINIC_DATA } from '../constants/clinicData';

export const AboutDoctor: React.FC = () => {
  return (
    <section id="about-doctor" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
            Ayurvedic Specialist Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Meet Dr. Arjun Saini
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Dedicated Ayurvedic consultation and specialized clinical evaluation for anorectal conditions in Gangoh.
          </p>
        </div>

        {/* Doctor Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Credentials Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md">
            {/* Doctor Avatar / Emblem Badge */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-900 to-teal-800 text-amber-300 flex items-center justify-center text-3xl font-extrabold shadow-md shrink-0 border border-emerald-700">
                ⚕️
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                  Ayurvedacharya
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {CLINIC_DATA.doctorName}
                </h3>
                <p className="text-sm font-semibold text-emerald-900 devanagari">
                  {CLINIC_DATA.doctorNameHindi}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Gangoh, Uttar Pradesh
                </p>
              </div>
            </div>

            {/* Verified Qualifications List */}
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    B.A.M.S.
                  </h4>
                  <p className="text-xs text-slate-600">
                    Bachelor of Ayurvedic Medicine and Surgery — Comprehensive training in classical Ayurvedic diagnostics and pharmacology.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100/80 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    PGCKS – Parul University, Gujarat
                  </h4>
                  <p className="text-xs text-slate-600">
                    Post Graduate Certificate in Kshar Sutra — Specialized para-surgical certification focused on management of anorectal diseases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-100/80 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Anorectal Specialist / Guda Rog Visheshagya
                  </h4>
                  <p className="text-xs text-slate-600">
                    Focused clinical practice addressing piles (bawasir), anal fissures, fistulae, and sinus tracts with Ayurvedic para-surgical protocols.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Consultation Call Box */}
            <div className="mt-8 pt-6 border-t border-slate-100 bg-emerald-50/50 p-4 rounded-2xl">
              <p className="text-xs text-emerald-900 font-semibold mb-2 text-center">
                Consult Directly with Dr. Arjun Saini
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${CLINIC_DATA.phone1}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-900 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-300" />
                  <span>Call Doctor</span>
                </a>
                <a
                  href={`https://wa.me/${CLINIC_DATA.whatsappNumber}?text=Hello%20Dr.%20Arjun%20Saini%2C%20I%20would%20like%20to%20consult%20regarding%20anorectal%20care%20at%20Kastbhanjan%20Clinic`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white hover:bg-slate-50 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Informative Content about Ayurvedic Anorectal Care */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Philosophy of Ayurvedic Anorectal Consultation
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Anorectal disorders such as piles (Arsha), anal fissures (Parikartika), and fistulae (Bhagandara) are among the most distressing physical complaints. In Ayurveda, these conditions are recognized as rooted in metabolic dysregulation, chronic digestive disturbances (Mandagni), and vitiation of the Apana Vayu.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At <strong>Kastbhanjan Bawasir &amp; General Clinic</strong>, Dr. Arjun Saini conducts focused, patient-centered consultations to assess each individual&apos;s presentation, disease stage, and underlying dietary habits before recommending an individualized management plan.
              </p>

              {/* Consultation Standards */}
              <div className="border-t border-slate-100 pt-5">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Core Consultation Principles
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/60">
                    <div className="flex items-center gap-2 font-bold text-xs text-emerald-950">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      <span>Confidential Clinical Assessment</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Safe, private consultation environment ensuring patient comfort and dignity at all times.
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/60">
                    <div className="flex items-center gap-2 font-bold text-xs text-emerald-950">
                      <HeartHandshake className="w-4 h-4 text-emerald-700" />
                      <span>Sterile &amp; Standardized Protocols</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Strict adherence to hygiene guidelines for Ayurvedic procedural evaluations and thread therapy.
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/60">
                    <div className="flex items-center gap-2 font-bold text-xs text-emerald-950">
                      <BookOpen className="w-4 h-4 text-emerald-700" />
                      <span>Grounded Educational Guidance</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Clear explanation of diagnosis, realistic recovery timelines, and home care practices.
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/60">
                    <div className="flex items-center gap-2 font-bold text-xs text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>Dietary &amp; Bowel Habit Correction</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Addressing root causes including constipation, sedentary habits, and digestive fire imbalances.
                    </p>
                  </div>
                </div>
              </div>

              {/* Informative Disclaimer */}
              <div className="bg-amber-50/70 border border-amber-200/70 p-4 rounded-xl text-xs text-amber-900 leading-relaxed">
                <strong>Medical Practice Note:</strong> Dr. Arjun Saini practices authentic Ayurvedic medicine. Every condition is evaluated on clinical merits. Patients are guided transparently regarding whether conservative Ayurvedic therapy, Kshar Sutra para-surgical intervention, or referral for higher tertiary investigation is warranted.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
