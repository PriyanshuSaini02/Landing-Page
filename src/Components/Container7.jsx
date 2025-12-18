import React from "react";
import Section from "./Section";

const data = [
  {
    title: "Lack of In-House Tech Expertise",
    desc: "Businesses struggle to build and maintain a custom tech team.",
    icon: "/images/TechExpertise.jpg",
  },
  {
    title: "High Cost & Complexity",
    desc: "Hiring, training, and managing developers takes time and resources.",
    icon: "/images/Cost.jpg",
  },
  {
    title: "Trial & Error Risks",
    desc: "Developing tech solutions without experience leads to costly mistakes.",
    icon: "/images/Risk.jpg",
  },
  {
    title: "Customize with flexible enjoyment.",
    desc: "Craft an application designed to the unique requirements of your business.",
    icon: "/images/Customization.jpg",
  },
];

const Container7 = () => {
  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-28">
      <Section className="px-4 sm:px-6 lg:px-12 lg:ml-10">

        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-[#29C553] text-xs sm:text-sm font-semibold tracking-wide mb-2 sm:mb-3">
            ♥ WHY CHOOSE US?
          </p>
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#134872] mb-3 sm:mb-4">
            Why Choose Our Digital{" "}
            <span className="text-[#29C553]">Solutions</span> ?
          </h2>
          <p className="max-w-full sm:max-w-180 mx-auto text-[14px] sm:text-[15px] lg:text-base text-[#4D4E50] px-4">
            We bring the expertise, experience, and efficiency needed to build
            your tech product—without the risks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-xl
                shadow-[0_10px_25px_rgba(0,0,0,0.15)]
                p-6 sm:p-8 lg:p-10
                flex
                flex-col sm:flex-row
                gap-6 sm:gap-8
                items-start
                relative
              "
            >

              <div className="shrink-0">
                <img
                  src={item.icon}
                  alt=""
                  className="w-16 sm:w-20 lg:w-22.5 h-auto"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg font-bold text-[#134872] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#4D4E50] mb-4 sm:mb-6">
                  {item.desc}
                </p>

                <button className="self-start bg-[#7cb342] hover:bg-[#689f38] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2 sm:py-2.5">
                  Get in Touch
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Container7;
