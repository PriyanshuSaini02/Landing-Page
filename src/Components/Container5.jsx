import React from "react";
import Section from "./Section";

const Component5 = () => {
  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <Section className="px-4 sm:px-6 lg:px-10">
        {/* TOP LABEL */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <span className="text-[#29C553] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Portfolio
          </span>
        </div>

        {/* MAIN HEADING */}
        <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] leading-[1.2] font-semibold text-[#134872] mb-3 sm:mb-4 font-sans">
          The Successfully <span className="text-[#29C553]">Snabb</span>{" "}
          Businesses
        </h2>

        {/* SUB TEXT */}
        <p className="max-w-full sm:max-w-300 text-[15px] sm:text-[16px] lg:text-[18px] leading-6 sm:leading-7 text-[#4D4E50]">
          We take pride in catering their growing business needs and making them
          stand apart on the App Store & Google Play.
        </p>
      </Section>
    </div>
  );
};

export default Component5;