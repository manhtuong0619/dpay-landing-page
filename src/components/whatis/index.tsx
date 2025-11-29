'use client';
import React from 'react';
import Lottie from 'lottie-react';
import Image from 'next/image';

import creditAnimationJson from '@/public/jsons/card-credit.json';

const features = [
  {
    icon: '/wallet.svg',
    text: 'Multi-wallet aggregator',
  },
  {
    icon: '/security.svg',
    text: 'Instant, secure transactions',
  },
  {
    icon: '/web-view.svg',
    text: 'Earn as you pay',
  },
];

const WhatIsDpay = () => {
  return (
    <section
      id="whatis"
      className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] bg-[url('/whatis-bg.png')] bg-cover bg-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12">
        {/* Left Content - Glass Card */}
        <div className="relative w-full max-w-[640px] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
              What is DPAY?
            </h2>

            <p className="text-[#BDBDBD] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              DPAY is a Web3 payment aggregator that unifies wallets, payments, and loyalty rewards into one seamless
              experience.
            </p>

            <p className="text-[#BDBDBD] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 md:mb-10">
              With just one scan, users can pay with any wallet while earning on-chain loyalty points in real time.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.text}
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6"
                    />
                  </div>
                  <span className="text-white text-sm sm:text-base font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Phone Images */}
        <div className="relative w-full max-w-[400px] sm:max-w-[480px] md:max-w-[550px] h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
          {/* Back Phone */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
            <Image
              src="/whatis-phone-2.png"
              alt="DPAY App Screen 2"
              width={280}
              height={560}
              className="w-[140px] sm:w-[180px] md:w-[218px] h-auto"
            />
          </div>

          {/* Front Phone */}
          <div className="absolute right-8 sm:right-12 md:right-20 top-1/2 -translate-y-1/2 z-10">
            <Image
              src="/whatis-phone-1.png"
              alt="DPAY App Screen 1"
              width={320}
              height={640}
              className="w-[170px] sm:w-[220px] md:w-[270px] h-auto drop-shadow-2xl"
            />
          </div>

          <Lottie
            animationData={creditAnimationJson}
            loop={true}
            className="absolute z-20 left-0 sm:left-0 top-6 sm:top-8 md:top-10"
            style={{
              width: 'clamp(180px, 40vw, 300px)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsDpay;
