'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Logo from '../assets/marci-metzger-logo-white.svg'
import clsx from 'clsx';
import { BiMenuAltRight } from 'react-icons/bi';
import Link from 'next/link';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Item, ItemGroup, ItemSeparator } from './ui/item';

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
    <header
      className={
        clsx('fixed top-0 left-0 w-full z-30 flex items-center justify-between px-4 lg:px-10 transition-transform duration-300',
        visible ?
          'transform translate-y-0' : 'transform -translate-y-full',
        scrolledUp ?
          'bg-background' : '',
        isAtTop ?
          'bg-transparent' : 'bg-background/75 transition-colors backdrop-blur-sm'
        )}>
      <div className='lg:flex lg:flex-row lg:gap-4 hidden lg:visible font-inter font-light text-sm text-white mix-blend-difference tracking-wider'>
        <Link href="/" className='hover:text-zinc-500'>PROPERTIES</Link>
        <Link href="/" className='hover:text-zinc-500'>SEARCH</Link>
      </div>
      <Image
        src={Logo}
        alt='Description of image'
        className='h-20 lg:h-24 w-auto mix-blend-difference'
      />
      <div className='lg:flex lg:flex-row items-center font-inter font-light text-sm text-white mix-blend-difference'>
        <div className='lg:flex lg:gap-4 hidden lg:visible mr-1'>
          <Link href="/" className='hover:text-zinc-500'>CONTACT</Link>
          <span >MENU</span>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <BiMenuAltRight className='h-8 w-auto hover:text-zinc-500'/>
          </SheetTrigger>
          <SheetContent className="w-screen lg:w-[400px] bg-background/75 backdrop-blur-sm">
            <SheetHeader className='hidden'>
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>
                Navigation links for Marci Metzger Homes
              </SheetDescription>
            </SheetHeader>
            <div className='flex flex-col gap-4 p-4 font-inter'>
              <ItemGroup>
                <Item>
                  <Link href="/" className='hover:text-zinc-500'>PROPERTIES</Link>
                </Item>
                <ItemSeparator />
                <Item>
                  <Link href="/" className='hover:text-zinc-500'>ABOUT US</Link>
                </Item>
                <ItemSeparator />
                <Item>
                  <Link href="/" className='hover:text-zinc-500'>SEARCH</Link>
                </Item>
                <ItemSeparator />
                <Item>
                  <Link href="/" className='hover:text-zinc-500'>CONTACT</Link>
                </Item>
                <ItemSeparator />
              </ItemGroup>
            </div>
          </SheetContent>
        </Sheet>
        {/* <BiMenuAltRight className='h-8 w-auto hover:text-zinc-500'/> */}
      </div>
    </header>
  )
}

export default Navbar