import React from "react";
import Section from "./Section";

const Container1 = () => {
  return (
    <div
      className="
        relative
        w-full
        min-h-[calc(100vh-64px)]
        bg-cover
        bg-position-[75%_15%]
        overflow-hidden
        bg-none md:bg-[url('b1.webp')]
      "
    >
      <Section className="h-full flex items-start px-4 sm:px-6 lg:px-12 pt-20 sm:pt-32 lg:pt-40 lg:ml-10">
        <div className="max-w-full sm:max-w-170">
          <h1 className="text-[#134872] text-[28px] sm:text-[36px] lg:text-[50px] font-semibold leading-[1.15] mb-5 sm:mb-7 font-sans">
            Your Trusted Tech <br />
            Partner in{" "}
            <span className="text-[#29C553]">Product Engineering.</span>
          </h1>

          <p className="text-[16px] sm:text-[18px] lg:text-[22px] leading-[1.7] text-[#4D4E50] mb-6 sm:mb-10 font-sans">
            Bespoke Web, App, and Custom GenAI{" "}
            <br className="hidden sm:block" />
            Development—from Concept to Scalable,{" "}
            <br className="hidden sm:block" />
            Secure, and High-Performance Solutions.
          </p>

          <button className="bg-[#7cb342] hover:bg-[#689f38] h-10 sm:h-11.25 px-5 sm:px-7 text-white text-[13px] sm:text-[14px] font-bold whitespace-nowrap">
            Get In Touch
          </button>
        </div>
      </Section>

      <div
        className="
          absolute
          right-10 sm:right-20 lg:right-100
          bottom-0
          w-24 sm:w-32 lg:w-40
          h-auto
          pointer-events-none
          hidden sm:block
        "
      >
        <img src="TAXI.png" alt="phone" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Container1;
