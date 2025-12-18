import React from "react";
import Section from "./Section";

const features = [
  {
    title: "In-Depth Consulting",
    desc: "Accurate scoping to crystallize the right product roadmap.",
    icon: "🧑‍🏫",
  },
  {
    title: "Bug-Free Guarantee",
    desc: "Free 90-day support to ensure seamless deployment.",
    icon: "🛠️",
  },
  {
    title: "Industry-Standard Quality Audits",
    desc: "Every product meets performance, security, and scalability benchmarks.",
    icon: "🛡️",
  },
];

const Container10 = () => {
  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-28">
      <Section className="px-4 sm:px-6 lg:px-12 lg:ml-10">
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-[30px] sm:text-[34px] lg:text-[38px] font-bold text-[#134872] mb-2 sm:mb-3">
            Unique Solutions{" "}
            <span className="text-[#29C553]">SnabbTech offers</span>
          </h2>
          <p className="text-[14px] sm:text-[15px] lg:text-base text-[#4D4E50]">
            Beyond Development: End-to-End Product Success
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#134872]
                rounded-xl
                p-6 sm:p-8 lg:p-10
                text-white
                min-h-55 sm:min-h-55
                flex
                flex-col
                shadow-lg shadow-black
              "
            >
              {/* Icon */}
              <div className="text-2xl sm:text-3xl mb-4 sm:mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#29C553] text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-5 sm:leading-6 text-white/90">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Container10;
