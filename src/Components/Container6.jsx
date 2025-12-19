import React from "react";
import Section from "./Section";

const Container6 = () => {
  return (
    <div className="w-full bg-[#134872] py-12 sm:py-16 lg:py-24 overflow-hidden">
      <Section className="px-4 sm:px-6 lg:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="text-white max-w-full lg:max-w-130">
            {/* Logo */}
            <div className="mb-6 sm:mb-8">
              <img src="tennispal_logo.png" alt="TennisPAL" className="h-10 sm:h-12 lg:h-14" />
            </div>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] lg:text-lg leading-7 sm:leading-8 text-white/90 mb-6 sm:mb-8">
              TennisPAL is a community where you can find and connect with other
              like-minded tennis players using the app. Use TennisPAL to find
              your next tennis partner, share your favourite moments, discover a
              new tennis court, and more.
              <br />
              <br />
              Meet, play, share, and learn tennis, anytime, anywhere!
            </p>

            {/* Store badges */}
            <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
              <img src="app-store.png" alt="App Store" className="h-8 sm:h-10" />
              <img src="play-store-1.png" alt="Play Store" className="h-8 sm:h-10" />
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 sm:gap-12 mb-6 sm:mb-10">
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-wide text-white/70">
                  Downloads
                </p>
                <p className="text-xl sm:text-2xl font-bold">1k+</p>
              </div>

              <div className="h-8 sm:h-10 w-px bg-white/40" />

              <div>
                <p className="text-xs sm:text-sm uppercase tracking-wide text-white/70">
                  Rating
                </p>
                <p className="text-xl sm:text-2xl font-bold">5 / 5</p>
              </div>
            </div>

            {/* CTA */}
            <button className="bg-[#7cb342] hover:bg-[#689f38] px-6 sm:px-8 py-2.5 sm:py-3 text-white text-sm sm:text-base font-semibold">
              Contact Us
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="file-1-e1718029803331.png"
              alt="TennisPAL App Showcase"
              className="w-full max-w-70 sm:max-w-100 lg:max-w-105 xl:w-115 h-auto"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Container6;