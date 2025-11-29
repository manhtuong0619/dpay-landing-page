import React from 'react';

const steps = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21 18V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H19C20.1 3 21 3.9 21 5V6H12C10.89 6 10 6.9 10 8V16C10 17.1 10.89 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z"
          fill="white"
        />
      </svg>
    ),
    title: 'Connect wallet',
    description:
      'Link your wallet once — DPay automatically manages your custody wallet in the background for smooth payments.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 11H5V13H3V11ZM3 7H5V9H3V7ZM3 15H5V17H3V15ZM7 11H21V13H7V11ZM7 7H21V9H7V7ZM7 15H21V17H7V15Z"
          fill="white"
        />
        <rect x="8" y="3" width="8" height="8" rx="1" fill="white" />
        <rect x="8" y="13" width="8" height="8" rx="1" fill="white" />
      </svg>
    ),
    title: 'Scan QR Code',
    description: "Use DPay to scan the merchant's QR code and fetch transaction details instantly.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.31 11.14C10.54 10.69 9.97 10.2 9.97 9.47C9.97 8.63 10.76 8.04 12.07 8.04C13.45 8.04 13.97 8.7 14.01 9.68H15.72C15.67 8.34 14.85 7.11 13.23 6.71V5H10.9V6.69C9.39 7.01 8.18 7.99 8.18 9.5C8.18 11.29 9.67 12.19 11.84 12.71C13.79 13.17 14.18 13.86 14.18 14.58C14.18 15.11 13.79 15.97 12.08 15.97C10.48 15.97 9.85 15.25 9.76 14.33H8.04C8.14 16.03 9.4 16.99 10.9 17.3V19H13.24V17.33C14.76 17.04 15.96 16.17 15.97 14.56C15.96 12.36 14.07 11.6 12.31 11.14Z"
          fill="white"
        />
      </svg>
    ),
    title: 'Make payments',
    description: 'Confirm and pay in one tap. DPay executes the transaction securely and instantly on Somnia Network.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
          fill="white"
        />
      </svg>
    ),
    title: 'Earn Loyalty Points',
    description: 'Each payment mints Points — transparent, verifiable on-chain loyalty rewards.',
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20 bg-[#feffff]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-20">
          {/* Left Content - Sticky */}
          <div className="lg:flex-1 lg:sticky lg:top-24 lg:self-start">
            <span className="block px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm font-medium bg-[linear-gradient(153deg,#1712FF_0%,#0142FE_83.33%)] shadow-[0_1px_4px_0_rgba(128,152,168,0.12)] rounded-[99px] mb-4 sm:mb-6 md:mb-8 w-fit">
              Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-[#0D0D0D] mb-3 sm:mb-4">How DPAY works</h2>
            <p className="text-[#000000] max-w-[400px] text-sm sm:text-base leading-relaxed">
              Four simple steps to make seamless payments and earn on-chain rewards.
            </p>
          </div>

          {/* Right Content - Cards */}
          <div className="w-full max-w-[600px]">
            {steps.map((step, index) => (
              <div
                key={index}
                className="sticky bg-[#F5F5F5] w-full rounded-[16px] sm:rounded-[20px] md:rounded-[24px] p-4 sm:p-6 md:p-8 shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] border border-[#0D0D0D14] mb-4 sm:mb-5 md:mb-6"
                style={{
                  top: `${80 + index * 16}px`,
                  zIndex: index + 1,
                }}
              >
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center mb-3 sm:mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-[#000000] text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#696969] text-sm sm:text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
            <div className="h-[180px] sm:h-[220px] md:h-[284px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
