import React, { useState } from "react";
import Section from "./Section";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] z-50">
      <Section className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between font-sans">
        {/* LOGO */}
        <div className="flex items-center">
          <img
            src="Snabbtech logo.png"
            alt="SnabbTech"
            className="h-5 sm:h-6 lg:h-7 w-auto"
          />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#134872] p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* NAVIGATION - Desktop */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {[
            "Home",
            "About",
            "Services",
            "Industry",
            "Portfolio",
            "Partnership",
            "Blog",
            "SnabbHealth",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-[14px] xl:text-[15px] font-semibold transition-colors ${
                item === "Home"
                  ? "text-[#70AA26]"
                  : "text-black hover:text-[#2ecc71]"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA BUTTON - Desktop */}
        <button className="hidden lg:block h-10 px-4 xl:px-6 bg-[#7cb342] hover:bg-[#689f38] text-white text-[13px] xl:text-[14px] font-semibold rounded-sm whitespace-nowrap">
          Get In Touch
        </button>
      </Section>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {[
              "Home",
              "About",
              "Services",
              "Industry",
              "Portfolio",
              "Partnership",
              "Blog",
              "SnabbHealth",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-[15px] font-semibold py-2 transition-colors ${
                  item === "Home"
                    ? "text-[#70AA26]"
                    : "text-black hover:text-[#2ecc71]"
                }`}
              >
                {item}
              </a>
            ))}
            <button className="h-10 px-6 bg-[#7cb342] hover:bg-[#689f38] text-white text-[14px] font-semibold rounded-sm whitespace-nowrap mt-2">
              Get In Touch
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
