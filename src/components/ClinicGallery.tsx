import React, { useState } from 'react';
import { ZoomIn, Eye, Sparkles, Building2, CreditCard, LayoutTemplate, Upload, RotateCcw } from 'lucide-react';
import { CLINIC_DATA } from '../constants/clinicData';
import { OfficialSignageGraphic } from './OfficialSignageGraphic';
import { DoctorVisitingCardGraphic } from './DoctorVisitingCardGraphic';
import { ClinicExteriorGraphic } from './ClinicExteriorGraphic';
import { LightboxModal } from './LightboxModal';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  type: 'signage' | 'card' | 'exterior' | 'interior';
  customImageKey: string;
}

export const ClinicGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'signage' | 'card' | 'exterior'>('all');

  // Custom uploaded photos state (persisted in localStorage)
  const [customImages, setCustomImages] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('kasthbhanjan_clinic_photos');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleFileUpload = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        const updated = { ...customImages, [key]: result };
        setCustomImages(updated);
        try {
          localStorage.setItem('kasthbhanjan_clinic_photos', JSON.stringify(updated));
        } catch {
          // ignore quota error
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = (key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = { ...customImages };
    delete updated[key];
    setCustomImages(updated);
    try {
      localStorage.setItem('kasthbhanjan_clinic_photos', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const galleryItems: GalleryItem[] = [
    {
      id: 'clinic-signage',
      title: 'Clinic Official Signboard & Banner',
      category: 'Signage & Poster',
      description: 'Official bilingual signboard showing Dr. Arjun Saini, B.A.M.S., PGCKS, timings 7 AM - 9 PM, address near M.S. Hospital Gangoh, and phone numbers.',
      type: 'signage',
      customImageKey: 'signage',
    },
    {
      id: 'doctor-card',
      title: 'Dr. Arjun Saini – Visiting Card',
      category: 'Visiting Card',
      description: 'Official clinic visiting card detailing credentials, contact numbers 8679610351 / 8650164386, and anorectal care specialties.',
      type: 'card',
      customImageKey: 'card',
    },
    {
      id: 'clinic-exterior',
      title: 'Clinic Exterior & Landmark Premise',
      category: 'Exterior',
      description: 'Clinic entrance and architectural presence located Near M.S. Hospital, Gangoh Central Bus Stand Road, Uttar Pradesh.',
      type: 'exterior',
      customImageKey: 'exterior',
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
            Clinic Visual Artifacts
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Clinic Gallery &amp; Official Imagery
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            View authentic clinic artifacts: the official signboard poster, doctor visiting card, and exterior landmark at Gangoh.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors ${
              activeTab === 'all'
                ? 'bg-emerald-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            All Artifacts ({galleryItems.length})
          </button>
          <button
            onClick={() => setActiveTab('signage')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors ${
              activeTab === 'signage'
                ? 'bg-emerald-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            Clinic Signage &amp; Poster
          </button>
          <button
            onClick={() => setActiveTab('card')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors ${
              activeTab === 'card'
                ? 'bg-emerald-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            Doctor Visiting Card
          </button>
          <button
            onClick={() => setActiveTab('exterior')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors ${
              activeTab === 'exterior'
                ? 'bg-emerald-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            Clinic Exterior &amp; Location
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const hasCustomImage = Boolean(customImages[item.customImageKey]);

            return (
              <div
                key={item.id}
                className="bg-slate-50/80 rounded-3xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category & Status Bar */}
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                      {item.category}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {hasCustomImage && (
                        <button
                          onClick={(e) => handleResetImage(item.customImageKey, e)}
                          title="Reset to digital render"
                          className="text-[11px] text-rose-600 hover:underline flex items-center gap-0.5"
                        >
                          <RotateCcw className="w-3 h-3" /> Reset
                        </button>
                      )}
                      <label className="cursor-pointer text-[11px] text-slate-500 hover:text-emerald-800 flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-200">
                        <Upload className="w-3 h-3" />
                        <span>{hasCustomImage ? 'Change Photo' : 'Upload Photo'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileUpload(item.customImageKey, e)}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Render Visual Graphic according to type */}
                  <div className="mb-4">
                    {item.type === 'signage' && (
                      <OfficialSignageGraphic
                        onOpenLightbox={() => setSelectedItem(item)}
                        userCustomImage={customImages[item.customImageKey]}
                      />
                    )}
                    {item.type === 'card' && (
                      <DoctorVisitingCardGraphic
                        onOpenLightbox={() => setSelectedItem(item)}
                        userCustomImage={customImages[item.customImageKey]}
                      />
                    )}
                    {item.type === 'exterior' && (
                      <ClinicExteriorGraphic
                        onOpenLightbox={() => setSelectedItem(item)}
                        userCustomImage={customImages[item.customImageKey]}
                      />
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Kastbhanjan Bawasir &amp; General Clinic
                  </span>
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-900 hover:text-emerald-700 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Full Size</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-10 p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl text-center max-w-2xl mx-auto">
          <p className="text-xs text-emerald-900 font-medium">
            ℹ️ All contact numbers (<strong>8679610351, 8650164386</strong>) and clinic timings (<strong>7:00 AM – 9:00 PM</strong>) are accurate and synced directly with Dr. Arjun Saini&apos;s physical clinic signage in Gangoh.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <LightboxModal
          isOpen={Boolean(selectedItem)}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          subtitle={selectedItem.description}
        >
          <div className="max-w-2xl mx-auto">
            {selectedItem.type === 'signage' && (
              <OfficialSignageGraphic
                userCustomImage={customImages[selectedItem.customImageKey]}
              />
            )}
            {selectedItem.type === 'card' && (
              <DoctorVisitingCardGraphic
                userCustomImage={customImages[selectedItem.customImageKey]}
              />
            )}
            {selectedItem.type === 'exterior' && (
              <ClinicExteriorGraphic
                userCustomImage={customImages[selectedItem.customImageKey]}
              />
            )}
          </div>
        </LightboxModal>
      )}
    </section>
  );
};
