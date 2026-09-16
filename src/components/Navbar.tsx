import { useState, useEffect } from 'react';
import { WEDDING_COUPLE } from '../data/weddingData';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'countdown', 'story', 'details', 'dresscode', 'gallery', 'registry', 'guestinfo'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Our Story', href: '#story', id: 'story' },
    { label: 'Wedding Details', href: '#details', id: 'details' },
    { label: 'Dress Code', href: '#dresscode', id: 'dresscode' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Registry', href: '#registry', id: 'registry' },
    { label: 'Guest Info', href: '#guestinfo', id: 'guestinfo' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fbf9f5]/95 backdrop-blur-md shadow-sm border-b border-[#c1c8c2]/30'
          : 'bg-[#fbf9f5]/85 backdrop-blur-sm border-b border-[#c1c8c2]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20 w-full">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group transition-all duration-300 ease-out active:scale-95"
          aria-label="Festus & Peace Monogram"
        >
          <img
            src={WEDDING_COUPLE.logoUrl}
            alt="Festus and Peace Monogram Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-serif text-2xl font-semibold tracking-wider text-[#032517]">
            Festus &amp; Peace
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-label-caps tracking-widest text-[11px] uppercase transition-all duration-200 ${
                  isActive
                    ? 'text-[#032517] font-semibold border-b-2 border-[#c5a059] pb-1'
                    : 'text-[#424843] hover:text-[#032517] pb-1 border-b-2 border-transparent'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Trailing Action Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#details"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 bg-[#1b3b2b] text-white font-label-caps tracking-widest rounded-lg border border-[#c5a059]/40 hover:bg-[#032517] transition-all duration-300 shadow-sm active:scale-95 text-[11px]"
          >
            Details
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            id="mobileMenuBtn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden text-[#032517] p-2 focus:outline-none transition-transform duration-200 active:scale-90"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isMobileMenuOpen && (
        <div
          id="mobileMenu"
          className="md:hidden bg-[#ffffff] border-b border-[#c1c8c2]/30 px-6 py-6 transition-all duration-300 shadow-xl"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-label-caps uppercase tracking-widest text-xs py-2 transition-colors ${
                  activeSection === link.id
                    ? 'text-[#032517] font-bold border-b border-[#c5a059]/40'
                    : 'text-[#424843] hover:text-[#032517]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#details"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center px-4 py-3 bg-[#1b3b2b] text-white font-label-caps uppercase tracking-widest rounded-lg mt-2 text-xs shadow-md"
            >
              Wedding Details
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
