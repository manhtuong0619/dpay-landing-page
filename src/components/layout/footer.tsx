import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../shared/logo';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex h-fit items-center gap-2">
            <Logo width={32} height={32} />
            <Image
              src="/logo-text.svg"
              alt="DPay Logo Text"
              width={176}
              height={43}
              className={`h-[14px] w-auto object-cover`}
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {/* X (Twitter) */}
            <Link
              href="https://x.com/dpay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a1a1a] hover:text-primary transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            {/* Telegram */}
            <Link
              href="https://t.me/dpay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a1a1a] hover:text-primary transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E7EB] mt-8 pt-8">
          <p className="text-center text-[#6B7280] text-sm">© 2025 DPAY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
