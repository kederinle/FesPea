import { useState, useEffect } from 'react';
import { WEDDING_COUPLE, WEDDING_HASHTAGS } from '../data/weddingData';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-[#f5f3ef] border-t border-[#c1c8c2]/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col items-center justify-center text-center gap-8 w-full">
          {/* Brand Logo / Monogram */}
          <div className="flex flex-col items-center gap-2">
            <img
              src={WEDDING_COUPLE.logoUrl}
              alt="Festus and Peace Monogram Logo"
              className="h-12 w-auto object-contain"
            />
            <span className="font-serif text-2xl md:text-3xl text-[#032517] italic">
              {WEDDING_COUPLE.groom} &amp; {WEDDING_COUPLE.bride}
            </span>
            <p className="font-label-caps text-xs tracking-widest uppercase text-[#775a19]">
              Forever Starts Here
            </p>
          </div>

          {/* Official Wedding Hashtags */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {WEDDING_HASHTAGS.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1 bg-white rounded-full text-xs font-mono text-[#032517] border border-[#c5a059]/30 shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View-Only Navigation Links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            <a
              href="#home"
              className="text-[#424843] hover:text-[#032517] font-label-caps text-xs tracking-widest uppercase transition-colors"
            >
              Home
            </a>
            <a
              href="#story"
              className="text-[#424843] hover:text-[#032517] font-label-caps text-xs tracking-widest uppercase transition-colors"
            >
              Our Story
            </a>
            <a
              href="#details"
              className="text-[#424843] hover:text-[#032517] font-label-caps text-xs tracking-widest uppercase transition-colors"
            >
              Wedding Details
            </a>
            <a
              href="#dresscode"
              className="text-[#424843] hover:text-[#032517] font-label-caps text-xs tracking-widest uppercase transition-colors"
            >
              Dress Code
            </a>
            <a
              href="#gallery"
              className="text-[#424843] hover:text-[#032517] font-label-caps text-xs tracking-widest uppercase transition-colors"
            >
              Gallery
            </a>
            <a
              href="#registry"
              className="text-[#424843] hover:text-[#032517] font-label-caps text-xs tracking-widest uppercase transition-colors"
            >
              Gift Registry
            </a>
            <a
              href="#guestinfo"
              className="text-[#424843] hover:text-[#032517] font-label-caps text-xs tracking-widest uppercase transition-colors"
            >
              Guest Information
            </a>
          </nav>

          {/* Divider */}
          <div className="w-24 h-[1px] bg-[#c1c8c2]/50" />

          {/* Copyright Text */}
          <p className="font-sans text-xs text-[#424843]">
            © 2026 {WEDDING_COUPLE.groom} &amp; {WEDDING_COUPLE.bride}. All Rights Reserved. Forever &amp; Always.
          </p>
        </div>
      </footer>

      {/* Floating Scroll-To-Top Button */}
      <button
        id="scrollToTop"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 w-11 h-11 rounded-full bg-[#1b3b2b] text-white border border-[#c5a059]/40 shadow-xl flex items-center justify-center transition-all duration-300 hover:bg-[#032517] hover:scale-110 active:scale-95 z-40 ${
          showScrollTop
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none translate-y-3'
        }`}
      >
        <span className="material-symbols-outlined text-xl">north</span>
      </button>
    </>
  );
}
