import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-[#0b4a7a] flex items-center justify-center mb-4 sm:mb-6">
              <img src="footer_logo.png" alt="" />
            </div>

            <p className="text-xs sm:text-sm text-[#1f2937] leading-5 sm:leading-6 mb-4 sm:mb-6">
              Location: Mohali, India | Patran, India | Dublin, Ireland |
              Surrey, Canada | Sharjah, UAE
            </p>

            <div className="flex gap-3 sm:gap-4">
              {[
                { src: "facebook.png", alt: "Facebook" },
                { src: "inta.png", alt: "Instagram" },
                { src: "medium.png", alt: "Medium" },
                { src: "linkedin.png", alt: "LinkedIn" },
                { src: "youtube.png", alt: "YouTube" },
              ].map((icon, i) => (
                <img
                  key={i}
                  src={icon.src}
                  alt={icon.alt}
                  className="
                    w-4 h-4 sm:w-5 sm:h-5
                    cursor-pointer
                    opacity-80
                    hover:opacity-100
                    transition
                "
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-[#134872] mb-4 sm:mb-6 inline-block border-b-2 border-[#29C553] pb-1">
              Services
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#1f2937]">
              <li>Web App Development</li>
              <li>Mobile App Development</li>
              <li>Software Development</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-[#134872] mb-4 sm:mb-6 inline-block border-b-2 border-[#29C553] pb-1">
              Industries
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#1f2937]">
              <li>Healthcare</li>
              <li>E-Commerce</li>
              <li>Food & Pickup & Delivery</li>
              <li>Home Services / Fitness</li>
              <li>Sports</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-[#134872] mb-4 sm:mb-6 inline-block border-b-2 border-[#29C553] pb-1">
              Resources
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#1f2937]">
              <li>Blog</li>
              <li>Portfolio</li>
              <li>Partnerships</li>
              <li>About Us</li>
              <li>
                Email Us:{" "}
                <span className="font-medium">ashish@snabbtech.com</span>
              </li>
              <li>SnabbHealth</li>
            </ul>

            <div className="flex gap-4 sm:gap-6 mt-6 sm:mt-10">
              <div className="w-16 h-20 sm:w-20 sm:h-28 border rounded-md flex items-center justify-center text-xs text-center">
                <img src="GoodFirms.svg" alt="" />
              </div>
              <div className="w-20 h-20 sm:w-24 sm:h-28 flex items-center justify-center text-xs text-center">
                <img src="Top-eCommerce.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-10 sm:mt-12 lg:mt-16 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-[#1f2937]">
          © 2025 SnabbTech | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
