import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { CLINIC_DATA } from '../constants/clinicData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Formulate a structured WhatsApp message to send directly to Dr. Arjun Saini
    const text = `*New Consultation Enquiry*\n*Patient Name:* ${formData.name.trim()}\n*Phone:* ${formData.phone.trim()}\n*Message/Condition:* ${formData.message.trim() || 'Requesting consultation details.'}\n*Clinic:* Kastbhanjan Bawasir & General Clinic, Gangoh`;

    const whatsappUrl = `https://wa.me/${CLINIC_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
            Consultation Assistance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Book Your Consultation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Speak directly with Dr. Arjun Saini or send an inquiry to plan your clinic visit.
          </p>
        </div>

        {/* Essential Note Banner: No automated online booking */}
        <div className="max-w-3xl mx-auto mb-10 bg-amber-50 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-sm">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900">
            <strong className="font-bold">Important Notice:</strong> We do not operate an automated online appointment booking system. Consultations are arranged directly by phone or WhatsApp to understand your medical needs and suggest the best consultation time.
          </div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Direct Contact Channels Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white p-7 sm:p-8 rounded-3xl shadow-xl space-y-6">
            <div>
              <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                Direct Channels
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Call or WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200 mt-1">
                Fastest response for clinical consultation inquiries and guidance.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Call for Consultation Button */}
              <div>
                <span className="text-xs text-slate-300 block mb-1.5 font-medium">
                  Primary Clinic Helpline:
                </span>
                <a
                  href={`tel:${CLINIC_DATA.phone1}`}
                  className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-4 bg-white hover:bg-slate-100 text-emerald-950 font-extrabold text-base rounded-2xl transition-colors shadow-sm"
                >
                  <Phone className="w-5 h-5 text-emerald-800" />
                  <span>Call for Consultation</span>
                </a>
              </div>

              {/* Secondary Phone */}
              <div className="pt-1">
                <a
                  href={`tel:${CLINIC_DATA.phone2}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-900/80 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl border border-emerald-700/60 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Alternate: {CLINIC_DATA.phone2}</span>
                </a>
              </div>

              {/* WhatsApp for Enquiry */}
              <div className="pt-2">
                <span className="text-xs text-slate-300 block mb-1.5 font-medium">
                  Instant Message / WhatsApp:
                </span>
                <a
                  href={`https://wa.me/${CLINIC_DATA.whatsappNumber}?text=Hello%20Dr.%20Arjun%20Saini%2C%20I%20would%20like%20to%20consult%20regarding%20anorectal%20care%20at%20Kastbhanjan%20Clinic%20in%20Gangoh`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-4 bg-emerald-800 hover:bg-emerald-700 text-white font-extrabold text-base rounded-2xl transition-colors shadow-sm border border-emerald-600"
                >
                  <MessageCircle className="w-5 h-5 text-amber-300" />
                  <span>WhatsApp for Enquiry</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-800/80 text-xs text-emerald-200 space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Consultation: 7:00 AM – 9:00 PM (Daily)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Strict patient confidentiality maintained</span>
              </div>
            </div>
          </div>

          {/* Quick Enquiry Form Box */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-md">
            <h3 className="text-xl font-bold text-slate-900">
              Send Consultation Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Fill in your details below and click Send Enquiry to connect directly with the clinic via WhatsApp or receive a callback.
            </p>

            {submitted ? (
              <div className="mt-6 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h4 className="font-bold text-emerald-950 text-base">
                  Enquiry Dispatched!
                </h4>
                <p className="text-xs text-emerald-900 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. If WhatsApp did not open automatically, you can also dial{' '}
                  <a href={`tel:${CLINIC_DATA.phone1}`} className="underline font-bold">
                    {CLINIC_DATA.phone1}
                  </a>{' '}
                  directly for immediate support.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', message: '' });
                  }}
                  className="mt-2 text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {error && (
                  <div className="p-3 bg-rose-50 text-rose-800 border border-rose-200 rounded-xl text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number (Mobile) *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number (e.g. 8679610351)"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">
                    Message / Concern (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your symptoms or inquiry (e.g. consultation for bawasir, fissure, or timing inquiry)..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-emerald-950/10 flex items-center justify-center gap-2 active:scale-98"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Send Enquiry</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center pt-1">
                  We respect your privacy. No promotional spam. Direct clinic interaction only.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
