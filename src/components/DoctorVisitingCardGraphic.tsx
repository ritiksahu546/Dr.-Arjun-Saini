import React, { useState } from 'react';
import { Phone, MapPin, Clock, Share2, Download, Check, Sparkles, ZoomIn, ArrowRight } from 'lucide-react';
import { CLINIC_DATA } from '../constants/clinicData';

interface Props {
  onOpenLightbox?: () => void;
  userCustomImage?: string | null;
}

export const DoctorVisitingCardGraphic: React.FC<Props> = ({ onOpenLightbox, userCustomImage }) => {
  const [copied, setCopied] = useState(false);
  const [activeSide, setActiveSide] = useState<'front' | 'back'>('front');

  if (userCustomImage) {
    return (
      <div className="relative group overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-slate-900">
        <img
          src={userCustomImage}
          alt="Dr. Arjun Saini Official Visiting Card"
          className="w-full h-auto object-cover max-h-[380px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          {onOpenLightbox && (
            <button
              onClick={onOpenLightbox}
              className="text-white text-xs bg-emerald-800/90 hover:bg-emerald-700 px-3 py-1.5 rounded-lg flex items-center gap-1.5"
            >
              <ZoomIn className="w-3.5 h-3.5" /> Enlarge Visiting Card
            </button>
          )}
        </div>
      </div>
    );
  }

  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Saini;Arjun;;Dr.;
FN:Dr. Arjun Saini
ORG:Kastbhanjan Bawasir & General Clinic
TITLE:Anorectal Specialist (B.A.M.S., PGCKS)
TEL;TYPE=CELL,VOICE:+918679610351
TEL;TYPE=WORK,VOICE:+918650164386
ADR;TYPE=WORK:;;Near M.S. Hospital\\, Bus Stand;Gangoh;Uttar Pradesh;;India
NOTE:Timings: 7:00 AM - 9:00 PM Daily. Ayurvedic Care for Piles\\, Fissure\\, Fistula\\, Kshar Sutra.
URL:https://ais-pre-fjqbs4mczeql6stzwdmfcf-276045606493.asia-east1.run.app
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Dr_Arjun_Saini_Clinic.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const shareText = `*${CLINIC_DATA.name}*\n*Dr. Arjun Saini* (B.A.M.S., PGCKS - Parul University)\nAnorectal Specialist / Guda Rog Visheshagya\n📍 Near M.S. Hospital, Bus Stand, Gangoh, UP\n📞 8679610351 / 8650164386\n🕐 7:00 AM – 9:00 PM`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Dr. Arjun Saini - Visiting Card',
          text: shareText,
        });
      } catch {
        // user cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Visiting Card Container */}
      <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-emerald-800/20 shadow-2xl transition-all duration-300 hover:shadow-emerald-950/20">
        {/* Card Header Top Ribbon */}
        <div className="h-3 bg-gradient-to-r from-emerald-900 via-emerald-700 to-amber-600" />

        {activeSide === 'front' ? (
          /* FRONT SIDE */
          <div className="p-6 sm:p-7 relative bg-gradient-to-br from-white via-emerald-50/20 to-amber-50/20">
            {/* Corner Logo Mark */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[11px] font-semibold text-emerald-800 tracking-wider uppercase block">
                  ।। श्री कष्टभंजन देवाय नमः ।।
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-emerald-950 tracking-tight">
                  {CLINIC_DATA.name}
                </h4>
                <p className="text-xs text-emerald-700 font-medium devanagari">
                  {CLINIC_DATA.nameHindi}
                </p>
              </div>

              {/* Caduceus / Medical Icon Badge */}
              <div className="w-12 h-12 rounded-xl bg-emerald-900 text-amber-300 flex items-center justify-center font-bold text-lg shadow-md shrink-0 border border-emerald-700/50">
                <span className="text-xl">⚕️</span>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="my-5 border-y border-emerald-100 py-3.5">
              <span className="text-xs text-amber-700 font-semibold uppercase tracking-wider">
                Consultant
              </span>
              <h5 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                {CLINIC_DATA.doctorName}
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Ayurvedic
                </span>
              </h5>
              <p className="text-sm font-semibold text-emerald-900 mt-0.5">
                {CLINIC_DATA.degrees}
              </p>
              <p className="text-xs text-slate-600">
                {CLINIC_DATA.university}
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-amber-100/70 px-2.5 py-1 rounded-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>{CLINIC_DATA.specialty} ({CLINIC_DATA.specialtyHindi})</span>
              </div>
            </div>

            {/* Address & Timings */}
            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Near M.S. Hospital</strong>, Bus Stand, Gangoh, Uttar Pradesh, India
                </span>
              </div>
              <div className="flex items-center gap-2 text-emerald-800 font-medium">
                <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Daily Timing: {CLINIC_DATA.timings}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-emerald-800 shrink-0" />
                <span className="font-bold text-slate-900 text-sm">
                  {CLINIC_DATA.phone1} · {CLINIC_DATA.phone2}
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* BACK SIDE */
          <div className="p-6 sm:p-7 relative bg-gradient-to-br from-emerald-950 to-teal-950 text-white min-h-[300px] flex flex-col justify-between">
            <div>
              <div className="border-b border-emerald-800/80 pb-3 mb-4">
                <h5 className="text-base font-bold text-amber-300">
                  Medical Consultation &amp; Care Areas
                </h5>
                <p className="text-xs text-emerald-200">
                  Kastbhanjan Bawasir &amp; General Clinic · Gangoh
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="bg-emerald-900/60 p-2 rounded-lg border border-emerald-700/50">
                  <p className="font-semibold text-white">बवासीर (Piles)</p>
                  <p className="text-[11px] text-slate-300">Internal &amp; External</p>
                </div>
                <div className="bg-emerald-900/60 p-2 rounded-lg border border-emerald-700/50">
                  <p className="font-semibold text-white">फिशर (Anal Fissure)</p>
                  <p className="text-[11px] text-slate-300">Painful tears &amp; spasm</p>
                </div>
                <div className="bg-emerald-900/60 p-2 rounded-lg border border-emerald-700/50">
                  <p className="font-semibold text-white">भगंदर (Fistula in Ano)</p>
                  <p className="text-[11px] text-slate-300">Complex &amp; recurrent</p>
                </div>
                <div className="bg-emerald-900/60 p-2 rounded-lg border border-emerald-700/50">
                  <p className="font-semibold text-white">क्षार सूत्र (Kshar Sutra)</p>
                  <p className="text-[11px] text-slate-300">Parasurgical technique</p>
                </div>
                <div className="bg-emerald-900/60 p-2 rounded-lg border border-emerald-700/50">
                  <p className="font-semibold text-white">नाक के मस्से (Polyps)</p>
                  <p className="text-[11px] text-slate-300">Nasal obstruction</p>
                </div>
                <div className="bg-emerald-900/60 p-2 rounded-lg border border-emerald-700/50">
                  <p className="font-semibold text-white">साइनस (Sinusitis)</p>
                  <p className="text-[11px] text-slate-300">Ayurvedic management</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-800/80 text-[11px] text-emerald-300 flex justify-between items-center">
              <span>Dr. Arjun Saini, B.A.M.S., PGCKS</span>
              <span>Gangoh, U.P.</span>
            </div>
          </div>
        )}

        {/* Card Controls Bar */}
        <div className="bg-slate-100 border-t border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={() => setActiveSide(activeSide === 'front' ? 'back' : 'front')}
            className="text-emerald-800 font-semibold hover:text-emerald-950 flex items-center gap-1 transition-colors"
          >
            <span>{activeSide === 'front' ? 'View Back / Treatments' : 'View Front / Doctor Info'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={downloadVCard}
              title="Save Contact (.vcf)"
              className="p-1.5 text-slate-700 hover:text-emerald-800 hover:bg-white rounded-md transition-colors flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5 text-emerald-700" />
              <span className="hidden sm:inline font-medium text-[11px]">Save Contact</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              title="Share Card"
              className="p-1.5 text-slate-700 hover:text-emerald-800 hover:bg-white rounded-md transition-colors flex items-center gap-1"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline font-medium text-[11px]">{copied ? 'Copied!' : 'Share'}</span>
            </button>

            {onOpenLightbox && (
              <button
                type="button"
                onClick={onOpenLightbox}
                title="Enlarge Card"
                className="p-1.5 text-slate-700 hover:text-emerald-800 hover:bg-white rounded-md transition-colors"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
