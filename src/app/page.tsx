import FeatureSection from '@/components/features';
import HeroSection from '@/components/hero';
import InterfaceSection from '@/components/interface';
import ProcessSection from '@/components/process';
import SecuritySection from '@/components/security';
import WhatIsDpay from '@/components/whatis';

export default function HomePage() {
  return (
    <div className="flex w-full relative flex-col items-center">
      <HeroSection />

      <WhatIsDpay />

      <FeatureSection />

      <ProcessSection />

      <InterfaceSection />

      <SecuritySection />
    </div>
  );
}
