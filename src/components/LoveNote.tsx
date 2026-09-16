import { WEDDING_COUPLE } from '../data/weddingData';

export default function LoveNote() {
  return (
    <section className="py-20 md:py-24 bg-[#ffffff] text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <span className="material-symbols-outlined text-[#775a19] text-4xl mb-4">
          format_quote
        </span>
        <h2 className="font-serif text-2xl md:text-3xl text-[#032517] mb-6">
          With Love &amp; Deepest Gratitude
        </h2>
        <p className="font-serif text-lg md:text-xl text-[#424843] italic leading-relaxed mb-8 font-light">
          “We are profoundly grateful for every person who has been part of our journey. You have prayed for us, cheered us on, and blessed our steps. We cannot wait to celebrate this holy union surrounded by the people we cherish most.”
        </p>
        <div className="w-16 h-[1px] bg-[#c5a059] mx-auto mb-4" />
        <p className="font-serif text-lg text-[#032517] font-medium tracking-wide">
          {WEDDING_COUPLE.groom} &amp; {WEDDING_COUPLE.bride}
        </p>
      </div>
    </section>
  );
}
