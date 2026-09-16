/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import OurStory from './components/OurStory';
import WeddingDetails from './components/WeddingDetails';
import DressCode from './components/DressCode';
import Gallery from './components/Gallery';
import GiftRegistry from './components/GiftRegistry';
import GuestInfo from './components/GuestInfo';
import LoveNote from './components/LoveNote';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf9f5] text-[#1b1c1a] font-sans paper-texture selection:bg-[#c5a059]/20 selection:text-[#032517]">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Live Countdown */}
        <Countdown />

        {/* Our Story Milestone Timeline */}
        <OurStory />

        {/* Ceremony, Reception & Day Itinerary */}
        <WeddingDetails />

        {/* Dress Code & Attire Palette */}
        <DressCode />

        {/* Photo Gallery & Interactive Lightbox */}
        <Gallery />

        {/* Gift Registry & Direct Bank Transfer Information */}
        <GiftRegistry />

        {/* Guest Travel & Campground Location Details */}
        <GuestInfo />

        {/* Love & Gratitude Note */}
        <LoveNote />
      </main>

      {/* Footer & Scroll to Top */}
      <Footer />
    </div>
  );
}
