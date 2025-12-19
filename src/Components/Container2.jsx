import React from "react";
import Section from "./Section";

const Container2 = () => {
  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <Section className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-6 lg:px-10">
        {/* LEFT HEADING */}
        <div className="max-w-full lg:max-w-170 text-left">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] leading-normal font-[650] text-[#134872] font-sans">
            Discover the <span className="text-[#29C553]">Latest</span>
            <br />
            <span className="text-[#29C553]">Innovations</span> at SnabbTech
          </h2>
        </div>

        {/* RIGHT GREEN BOX */}
        <div className="bg-[#7cb342] text-white rounded-xl px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 max-w-full lg:max-w-130">
          <p className="text-[15px] sm:text-[16px] lg:text-[18px] leading-7 sm:leading-8 font-medium">
            Stay ahead with cutting-edge solutions in AI, product engineering,
            and custom development. From scalable SaaS platforms to
            GenAI-powered automation, we're building the future of
            tech—efficient, secure, and ready to scale.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Container2;