export default function DressCode() {
  return (
    <section id="dresscode" className="py-20 md:py-28 max-w-5xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-label-caps tracking-[0.2em] text-[#775a19]">
          Attire Guide &amp; Theme
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#032517] mt-2 mb-3">
          Wedding Colors: White &amp; Gold
        </h2>
        <div className="w-12 h-[1px] bg-[#c5a059] mx-auto mb-4" />
        <p className="font-sans text-sm md:text-base text-[#424843]">
          We warmly invite our esteemed family, university colleagues, and distinguished guests to celebrate with us adorned in regal White and Gold.
        </p>
      </div>

      {/* Dress Code Split Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ladies */}
        <div className="bg-[#fbf9f5] p-8 md:p-10 rounded-xl gold-foil-border gold-glow hover:border-[#c5a059] transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-[#efeeea] flex items-center justify-center text-[#032517] mb-6">
            <span className="material-symbols-outlined text-2xl">styler</span>
          </div>
          <h3 className="font-serif text-2xl text-[#032517] mb-3">For Ladies</h3>
          <p className="font-sans text-sm md:text-base text-[#424843] leading-relaxed mb-6">
            Stately floor-length evening gowns, exquisite lace ensembles, or radiant traditional celebratory attire (such as Aso Ebi / Iro &amp; Buba) in pure white with dazzling gold gele and accents.
          </p>

          <div className="border-t border-[#c1c8c2]/30 pt-5">
            <span className="font-label-caps tracking-widest text-[#775a19] block mb-3 text-[11px]">
              Wedding Color Palette:
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full bg-[#FFFFFF] shadow-inner inline-block border border-[#c1c8c2]"
                  title="Pristine White"
                />
                <span className="font-sans text-xs md:text-sm text-[#424843]">
                  Pristine White
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full bg-[#D4AF37] shadow-inner inline-block border border-black/10"
                  title="Royal Gold"
                />
                <span className="font-sans text-xs md:text-sm text-[#424843]">
                  Royal Gold
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full bg-[#F5E6C8] shadow-inner inline-block border border-black/10"
                  title="Champagne Gold"
                />
                <span className="font-sans text-xs md:text-sm text-[#424843]">
                  Champagne Gold
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Gentlemen */}
        <div className="bg-[#fbf9f5] p-8 md:p-10 rounded-xl gold-foil-border gold-glow hover:border-[#c5a059] transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-[#efeeea] flex items-center justify-center text-[#032517] mb-6">
            <span className="material-symbols-outlined text-2xl">dry_cleaning</span>
          </div>
          <h3 className="font-serif text-2xl text-[#032517] mb-3">For Gentlemen</h3>
          <p className="font-sans text-sm md:text-base text-[#424843] leading-relaxed mb-6">
            Tailored white agbada with gold embroidery, crisp white tuxedos with gold cufflinks, or sharp formal suits with gold ties and pocket squares.
          </p>

          <div className="border-t border-[#c1c8c2]/30 pt-5">
            <span className="font-label-caps tracking-widest text-[#775a19] block mb-3 text-[11px]">
              Wedding Accents:
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full bg-[#FFFFFF] shadow-inner inline-block border border-[#c1c8c2]"
                  title="Crisp White"
                />
                <span className="font-sans text-xs md:text-sm text-[#424843]">
                  Crisp White
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full bg-[#C5A059] shadow-inner inline-block border border-black/10"
                  title="Warm Gold"
                />
                <span className="font-sans text-xs md:text-sm text-[#424843]">
                  Warm Gold
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full bg-[#B8860B] shadow-inner inline-block border border-black/10"
                  title="Dark Goldenrod"
                />
                <span className="font-sans text-xs md:text-sm text-[#424843]">
                  Metallic Gold
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
