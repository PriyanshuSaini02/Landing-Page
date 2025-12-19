import React from "react";
import Section from "./Section";

const Container8 = () => {
  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-28">
      <Section className="px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-12 lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="max-w-full lg:max-w-130">
            {/* Small label */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-[#29C553] text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Partnerships
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.2] font-bold text-[#134872] mb-4 sm:mb-6">
              Driving Innovation Through{" "}
              <span className="text-[#29C553]">Strategic Collaborations</span>
            </h2>

            {/* Description */}
            <p className="text-[#4D4E50] text-[15px] sm:text-[16px] lg:text-[17px] leading-6 sm:leading-7 mb-6 sm:mb-8">
              At SnabbTech, we believe in the power of partnerships to
              accelerate growth and deliver cutting-edge solutions.
            </p>

            {/* CTA */}
            <button className="bg-[#7cb342] hover:bg-[#689f38] text-white text-sm font-semibold px-6 sm:px-7 py-2.5 sm:py-3 shadow-md">
              Get in Touch
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="media1.jpg"
              alt="Strategic Collaboration"
              className="w-full max-w-full sm:max-w-140 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Container8;