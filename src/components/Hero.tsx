import { WEDDING_COUPLE, WEDDING_DATE_STR, WEDDING_LOCATION } from '../data/weddingData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Full-bleed Wedding Background Image with Vignette & Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={WEDDING_COUPLE.heroImage}
          alt="Festus, a tall, robust groom, and Peace, a petite, slim bride, smiling warmly together in white and gold celebrating their love story"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#032517]/95 via-[#032517]/55 to-[#032517]/35 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      </div>

      {/* Hero Content & Typography */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center flex flex-col items-center justify-center text-white">
        {/* Wedding Monogram & Date Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-[#ffdea5]/50 mb-6 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffdea5]" />
          <span className="font-label-caps text-xs tracking-widest text-[#ffdea5]">
            {WEDDING_DATE_STR} • {WEDDING_LOCATION}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffdea5]" />
        </div>

        <p className="font-label-caps text-sm tracking-[0.25em] text-white/90 mb-3 uppercase">
          We’re Getting Married
        </p>

        <h1 className="hidden md:block font-serif text-5xl lg:text-7xl text-white mb-6 drop-shadow-md font-normal tracking-wide">
          {WEDDING_COUPLE.groom} &amp; {WEDDING_COUPLE.bride}
        </h1>
        <h1 className="md:hidden font-serif text-4xl text-white mb-5 drop-shadow-md font-normal tracking-wide">
          {WEDDING_COUPLE.groom} &amp; {WEDDING_COUPLE.bride}
        </h1>

        {/* Filigree Ribbon Divider */}
        <div className="flex items-center justify-center gap-4 w-full max-w-xs my-3 opacity-90">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#ffdea5] to-transparent" />
          <span className="font-serif text-[#ffdea5] italic text-2xl">❦</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#ffdea5] to-transparent" />
        </div>

        <p className="font-serif text-lg md:text-xl text-white/95 max-w-2xl font-light italic mb-10 leading-relaxed px-4">
          “{WEDDING_COUPLE.tagline}”
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#details"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#ffdea5] hover:bg-[#fed488] text-[#261900] font-label-caps text-xs tracking-widest rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-bold flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            Wedding Details
          </a>
          <a
            href="#guestinfo"
            className="w-full sm:w-auto px-8 py-3.5 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/40 font-label-caps text-xs tracking-widest rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="material-symbols-outlined text-sm">location_on</span>
            Campground &amp; Venue
          </a>
        </div>
      </div>

      {/* Animated Golden Scroll Indicator */}
      <a
        href="#countdown"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#ffdea5] opacity-85 hover:opacity-100 transition-opacity animate-float"
        aria-label="Scroll down to countdown"
      >
        <span className="font-label-caps text-[10px] tracking-widest uppercase mb-1">
          Scroll to Celebrate
        </span>
        <span className="material-symbols-outlined text-2xl">keyboard_arrow_down</span>
      </a>
    </section>
  );
}
