import React from "react";

const Whatsapp = () => {
  return (
    <a
      href=""
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-9999 flex items-center gap-3"
    >
      {/* Contact bubble */}
      <div className="relative bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium text-gray-800">
        Contact us
        <span
          className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 
          border-t-8 border-b-8 border-l-8 
          border-t-transparent border-b-transparent border-l-white"
        />
      </div>

      {/* WhatsApp image */}
      <img
        src="/wp.png"
        alt="WhatsApp"
        className="w-14 h-14 rounded-full shadow-lg hover:scale-105 transition-transform"
      />
    </a>
  );
};

export default Whatsapp;
