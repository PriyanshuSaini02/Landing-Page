import React from "react";
import Section from "./Section";

const services = [
  {
    title: "Custom Software Development",
    desc: "Web & mobile applications tailored to business needs.",
    icon: "🖥️",
  },
  {
    title: "Generative AI Development",
    desc: "AI-powered solutions for automation and innovation.",
    icon: "⚙️",
  },
  {
    title: "Product Engineering & Consultation",
    desc: "Expert guidance on how to build, what to build, and how to scale.",
    icon: "🌐",
  },
  {
    title: "Growth and Description",
    desc: "We help startups and SMEs turn ideas into scalable digital products—cost-effectively.",
    icon: "📈",
  },
];

const Component4 = () => {
  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <Section className="px-4 sm:px-6 lg:px-12 lg:ml-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#134872]
                rounded-2xl
                p-6 sm:p-8 lg:p-10
                text-white
                shadow-lg shadow-black
                min-h-80 sm:min-h-90
                flex
                flex-col
              "
            >
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">
                {item.icon}
              </div>

              <h3 className="text-[#29C553] text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-snug">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base leading-6 sm:leading-7 text-white/95">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Component4;
