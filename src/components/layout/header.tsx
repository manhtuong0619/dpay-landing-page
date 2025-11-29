'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { DAPP_URL } from '@/libs/constants';

import Button from '../shared/button';
import Logo from '../shared/logo';

import MenuIcon from './menu-icon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'What is DPAY', href: '#whatis' },
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#process' },
    { label: 'Security', href: '#security' },
    { label: 'Interface', href: '#interface' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full absolute top-3 left-0 flex justify-center items-center px-[16px] lg:px-0 z-50">
      <div className="w-full max-w-[1400px] lg:mx-auto relative">
        {/* Header Bar */}
        <motion.div
          className={`z-10 h-[48px] md:h-[56px] w-full px-4 lg:px-6 flex items-center justify-between gap-6  ${
            isMobileMenuOpen
              ? 'bg-white shadow-lg border-b-[rgba(0,0,0,0.10)] border-b border-solid rounded-[4px_4px_0_0]'
              : 'bg-[rgba(255,255,255,0.06)] backdrop-blur-md border-transparent rounded'
          }`}
          animate={{
            backgroundColor: isMobileMenuOpen ? '#ffffff' : 'rgba(255,255,255,0.06)',
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <Logo width={32} className={isMobileMenuOpen ? 'text-black' : 'text-white'} />
            <Image
              src="/logo-text.svg"
              alt="DPay Logo Text"
              width={176}
              height={43}
              className={`${isMobileMenuOpen ? 'text-black' : 'text-white'} h-[14px] w-auto object-cover`}
            />
          </div>

          <nav className="items-center gap-8 lg:flex hidden">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white cursor-pointer text-sm font-medium hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href={DAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button className="lg:flex hidden">Launch App</Button>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center cursor-pointer transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.svg
                  key="close"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-black"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </motion.svg>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuIcon />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-white rounded-b-2xl shadow-2xl overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-6 py-4">
                {/* Navigation Items */}
                <nav className="flex flex-col gap-4 mb-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                        ease: 'easeOut',
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleNavClick}
                        className="flex items-center gap-3 text-[#1B1B1D] text-sm font-medium hover:text-[#0142FE] transition-colors"
                      >
                        <div className="w-2 h-2 bg-[#0142FE] flex-shrink-0" />
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Launch App Button */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: navItems.length * 0.05,
                    ease: 'easeOut',
                  }}
                >
                  <Link href={DAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button
                      className="w-full justify-center bg-[#1B1B1D] text-white hover:bg-primary"
                      onClick={handleNavClick}
                    >
                      Launch App
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
