import React from "react";
import Section from "./Section";

const Component3 = () => {
  return (
    <div
      className="
        relative
        -top-10 sm:-top-16 lg:-top-20
        bg-[#f2f2f2]
        py-8 sm:py-12 lg:py-16
        flex
        justify-center
      "
    >
      <Section className="w-full max-w-200 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6">
        {/* GOOGLE */}
        <div className="text-center">
          <h3 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#0b4a7a] mb-1">
            Google
          </h3>
          <div className="flex items-center justify-center gap-2 leading-none">
            <span className="text-[14px] sm:text-[16px] text-red-600">4.8</span>
            <span className="text-[16px] sm:text-[18px] text-red-600 tracking-widest leading-none">
              ★★★★★
            </span>
          </div>
        </div>

        {/* FACEBOOK */}
        <div className="text-center">
          <h3 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#0b4a7a] mb-1">
            Facebook
          </h3>
          <div className="flex items-center justify-center gap-2 leading-none">
            <span className="text-[14px] sm:text-[16px] text-red-600">5.0</span>
            <span className="text-[16px] sm:text-[18px] text-red-600 tracking-widest leading-none">
              ★★★★★
            </span>
          </div>
        </div>

        <div className="w-full sm:w-65">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="text-left">
              <p className="text-[10px] sm:text-[12px] text-[#666] tracking-widest">
                REVIEWED ON
              </p>
              <p className="text-[24px] sm:text-[30px] font-bold text-black leading-none">
                Clutch
              </p>
            </div>

            <div className="text-left">
              <div className="text-red-600 text-[16px] sm:text-[18px] tracking-widest leading-none">
                ★★★★★
              </div>
              <span className="text-[12px] sm:text-[14px] text-[#555] leading-none">
                4 REVIEWS
              </span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Component3;
