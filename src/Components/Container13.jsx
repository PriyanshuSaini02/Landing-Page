import React from "react";
import Section from "./Section";

const blogs = [
  {
    title: "Why Auto Dealerships Need Digital Solutions",
    desc: "Auto dealerships operate in one of the most competitive, margin‑pressured environments in retail. At the same time, around 95% of buyers now start their car‑shopping journey online, researching models, prices, and financing long before they set foot in a showroom.",
    img: "p1.jpeg",
  },
  {
    title: "How to Build Fast Apps That Load in Under 1 Second",
    desc: "Let's be honest nobody likes slow apps. In fact, studies show that if your app takes more than 2 seconds to load, users start dropping off. And in today's world of instant everything, that's a deal-breaker.",
    img: "p2.jpg",
  },
  {
    title: "Flutter vs React Native: A 2025 Comparison Guide",
    desc: "If you are creating a mobile app in 2025, chances are you've heard the debate between Flutter and React Native. While they both allow you to build beautiful cross-platform apps and are highly popular and powerful, which one should you choose?",
    img: "p3.jpg",
  },
  {
    title: "Is Your No-Code App a Ticking Time Bomb?",
    desc: "Over the last few years, the no-code and low-code revolution has grown incredibly popular. Tools such as Webflow, Bubble, and Zapier provide the ability to create websites, apps, and workflows without even needing to type a single line of code.",
    img: "p4.jpg",
  },
  {
    title: "The Backbone of Digital Transformation: Custom Software",
    desc: "Imagine running a Formula 1 race…. but you're stuck driving a school bus. That's exactly what it feels like trying to scale your business with outdated or generic software. Digital transformation isn't about throwing tech at a problem.",
    img: "p5.jpg",
  },
  {
    title:
      "Is Your Slow Digital Transformation Silently Killing Your Business?",
    desc: "In the current fast-paced digital age, companies that hesitate to undergo digital transformation risk lagging behind. Technology is advancing fast, and businesses that don't keep up not only miss out on competitive edge but also end up paying more, being inefficient,",
    img: "p6.jpg",
  },
];

const Component13 = () => {
  return (
    <div className="w-full bg-[#f2f2f2] py-12 sm:py-16 lg:py-28">
      <Section className="px-4 sm:px-6 lg:px-12 lg:ml-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 sm:mb-12 lg:mb-16 gap-4">
          <h2 className="text-[30px] sm:text-[34px] lg:text-[36px] font-bold text-[#134872]">
            Our Latest <span className="text-[#29C553]">Blog Posts.</span>
          </h2>

          <button className="bg-[#7cb342] hover:bg-[#689f38] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2 rounded-sm shadow whitespace-nowrap">
            Show all our posts →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-lg
                overflow-hidden
                shadow-[0_10px_25px_rgba(0,0,0,0.08)]
                flex
                flex-col
              "
            >
              <div className="h-40 sm:h-45 bg-gray-100">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col grow">
                <h3 className="font-semibold text-[15px] sm:text-base text-[#1f2937] mb-2 sm:mb-3">
                  {blog.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6b7280] leading-5 sm:leading-6 mb-4 sm:mb-6 grow">
                  {blog.desc}
                </p>

                <button className="text-[#7cb342] text-xs font-bold uppercase tracking-wide self-start hover:text-[#689f38]">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Component13;
