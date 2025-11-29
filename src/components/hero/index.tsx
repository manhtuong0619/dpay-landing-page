import React from 'react';
import Image from 'next/image';

import heroPhone from '@/public/hero-phone.png';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[600px] sm:h-[700px] md:h-[810px] bg-[url('/hero-bg.png')] bg-cover bg-center flex flex-col items-center justify-center overflow-hidden">
      {/* Hero Coins */}
      <Image
        src="/hero-coin-1.png"
        alt="Coin 1"
        width={120}
        height={120}
        className="absolute left-[3%] sm:left-[5%] md:left-[8%] top-[25%] sm:top-[30%] md:top-[35%] w-[60px] sm:w-[80px] md:w-[120px] h-auto animate-float-slow z-0"
      />
      <Image
        src="/hero-coin-3.png"
        alt="Coin 2"
        width={100}
        height={100}
        className="absolute right-[3%] sm:right-[5%] md:right-[8%] top-[20%] sm:top-[25%] md:top-[30%] w-[50px] sm:w-[70px] md:w-[100px] h-auto animate-float-medium z-0"
      />
      <Image
        src="/hero-coin-2.png"
        alt="Coin 3"
        width={180}
        height={180}
        className="hidden sm:block absolute left-[10%] md:left-[20%] bottom-[5%] w-[100px] md:w-[180px] h-auto animate-float-fast z-0"
      />
      <Image
        src="/hero-coin-4.png"
        alt="Coin 4"
        width={90}
        height={90}
        className="hidden sm:block absolute right-[10%] md:right-[20%] bottom-[5%] w-[50px] md:w-[90px] h-auto animate-float-slow z-0"
      />

      <div className="flex items-center flex-col justify-center absolute z-[1] left-1/2 bottom-0 -translate-x-1/2 animate-bounce-soft w-full">
        <div className="mb-2 sm:mb-4">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm font-medium bg-[linear-gradient(153deg,#1712FF_0%,#0142FE_83.33%)] shadow-[0_1px_4px_0_rgba(128,152,168,0.12)] rounded-[99px]">
            Now Live on Product Hunt!
          </span>
        </div>

        {/* Heading */}
        <div className="text-center w-full px-6 sm:px-8 md:px-0 max-w-[320px] sm:max-w-lg md:max-w-2xl mb-8 sm:mb-12 md:mb-[80px]">
          <div className="flex flex-col gap-2 sm:gap-3 text-white mb-4 sm:mb-6 md:mb-8">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[120%] font-medium">
              Your Universal Web3 Payment Gateway
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-white text-sm sm:text-base leading-[24px] sm:leading-[28px] md:leading-[32px] opacity-90">
            DPAY connects your Web3 wallets for fast, secure, and decentralized transactions across multiple blockchain
            networks.
          </p>
        </div>

        <div>
          <Image
            src={heroPhone}
            alt="Hero Phone"
            width={400}
            height={600}
            className="w-[260px] sm:w-[300px] md:w-[376px] h-auto translate-x-[12px] sm:translate-x-[18px] md:translate-x-[24px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
