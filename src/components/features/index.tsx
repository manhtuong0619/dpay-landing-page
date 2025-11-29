import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: '/feat-icon-1.png',
    title: 'All your wallets, one tap away',
    description: 'Aggregate all your crypto wallets manage, send, and monitor assets in one unified hub.',
  },
  {
    icon: '/feat-icon-2.png',
    title: 'Instant QR & cross-chain payments',
    description: 'Scan once, pay instantly automatically finds the best payment route across wallets and networks.',
  },
  {
    icon: '/feat-icon-3.png',
    title: 'Safe, managed transactions',
    description:
      'Custody-based protection ensures your transactions execute securely while keeping your assets traceable on-chain.',
  },
  {
    icon: '/feat-icon-4.png',
    title: 'Rewards live on-chain',
    description:
      'Each payment mints Points — transparent, transferable loyalty points that can be redeemed across partners.',
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="w-full py-24 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <span className="block mb-[32px] w-fit px-4 py-2 text-white text-sm font-medium bg-[linear-gradient(153deg,#1712FF_0%,#0142FE_83.33%)] shadow-[0_1px_4px_0_rgba(128,152,168,0.12)] rounded-[99px]">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-[#0D0D0D] mb-6">Why choose DPAY?</h2>
          <p className="text-[#0D0D0D] text-base md:text-lg">
            Powerful features designed for real-world Web3 payments and on-chain loyalty.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl px-6 py-8 border border-[#00000014] hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className="h-14 w-14 flex items-center justify-center rounded"
                  style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #EDF7FF 100%)',
                  }}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={56}
                    height={56}
                    className="w-10 h-10 object-cover"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[#1a1a1a] text-lg font-semibold mb-3 leading-tight">{feature.title}</h3>

              {/* Description */}
              <p className="text-[#6B7280] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
