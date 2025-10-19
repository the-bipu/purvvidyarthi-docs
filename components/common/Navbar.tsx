'use client';

import Link from 'next/link';
import React, { useContext, useState } from 'react';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`fixed top-0 z-50 w-full h-auto bg-white flex items-center justify-center`}>

      <div className={`w-full h-full flex flex-col items-center justify-center relative z-40 shadow ${isActive ? 'shadow' : 'shadow-none'} transition-all duration-300`}>
        <div className={`md:w-10/12 w-full h-full flex items-center justify-center text-left transition-all`}>

          <Link href="/" className='w-18 h-18 md:flex hidden items-center justify-center absolute left-0 top-0'>
            <Image src="/logo/purvvidyarthi.svg" alt="purvvidyarthi" width={130} height={70} className='h-18' priority={true} />
          </Link>

          <div className='md:w-full w-11/12 h-18 flex flex-row md:justify-start justify-between items-center'>
            <div className='md:flex hidden flex-row w-full h-full justify-between'>
              <Link href="/" className='h-18 w-auto flex items-center justify-center'>
                <Image src="/logo/purvvidyarthi-long.svg" alt="purvvidyarthi" width={130} height={70} className='h-10 w-auto' priority={true} />
              </Link>

              <Link href={'/reach-us'} className='flex flex-row items-center justify-center gap-4 cursor-default'>
                <Button className='rounded-full bg-[#663399] hover:bg-[#77509e] border border-[#663399] text-lg h-10 w-full bold-charlie cursor-pointer'>Reach Us</Button>
              </Link>
            </div>

            {isActive ? (
              <div onClick={toggleNavbar} className={`md:hidden flex text-2xl cursor-pointer text-white z-[100] ${isActive ? 'block' : ''}`}>
                <Cross2Icon className='w-6 h-6 text-[#0e0e0e] z-[100]' />
              </div>
            ) : (
              <div onClick={toggleNavbar} className="text-2xl cursor-pointer text-white z-[100] md:hidden block">
                <HamburgerMenuIcon className='w-6 h-6 text-[#0e0e0e] z-[100]' />
              </div>
            )}

          </div>

        </div>
      </div>

      <div className={`fixed w-full min-h-screen bg-white text-black transition-all md:hidden flex flex-col items-center gap-4 z-30 ${isActive ? 'top-16' : '-top-full'}`}>
        <div className='w-full h-auto flex flex-col items-center justify-center'>
        </div>
      </div>

    </div>
  )
}

export default Navbar