import React from 'react';
import { Leaf, Stethoscope, UserCheck, MapPin, Clock, Check } from 'lucide-react';
import { CLINIC_DATA } from '../constants/clinicData';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-emerald-700" />,
      title: 'Ayurvedic Approach',
      description:
        'Time-tested Ayurvedic principles focusing on the root causes of disease, balancing digestive fire (Agni), and utilizing authentic classical formulations and dietary adjustments.',
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-emerald-700" />,
      title: 'Specialized Anorectal Consultation',
      description:
        'Dedicated clinical focus on piles (bawasir), anal fissures, and fistulae by Dr. Arjun Saini, certified in Kshar Sutra para-surgical care (PGCKS - Parul University, Gujarat).',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-emerald-700" />,
      title: 'Personalized Treatment Guidance',
      description:
        'Every patient is treated with respect and individual attention. Honest evaluation to determine whether conservative lifestyle management or Kshar Sutra procedure is appropriate.',
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-700" />,
      title: 'Convenient Clinic Location',
      description:
        'Easily accessible ground floor clinic located Near M.S. Hospital at the Central Bus Stand in Gangoh, making visits seamless for local and out-of-town patients.',
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-700" />,
      title: 'Morning to Evening Consultation',
      description:
        'Open daily from 7:00 AM to 9:00 PM, allowing patients and working professionals to consult conveniently before or after work hours throughout the week.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
            Clinical Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Why Choose Our Clinic
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Professional Ayurvedic standards, verified qualification, and compassionate patient care in Gangoh.
          </p>
        </div>

        {/* Feature Cards Grid (4-5 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-emerald-700" />
                  <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

          {/* 2nd row with 2 large cards */}
          {features.slice(3, 5).map((feature, idx) => (
            <div
              key={idx + 3}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between md:col-span-1 lg:col-span-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-emerald-700" />
                  <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

          {/* Direct helpline card to balance grid */}
          <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white p-7 rounded-2xl border border-emerald-800 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                Doctor Direct Help
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                Consultation Guidance
              </h3>
              <p className="text-xs text-slate-200 mt-2 leading-relaxed">
                Direct telephonic or WhatsApp consultation assistance directly handled by clinic staff and Dr. Arjun Saini.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-800/80">
              <a
                href={`tel:${CLINIC_DATA.phone1}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-colors"
              >
                <span>Call {CLINIC_DATA.phone1}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
