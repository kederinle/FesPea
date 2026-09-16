import { CEREMONY_DETAIL, RECEPTION_DETAIL, DAY_SCHEDULE, WEDDING_DATE_STR } from '../data/weddingData';

export default function WeddingDetails() {
  return (
    <section
      id="details"
      className="py-20 md:py-28 bg-[#f5f3ef] border-y border-[#c1c8c2]/30"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-caps tracking-[0.2em] text-[#775a19]">
            The Matrimonial Celebration
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#032517] mt-2 mb-4">
            Join Us as We Say “I Do”
          </h2>
          <div className="w-12 h-[1px] bg-[#c5a059] mx-auto mb-4" />
          <p className="font-sans text-sm md:text-base text-[#424843]">
            Please join us for both our sacred Holy Matrimony and the celebratory Grand Reception that follows.
          </p>
        </div>

        {/* Ceremony & Reception Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Holy Matrimony Card */}
          <div className="bg-[#ffffff] p-8 md:p-10 rounded-xl gold-foil-border gold-glow flex flex-col justify-between relative overflow-hidden group hover:border-[#c5a059] transition-all duration-300">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#ffdea5]/15 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 bg-[#f2dfd7] text-[#231915] font-label-caps tracking-widest rounded text-[10px]">
                  {CEREMONY_DETAIL.categoryBadge}
                </span>
                <span className="material-symbols-outlined text-[#775a19] text-2xl">
                  church
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#032517] mb-2">
                {CEREMONY_DETAIL.title}
              </h3>
              <p className="font-label-caps text-[#775a19] font-bold text-xs tracking-wider mb-6">
                {CEREMONY_DETAIL.date} • {CEREMONY_DETAIL.time}
              </p>

              <div className="space-y-4 font-sans text-sm text-[#424843] border-t border-[#c1c8c2]/20 pt-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#775a19] text-lg mt-0.5">
                    location_on
                  </span>
                  <div>
                    <strong className="text-[#032517] block font-medium">
                      {CEREMONY_DETAIL.venue}
                    </strong>
                    <span>{CEREMONY_DETAIL.address}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#775a19] text-lg mt-0.5">
                    info
                  </span>
                  <p className="text-xs md:text-sm text-[#424843]">
                    {CEREMONY_DETAIL.notes}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#c1c8c2]/20 flex items-center justify-between">
              <a
                href="#location-details"
                className="inline-flex items-center gap-2 text-[#032517] hover:text-[#775a19] font-label-caps tracking-widest font-semibold transition-colors text-xs"
              >
                <span className="material-symbols-outlined text-sm">directions</span>
                Get Directions
              </a>
              <span className="font-label-caps text-xs text-[#775a19] tracking-widest">
                {CEREMONY_DETAIL.attireTag}
              </span>
            </div>
          </div>

          {/* Reception Card */}
          <div className="bg-[#ffffff] p-8 md:p-10 rounded-xl gold-foil-border gold-glow flex flex-col justify-between relative overflow-hidden group hover:border-[#c5a059] transition-all duration-300">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#1b3b2b]/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 bg-[#ffdea5] text-[#261900] font-label-caps tracking-widest rounded text-[10px]">
                  {RECEPTION_DETAIL.categoryBadge}
                </span>
                <span className="material-symbols-outlined text-[#775a19] text-2xl">
                  celebration
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#032517] mb-2">
                {RECEPTION_DETAIL.title}
              </h3>
              <p className="font-label-caps text-[#775a19] font-bold text-xs tracking-wider mb-6">
                {RECEPTION_DETAIL.date} • {RECEPTION_DETAIL.time}
              </p>

              <div className="space-y-4 font-sans text-sm text-[#424843] border-t border-[#c1c8c2]/20 pt-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#775a19] text-lg mt-0.5">
                    location_on
                  </span>
                  <div>
                    <strong className="text-[#032517] block font-medium">
                      {RECEPTION_DETAIL.venue}
                    </strong>
                    <span>{RECEPTION_DETAIL.address}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#775a19] text-lg mt-0.5">
                    restaurant
                  </span>
                  <p className="text-xs md:text-sm text-[#424843]">
                    {RECEPTION_DETAIL.notes}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#c1c8c2]/20 flex items-center justify-between">
              <a
                href="#location-details"
                className="inline-flex items-center gap-2 text-[#032517] hover:text-[#775a19] font-label-caps tracking-widest font-semibold transition-colors text-xs"
              >
                <span className="material-symbols-outlined text-sm">directions</span>
                Get Directions
              </a>
              <span className="font-label-caps text-xs text-[#775a19] tracking-widest">
                {RECEPTION_DETAIL.attireTag}
              </span>
            </div>
          </div>
        </div>

        {/* Schedule of Events Timeline Ribbon */}
        <div className="max-w-3xl mx-auto bg-[#ffffff] p-8 md:p-12 rounded-xl gold-foil-border gold-glow">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl text-[#032517] mb-1">
              Itinerary of the Day
            </h3>
            <p className="font-label-caps text-xs tracking-widest text-[#775a19]">
              {WEDDING_DATE_STR}
            </p>
          </div>

          <div className="relative border-l border-[#c5a059]/35 ml-4 md:ml-8 pl-6 md:pl-10 space-y-8">
            {DAY_SCHEDULE.map((item, idx) => {
              const isFirstOrLast = idx === 0 || idx === DAY_SCHEDULE.length - 1;

              return (
                <div key={item.time} className="relative group">
                  <div
                    className={`absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 rounded-full ${
                      isFirstOrLast
                        ? 'bg-[#1b3b2b] border-2 border-[#ffdea5]'
                        : 'bg-[#775a19] border-2 border-[#fbf9f5]'
                    } shadow-sm group-hover:scale-125 transition-transform`}
                  />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="font-label-caps text-xs tracking-widest text-[#775a19] font-bold min-w-[90px]">
                      {item.time}
                    </span>
                    <div>
                      <h4 className="font-serif text-base md:text-lg text-[#032517] font-semibold">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs md:text-sm text-[#424843] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
