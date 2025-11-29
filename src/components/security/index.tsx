import React from 'react';
import Image from 'next/image';

const securityFeatures = [
  {
    image: '/security-img-1.png',
    title: 'Data Privacy',
    description: 'User data and transaction info are anonymized and never shared with third parties.',
  },
  {
    image: '/security-img-2.png',
    title: 'End-to-End Encryption',
    description: 'All payment flows are protected by advanced Web3 encryption standards.',
  },
  {
    image: '/security-img-3.png',
    title: 'Custody Wallet Protection',
    description:
      "Your wallet is secured by DPay's custody infrastructure with encrypted key management and verified signing.",
  },
  {
    image: '/security-img-4.png',
    title: 'Compliance Ready',
    description: 'Built to align with emerging digital asset and Web3 payment regulations.',
  },
];

const SecuritySection = () => {
  return (
    <section id="security" className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center flex flex-col items-center mb-10 sm:mb-12 md:mb-16">
          <div className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 w-fit bg-[linear-gradient(153deg,#1712FF_0%,#0142FE_83.33%)] shadow-[0_1px_4px_0_rgba(128,152,168,0.12)] rounded-[99px] justify-center gap-2 mb-4 sm:mb-6 md:mb-8">
            <Image src="/security-icon.svg" alt="Security" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-white text-xs sm:text-sm font-medium">Security</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-white mb-4 sm:mb-5 md:mb-6">
            Your safety. Our priority.
          </h2>
          <p className="text-[#FFFFFFB2] text-xs sm:text-sm md:text-base tracking-wider max-w-xl mx-auto leading-relaxed px-4 sm:px-0">
            Advanced blockchain-grade security ensures every payment, wallet, and loyalty action on DPay stays
            protected.
          </p>
        </div>

        {/* Security Cards Grid */}
        <div className="max-w-[1064px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8"
              >
                {/* Image */}
                <div className="h-[140px] sm:h-[160px] md:h-[200px] flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={280}
                    height={180}
                    className="w-auto h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#FFFFFFA3] text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
