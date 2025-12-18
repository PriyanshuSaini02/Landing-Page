import React from "react";
import Section from "./Section";

const Component12 = () => {
  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-28 relative overflow-hidden">
      <Section className="px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-start gap-10 sm:gap-12 lg:gap-20 lg:ml-10">
        <div className="max-w-full lg:max-w-105">
          <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] leading-tight font-bold text-[#134872] mb-4 sm:mb-6">
            What our <span className="text-[#29C553]">clients</span>
            <br />
            say about us.
          </h2>

          <p className="text-[#4D4E50] text-[15px] sm:text-[16px] lg:text-[18px] leading-7 sm:leading-8">
            Aliquam tristique libero at dui sodales, et placerat orci lobortis.
            Donec metus lorem, vulputate at sapien.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full lg:w-auto">
          
          <div className="bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] rounded-xl p-6 sm:p-8 lg:p-10 w-full sm:w-90 relative">

            <div className="flex gap-1 text-[#fbbf24] mb-4 sm:mb-6">
              ★ ★ ★ ★ ★
            </div>

            <p className="text-[#6b7280] text-sm sm:text-base leading-6 sm:leading-7 mb-6 sm:mb-10">
              He skillfully transformed our idea into reality, demonstrating
              expertise and precision. We are eager to continue working with him
              and would confidently recommend his services for any development
              project.
            </p>

            <div>
              <p className="font-semibold text-black">Omkar</p>
              <span className="text-xs sm:text-sm text-[#6b7280]">CEO</span>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-[40px] sm:text-[48px] text-[#c7dbff] leading-none">
              "
            </div>
          </div>

          <div className="bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] rounded-xl p-6 sm:p-8 lg:p-10 w-full sm:w-90 relative">
            <div className="flex gap-1 text-[#fbbf24] mb-4 sm:mb-6">
              ★ ★ ★ ★ ★
            </div>

            <p className="text-[#6b7280] text-sm sm:text-base leading-6 sm:leading-7 mb-6 sm:mb-10">
              We're highly satisfied with SnabbTech; they actively listen to
              feedback and implement changes swiftly. Their responsiveness has
              significantly contributed to our positive experience.
            </p>

            <div>
              <p className="font-semibold text-black">John</p>
              <span className="text-xs sm:text-sm text-[#6b7280]">CEO</span>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-[40px] sm:text-[48px] text-[#c7dbff] leading-none">
              "
            </div>
          </div>
        </div>
      </Section>

      <span className="absolute top-16 sm:top-24 left-10 sm:left-20 w-2 h-2 bg-[#ff6b6b] rounded-sm"></span>
      <span className="absolute bottom-16 sm:bottom-24 right-16 sm:right-32 w-2 h-2 bg-[#ff6b6b] rounded-sm"></span>
    </div>
  );
};

export default Component12;
