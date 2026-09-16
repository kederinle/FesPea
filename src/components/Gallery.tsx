import { useState, useEffect, useCallback } from 'react';
import { GALLERY_PHOTOS } from '../data/weddingData';
import { GalleryPhoto } from '../types';

export default function Gallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleOpenPhoto = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = useCallback(() => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev === null ? 0 : (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
    );
  }, [selectedPhotoIndex]);

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev === null ? 0 : (prev + 1) % GALLERY_PHOTOS.length
    );
  }, [selectedPhotoIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handleClose, handlePrev, handleNext]);

  const activePhoto: GalleryPhoto | null =
    selectedPhotoIndex !== null ? GALLERY_PHOTOS[selectedPhotoIndex] : null;

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-[#f5f3ef] border-y border-[#c1c8c2]/30"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-caps tracking-[0.2em] text-[#775a19]">
            Visual Memories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#032517] mt-2 mb-3">
            Moments We Cherish
          </h2>
          <div className="w-12 h-[1px] bg-[#c5a059] mx-auto mb-4" />
          <p className="font-sans text-sm md:text-base text-[#424843]">
            A glimpse into the laughter, journeys, and tender moments that paved the path to our wedding day. Click any photograph to view in full resolution.
          </p>
        </div>

        {/* Curated Masonry / High-End Grid (10 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={photo.id}
                onClick={() => handleOpenPhoto(index)}
                className={`${
                  isFeatured ? 'lg:col-span-2 h-96' : 'h-80 md:h-80'
                } group relative rounded-xl overflow-hidden gold-foil-border gold-glow cursor-pointer transition-all duration-300 hover:shadow-xl`}
                role="button"
                tabIndex={0}
                aria-label={`View photo: ${photo.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOpenPhoto(index);
                  }
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="font-label-caps tracking-widest text-[#ffdea5] text-[10px]">
                      {photo.category}
                    </span>
                    <h4 className="font-serif text-white text-lg md:text-xl font-medium mt-1">
                      {photo.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          id="galleryLightbox"
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2.5 rounded-full hover:bg-white/10 transition-colors z-50"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous photo"
            className="absolute left-4 md:left-8 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50"
          >
            <span className="material-symbols-outlined text-3xl">arrow_back</span>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next photo"
            className="absolute right-4 md:right-8 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50"
          >
            <span className="material-symbols-outlined text-3xl">arrow_forward</span>
          </button>

          {/* Modal Content */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              referrerPolicy="no-referrer"
              className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg gold-foil-border shadow-2xl"
            />
            <div className="mt-4 text-center px-4">
              <span className="font-label-caps text-[#ffdea5] text-[10px] tracking-widest block mb-1">
                {activePhoto.category} • {selectedPhotoIndex! + 1} of {GALLERY_PHOTOS.length}
              </span>
              <p className="text-white font-serif text-lg md:text-xl font-light">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
