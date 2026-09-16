import { STORY_MILESTONES } from '../data/weddingData';

export default function OurStory() {
  return (
    <section id="story" className="py-20 md:py-28 max-w-6xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
        <span className="font-label-caps tracking-[0.2em] text-[#775a19]">
          Our Journey
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#032517] mt-2 mb-4">
          Our Story
        </h2>
        <div className="w-12 h-[1px] bg-[#c5a059] mx-auto mb-4" />
        <p className="font-serif text-lg md:text-xl text-[#424843] italic font-light">
          “From University love to being together forever.”
        </p>
      </div>

      {/* Alternating Milestone Timeline */}
      <div className="relative">
        {/* Vertical Central Ribbon Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#c5a059]/20 via-[#c5a059] to-[#c5a059]/20" />

        {/* Mobile Left Ribbon Line */}
        <div className="md:hidden absolute left-6 top-4 bottom-4 w-[1px] bg-[#c5a059]/40" />

        <div className="space-y-16 md:space-y-24">
          {STORY_MILESTONES.map((milestone, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={milestone.title}
                className={`relative flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 md:gap-16`}
              >
                {/* Text Block */}
                <div
                  className={`w-full md:w-1/2 ${
                    isEven ? 'text-left md:text-right' : 'text-left'
                  } pl-14 md:pl-0`}
                >
                  <span className="inline-block font-label-caps tracking-widest text-[#775a19] px-3 py-1 bg-[#efeeea] rounded mb-2 text-[10px]">
                    {milestone.year} • {milestone.location}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#032517] mb-3 font-medium">
                    {milestone.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-[#424843] leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>

                {/* Center Node Marker */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#fbf9f5] gold-foil-border flex items-center justify-center text-[#775a19] z-10 shadow-sm transition-transform hover:scale-110">
                  <span className="material-symbols-outlined text-base">
                    {milestone.icon}
                  </span>
                </div>

                {/* Photo Block */}
                <div className="w-full md:w-1/2 pl-14 md:pl-0">
                  <div className="rounded-xl overflow-hidden gold-foil-border gold-glow group shadow-sm transition-all duration-300 hover:shadow-md">
                    <img
                      src={milestone.image}
                      alt={milestone.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-64 md:h-72 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
