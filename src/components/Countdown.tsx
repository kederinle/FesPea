import { useState, useEffect } from 'react';
import { WEDDING_TIMESTAMP, WEDDING_DATE_STR, WEDDING_LOCATION, CEREMONY_DETAIL, RECEPTION_DETAIL } from '../data/weddingData';

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isPast: boolean;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    isPast: false,
  });

  useEffect(() => {
    const targetTime = new Date(WEDDING_TIMESTAMP).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
          isPast: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days < 10 ? `0${days}` : `${days}`,
        hours: hours < 10 ? `0${hours}` : `${hours}`,
        minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
        seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
        isPast: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToCalendar = () => {
    // Generate Google Calendar Link for Thursday 16th September 2026
    const title = encodeURIComponent("Festus & Peace Holy Matrimony & Wedding Reception");
    const details = encodeURIComponent(
      `Join us in celebrating the holy matrimony of Festus & Peace!\nTheme: From University love to being together forever.\nColors: White and Gold.\nCeremony: ${CEREMONY_DETAIL.time} at ${CEREMONY_DETAIL.venue}\nReception: ${RECEPTION_DETAIL.time} at ${RECEPTION_DETAIL.venue}\nAddress: ${CEREMONY_DETAIL.address}`
    );
    const location = encodeURIComponent(`${CEREMONY_DETAIL.venue}, ${CEREMONY_DETAIL.address}`);
    // 20260916T090000Z (10:00 AM Lagos WAT) to 20260916T180000Z (7:00 PM Lagos WAT)
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20260916T090000Z/20260916T180000Z&details=${details}&location=${location}`;
    window.open(googleCalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="countdown"
      className="py-16 md:py-24 bg-[#ffffff] border-b border-[#c1c8c2]/30"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Monogram Seal Divider */}
        <div className="w-14 h-14 mx-auto rounded-full gold-foil-border bg-[#fbf9f5] flex items-center justify-center text-[#775a19] font-serif italic text-xl mb-4 shadow-sm">
          F&amp;P
        </div>

        <p className="font-label-caps tracking-[0.2em] text-[#775a19] font-semibold mb-2">
          The Celebration of a Lifetime
        </p>

        <h2 className="font-serif text-3xl md:text-5xl text-[#032517] mb-12">
          Counting Down to Forever
        </h2>

        {/* Countdown Timer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
          {/* Days */}
          <div className="p-6 bg-[#fbf9f5] rounded-xl gold-foil-border gold-glow flex flex-col items-center justify-center transition-transform hover:-translate-y-1 duration-300">
            <span
              id="countdownDays"
              className="font-serif text-[#032517] text-4xl md:text-5xl font-normal tracking-tight"
            >
              {timeLeft.days}
            </span>
            <span className="h-[1px] w-8 bg-[#c5a059]/40 my-2" />
            <span className="font-label-caps text-xs tracking-widest text-[#424843]">
              Days
            </span>
          </div>

          {/* Hours */}
          <div className="p-6 bg-[#fbf9f5] rounded-xl gold-foil-border gold-glow flex flex-col items-center justify-center transition-transform hover:-translate-y-1 duration-300">
            <span
              id="countdownHours"
              className="font-serif text-[#032517] text-4xl md:text-5xl font-normal tracking-tight"
            >
              {timeLeft.hours}
            </span>
            <span className="h-[1px] w-8 bg-[#c5a059]/40 my-2" />
            <span className="font-label-caps text-xs tracking-widest text-[#424843]">
              Hours
            </span>
          </div>

          {/* Minutes */}
          <div className="p-6 bg-[#fbf9f5] rounded-xl gold-foil-border gold-glow flex flex-col items-center justify-center transition-transform hover:-translate-y-1 duration-300">
            <span
              id="countdownMinutes"
              className="font-serif text-[#032517] text-4xl md:text-5xl font-normal tracking-tight"
            >
              {timeLeft.minutes}
            </span>
            <span className="h-[1px] w-8 bg-[#c5a059]/40 my-2" />
            <span className="font-label-caps text-xs tracking-widest text-[#424843]">
              Minutes
            </span>
          </div>

          {/* Seconds */}
          <div className="p-6 bg-[#fbf9f5] rounded-xl gold-foil-border gold-glow flex flex-col items-center justify-center transition-transform hover:-translate-y-1 duration-300">
            <span
              id="countdownSeconds"
              className="font-serif text-[#775a19] text-4xl md:text-5xl font-normal tracking-tight"
            >
              {timeLeft.seconds}
            </span>
            <span className="h-[1px] w-8 bg-[#c5a059]/40 my-2" />
            <span className="font-label-caps text-xs tracking-widest text-[#424843]">
              Seconds
            </span>
          </div>
        </div>

        <p className="mt-8 font-sans text-sm text-[#424843] max-w-md mx-auto">
          {WEDDING_DATE_STR} • {WEDDING_LOCATION}
        </p>

        {/* Add to Calendar Utility */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleAddToCalendar}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#c5a059]/50 bg-[#fbf9f5] hover:bg-[#f5f3ef] text-[#032517] font-label-caps text-[11px] tracking-wider transition-all duration-200 shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-base text-[#775a19]">
              event_available
            </span>
            Save Date to Google Calendar
          </button>
        </div>
      </div>
    </section>
  );
}
