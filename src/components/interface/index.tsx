import React from 'react';
import Image from 'next/image';

const InterfaceSection = () => {
  return (
    <section id="interface" className="w-full">
      {/* Top Content - White Background */}
      <div className="bg-white pt-20 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Label */}
          <div className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm font-medium bg-[linear-gradient(153deg,#1712FF_0%,#0142FE_83.33%)] shadow-[0_1px_4px_0_rgba(128,152,168,0.12)] rounded-[99px] mb-4 sm:mb-6 md:mb-8 w-fit">
            <span className="text-white text-sm font-medium">Interface</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-[#0D0D0D] mb-6">
            Designed for simplicity, built for speed
          </h2>

          {/* Description */}
          <p className="text-[#6B7280] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            DPay's interface is crafted for real-world use clean, fast, and intuitive.
            <br />
            From scanning a QR to earning your first Points, every interaction feels instant and effortless.
          </p>
        </div>
      </div>

      {/* Bottom Content - Blue Background with Phone */}
      <div className="relative w-full h-[500px] md:h-[600px] bg-[url('/interface-bg.png')] bg-cover bg-center bg-no-repeat">
        {/* Phone Image */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 md:-bottom-0">
          <Image
            src="/interface-phone.png"
            alt="DPay Interface"
            width={400}
            height={800}
            className="w-[300px] md:w-[380px] h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default InterfaceSection;
