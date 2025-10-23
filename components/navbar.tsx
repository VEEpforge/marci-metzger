'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Logo from '../assets/marci-metzger-logo-white.svg'
import clsx from 'clsx';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Show header if scrolling up or near top
      const isScrollingUp = currentY < lastScrollY;
      setIsAtTop(currentY < 10);
      setVisible(currentY < 10 || isScrollingUp);
      setScrolledUp(currentY > 10 && isScrollingUp);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  return (
    <header className={clsx('fixed top-0 left-0 w-full z-30 flex items-center justify-center lg:p-2 transition-transform duration-300', visible ? 'transform translate-y-0' : 'transform -translate-y-full', scrolledUp ? 'bg-background' : '', isAtTop ? 'bg-transparent' : 'bg-background/75 transition-colors backdrop-blur-sm')}>
      <Image
        src={Logo}
        alt='Description of image'
        height={75}
        className='mix-blend-difference'
      />
    </header>
  )
}

export default Navbar