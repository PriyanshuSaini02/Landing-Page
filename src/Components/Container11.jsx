import React from "react";
import Section from "./Section";

const solutions = [
  { title: "Food & Pickup & Delivery", icon: "🚚" },
  { title: "Education", icon: "📘" },
  { title: "Home Services", icon: "🏠" },
  { title: "Healthcare", icon: "🩺" },
  { title: "Real Estate", icon: "🏡" },
  { title: "Fitness", icon: "🏋️" },
  { title: "Sports", icon: "🏀" },
  { title: "E-Commerce", icon: "🛒" },
];

const Component11 = () => {
  return (
    <div className="w-full bg-[#F2F2F2] py-12 sm:py-16 lg:py-28 overflow-hidden">
      <Section className="px-4 sm:px-6 lg:px-10">
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-[30px] sm:text-[34px] lg:text-[36px] font-bold text-[#134872] mb-3 sm:mb-4">
            Best <span className="text-[#29C553]">Solutions</span>
          </h2>
          <p className="max-w-full sm:max-w-180 mx-auto text-[14px] sm:text-[15px] lg:text-base text-[#4D4E50] px-4">
            Continuous iteration and adaptation based on feedback for optimal
            problem-solving.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-1">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-xl
                p-6 sm:p-8 lg:p-10
                flex
                flex-col
                items-center
                justify-center
                shadow-[0_10px_25px_rgba(0,0,0,0.08)]
              "
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
              <p className="text-xs sm:text-sm font-semibold text-[#1f2937] text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Component11;