import React from "react";
import Section from "./Section";

const reasons = [
  {
    title: "Expert In-House Team",
    desc: "100+ products delivered by our experienced tech, project management, and QA experts.",
    icon: "menu.png",
  },
  {
    title: "Cost-Efficient Solution",
    desc: "40–50% lower cost vs building an in-house team.",
    icon: "floor-lamp.png",
  },
  {
    title: "Faster Execution, Zero Compliance Hassle",
    desc: "Scale up/down quickly without HR and compliance overheads.",
    icon: "timer.png",
  },
];

const Container9 = () => {
  return (
    <div className="w-full py-12 sm:py-16 lg:py-28 bg-[#F2F2F2]">
      <Section className="px-4 sm:px-6 lg:px-12 lg:ml-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          <img
            src="Top_3.webp"
            alt="Industry Infrastructure"
            className="w-full max-w-full sm:max-w-140 h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg shadow-black order-2 lg:order-1"
          />

          <div className="max-w-full lg:max-w-140 order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-[#29C553] text-xs sm:text-sm font-semibold uppercase tracking-wide">
                Our Industry
              </span>
            </div>

            <h2 className="text-[30px] sm:text-[34px] lg:text-[38px] leading-tight font-bold text-[#134872] mb-6 sm:mb-8 lg:mb-10">
              Here are 3 Reasons to <br className="hidden sm:block" />
              Patronize <span className="text-[#29C553]">SnabbTech</span>
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {reasons.map((item, index) => (
                <div key={index} className="flex gap-4 sm:gap-5 items-start">
                  <div className="shrink-0">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-8 sm:w-10 h-8 sm:h-10 fill-[#29C553] text-[#29C553] bg-[#29C553]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[#134872] text-[15px] sm:text-base font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#4D4E50] text-sm leading-5 sm:leading-6">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Container9;
