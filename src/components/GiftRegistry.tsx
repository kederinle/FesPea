import { useState } from 'react';
import { REGISTRY_ITEMS, BANK_ACCOUNTS } from '../data/weddingData';

export default function GiftRegistry() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [showCopyToast, setShowCopyToast] = useState<string | null>(null);

  const handleCopy = (accountNumber: string, label: string) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(label);
    setShowCopyToast(`Account number (${accountNumber}) copied to clipboard!`);
    setTimeout(() => {
      setCopiedAccount(null);
      setShowCopyToast(null);
    }, 3000);
  };

  const categories = ['All', 'Experience', 'Home', 'Kitchen'];

  const filteredItems = selectedCategory === 'All'
    ? REGISTRY_ITEMS
    : REGISTRY_ITEMS.filter((it) => it.category === selectedCategory);

  return (
    <section id="registry" className="py-20 md:py-28 bg-[#fbf9f5] border-t border-[#c1c8c2]/30 relative">
      {/* Toast Notification */}
      {showCopyToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#032517] text-white px-6 py-3 rounded-full shadow-2xl border border-[#c5a059] flex items-center gap-3 text-xs md:text-sm font-sans animate-fade-in max-w-md text-center">
          <span className="material-symbols-outlined text-[#c5a059] text-base">check_circle</span>
          <span>{showCopyToast}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-caps tracking-[0.2em] text-[#775a19]">
            Love &amp; Blessings
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#032517] mt-2 mb-3">
            Gift Registry &amp; Funds
          </h2>
          <div className="w-12 h-[1px] bg-[#c5a059] mx-auto mb-4" />
          <p className="font-sans text-sm md:text-base text-[#424843] leading-relaxed">
            Your prayers, warm smiles, and presence on our wedding day are the greatest gifts we could ever ask for. For cherished family and friends who wish to honor us with a wedding gift or financial blessing towards our new beginning, our official wedding accounts and curated gift preferences are provided below.
          </p>
        </div>

        {/* Bank Transfer Cards (Nigeria & International Diaspora) */}
        <div className="mb-16">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h3 className="font-serif text-xl md:text-2xl text-[#032517] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#775a19] text-xl">account_balance</span>
              Direct Bank Transfer &amp; Cash Registry
            </h3>
            <span className="font-label-caps text-[11px] tracking-wider text-[#775a19] bg-[#efeeea] px-3 py-1 rounded-full hidden sm:inline-block">
              Official Wedding Accounts
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BANK_ACCOUNTS.map((bank, index) => (
              <div
                key={bank.accountNumber}
                className="bg-white rounded-2xl p-6 gold-foil-border gold-glow relative flex flex-col justify-between transition-all hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-label-caps text-[10px] tracking-widest text-[#775a19] uppercase px-2.5 py-1 bg-[#fbf9f5] rounded border border-[#c5a059]/30">
                      {bank.currency}
                    </span>
                    <span className="material-symbols-outlined text-[#032517]/40 text-lg">
                      {index === 1 ? 'public' : 'payments'}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg text-[#032517] font-medium mb-1">
                    {bank.bankName}
                  </h4>
                  <p className="text-xs text-[#424843] mb-4">
                    Account Name: <strong className="text-[#032517] font-medium">{bank.accountName}</strong>
                  </p>

                  <div className="bg-[#fbf9f5] p-3 rounded-lg border border-[#c1c8c2]/40 mb-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-label-caps text-[#727973] uppercase tracking-wider block">
                        Account Number
                      </span>
                      <span className="font-mono text-base font-semibold text-[#032517] tracking-wider">
                        {bank.accountNumber}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(bank.accountNumber, bank.bankName)}
                      aria-label={`Copy account number for ${bank.bankName}`}
                      className="px-3 py-1.5 bg-[#032517] text-white hover:bg-[#1b3b2b] text-xs font-label-caps rounded transition-colors flex items-center gap-1 shadow-sm active:scale-95 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-xs">
                        {copiedAccount === bank.bankName ? 'check' : 'content_copy'}
                      </span>
                      {copiedAccount === bank.bankName ? 'Copied' : 'Copy'}
                    </button>
                  </div>

                  {bank.swiftCode && (
                    <div className="flex items-center justify-between text-xs text-[#727973] px-1">
                      <span>SWIFT / BIC Code:</span>
                      <strong className="font-mono text-[#032517]">{bank.swiftCode}</strong>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#c1c8c2]/20 text-[11px] text-[#727973] italic">
                  Transfer Note: Please include &ldquo;Wedding Gift - [Your Name]&rdquo; as the narration.
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wishlist Items & Funds Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-[#032517] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#775a19] text-xl">featured_seasonal_and_gifts</span>
              Curated Gift Wishlist &amp; Inspiration
            </h3>
            <p className="font-sans text-xs text-[#727973] mt-1">
              Suggestions and preferences for physical gifts and celebratory experiences.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-label-caps tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#032517] text-white shadow-sm'
                    : 'bg-white text-[#424843] border border-[#c1c8c2]/40 hover:border-[#c5a059]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Registry Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden gold-foil-border gold-glow flex flex-col justify-between transition-all duration-300 hover:shadow-lg group"
            >
              <div>
                {/* Item Image */}
                <div className="relative h-48 w-full overflow-hidden bg-[#efeeea]">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#fbf9f5]/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-label-caps tracking-widest text-[#775a19] border border-[#c5a059]/30">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="font-serif text-lg text-[#032517] font-medium mb-1 line-clamp-2">
                    {item.name}
                  </h4>
                  <p className="font-sans text-xs text-[#727973] mb-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Price / Store Footer */}
              <div className="p-5 pt-0 border-t border-[#c1c8c2]/20 mt-2 flex items-center justify-between text-xs">
                <span className="font-sans font-semibold text-[#775a19]">
                  {item.price}
                </span>
                {item.storeName && (
                  <span className="text-[11px] text-[#727973] font-sans bg-[#fbf9f5] px-2 py-0.5 rounded border border-[#c1c8c2]/40">
                    {item.storeName}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
