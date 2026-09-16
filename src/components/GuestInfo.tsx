import { useState } from 'react';
import { GUEST_INFO_ITEMS, MAP_IMAGE_URL, VENUE_FULL_ADDRESS } from '../data/weddingData';

export default function GuestInfo() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(VENUE_FULL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="guestinfo"
      className="py-20 md:py-28 bg-[#f5f3ef] border-t border-[#c1c8c2]/30"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-caps tracking-[0.2em] text-[#775a19]">
            Travel &amp; Stay
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#032517] mt-2 mb-3">
            Good to Know
          </h2>
          <div className="w-12 h-[1px] bg-[#c5a059] mx-auto mb-4" />
          <p className="font-sans text-sm md:text-base text-[#424843]">
            Everything you need to ensure a smooth, relaxed, and memorable experience joining us in Anthony, Lagos State.
          </p>
        </div>

        {/* 4 Bento Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {GUEST_INFO_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#ffffff] p-6 rounded-xl gold-foil-border gold-glow flex flex-col justify-between hover:border-[#c5a059] transition-all duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#efeeea] flex items-center justify-center text-[#032517] mb-4">
                  <span className="material-symbols-outlined text-xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-[#032517] mb-2 font-medium">
                  {item.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#424843] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#c1c8c2]/20">
                {item.linkHref ? (
                  <a
                    href={item.linkHref}
                    className="font-label-caps text-[10px] text-[#775a19] tracking-widest uppercase hover:underline block truncate"
                  >
                    {item.linkText}
                  </a>
                ) : (
                  <span className="font-label-caps text-[10px] text-[#775a19] tracking-widest uppercase block">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Venue Location Preview */}
        <div
          id="location-details"
          className="bg-[#ffffff] rounded-2xl overflow-hidden gold-foil-border gold-glow grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <span className="font-label-caps tracking-widest text-[#775a19] font-semibold text-xs">
                Campground Grounds &amp; Venue
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#032517] mt-1 mb-4">
                Apostolic Faith Church Campground
              </h3>
              <p className="font-sans text-sm md:text-base text-[#424843] leading-relaxed mb-6">
                Situated in Anthony, Lagos State off the Ikorodu Road corridor. Our sacred Holy Matrimony ceremony will hold at the Main Auditorium, followed by our celebratory Wedding Reception holding at the Hall opposite the Main wedding venue by 2pm.
              </p>

              <div className="space-y-3 font-sans text-xs md:text-sm text-[#424843]">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#775a19] text-lg">
                    pin_drop
                  </span>
                  <span>{VENUE_FULL_ADDRESS}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#775a19] text-lg">
                    flight
                  </span>
                  <span>Murtala Muhammed International Airport (LOS) • ~25 mins drive</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#775a19] text-lg">
                    church
                  </span>
                  <span className="font-medium text-[#032517]">Holy Matrimony: Main Auditorium (10:00 AM Prompt)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#775a19] text-lg">
                    celebration
                  </span>
                  <span className="font-medium text-[#032517]">Reception: The Hall Opposite Main Wedding Venue (2:00 PM)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#c1c8c2]/30 flex flex-wrap items-center gap-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  'Apostolic Faith Church Campground, Anthony, Lagos State, Nigeria'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#032517] text-white font-label-caps text-xs tracking-widest rounded-lg hover:bg-[#1b3b2b] transition-all flex items-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-sm">map</span>
                Open in Google Maps
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="px-4 py-3 border border-[#c1c8c2] text-[#032517] rounded-lg font-label-caps text-xs tracking-widest hover:border-[#c5a059] transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm text-[#775a19]">
                  {copied ? 'check' : 'content_copy'}
                </span>
                {copied ? 'Address Copied!' : 'Copy Address'}
              </button>
            </div>
          </div>

          {/* Stylized Map Asset */}
          <div className="relative min-h-[300px] lg:min-h-[380px]">
            <img
              src={MAP_IMAGE_URL}
              alt="An artistic high-end cartographic architectural map rendering of a church campground and banquet hall venue in an ivory, gold, and deep forest green palette."
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#032517]/10 pointer-events-none" />
            <div className="absolute bottom-6 left-6 bg-[#fbf9f5]/92 backdrop-blur-md px-4 py-2 rounded-lg border border-[#c5a059]/40 shadow-md">
              <span className="font-label-caps text-xs tracking-widest text-[#032517] font-semibold">
                Campground • Anthony, Lagos State
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
