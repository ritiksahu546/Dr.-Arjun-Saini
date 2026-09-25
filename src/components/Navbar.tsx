import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin, Shield } from 'lucide-react';
import { CLINIC_DATA } from '../constants/clinicData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Doctor', href: '#about-doctor' },
    { label: 'Services', href: '#services' },
    { label: 'Kshar Sutra', href: '#kshar-sutra' },
    { label: 'Clinic Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Clinic Info Announcement Ticker */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-200">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Near M.S. Hospital, Bus Stand, Gangoh, U.P.</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-emerald-200">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Consultation Timings: 7:00 AM – 9:00 PM (Daily)</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-emerald-100 font-medium">
            <span>Direct Helpline:</span>
            <a
              href={`tel:${CLINIC_DATA.phone1}`}
              className="text-amber-300 font-semibold hover:text-amber-200 transition-colors"
            >
              8679610351
            </a>
            <span>/</span>
            <a
              href={`tel:${CLINIC_DATA.phone2}`}
              className="text-amber-300 font-semibold hover:text-amber-200 transition-colors"
            >
              8650164386
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`bg-white transition-all duration-200 ${
          scrolled
            ? 'shadow-md border-b border-slate-200 py-3'
            : 'border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Clinic Brand & Doctor Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-900 text-amber-300 flex items-center justify-center font-bold shadow-md shadow-emerald-950/10 border border-emerald-700/40 shrink-0 group-hover:scale-105 transition-transform">
              <span className="text-xl">🌿</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-emerald-900 transition-colors">
                  {CLINIC_DATA.name}
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-tight">
                <span className="text-emerald-800 font-bold">{CLINIC_DATA.doctorName}</span> · {CLINIC_DATA.degrees} ({CLINIC_DATA.specialty})
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-emerald-800 hover:underline underline-offset-8 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Call Now Button */}
            <a
              href={`tel:${CLINIC_DATA.phone1}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors shadow-sm"
              title="Call Clinic Helpline"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${CLINIC_DATA.whatsappNumber}?text=Hello%20Dr.%20Arjun%20Saini%2C%20I%20would%20like%20to%20consult%20regarding%20anorectal%20care%20at%20Kastbhanjan%20Clinic`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm shadow-emerald-900/10"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-amber-300" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-emerald-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-5 py-5 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 pb-4 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-emerald-800 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Quick Contacts in Mobile Menu */}
          <div className="pt-4 space-y-2.5">
            <div className="text-xs text-slate-500 mb-1">
              <span>Clinic Consultation: 7:00 AM – 9:00 PM</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${CLINIC_DATA.phone1}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-xl font-bold text-xs"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${CLINIC_DATA.whatsappNumber}?text=Hello%20Dr.%20Arjun%20Saini%2C%20I%20would%20like%20to%20consult%20regarding%20anorectal%20care%20at%20Kastbhanjan%20Clinic`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-800 text-white rounded-xl font-bold text-xs"
              >
                <MessageCircle className="w-4 h-4 text-amber-300" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
