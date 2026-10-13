"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {  Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
function Header() {
  return (
     
    <div className='p-5 shadow-sm flex justify-between items-center'>
  
  <div className='flex items-center gap-8'>
    <Image src='/logo2.svg' alt='logo' width={250} height={100} />

    <div className='md:flex items-center gap-6 hidden'>
      <Link href={'/'} className='hover:scale-105 hover:text-purple-500 cursor-pointer'>
        Home
      </Link>

      <Link
        href={'/aboutus'}
        className='hover:scale-105 hover:text-purple-500 cursor-pointer'
      >
        About Us
      </Link>

      <Link
        href={'/contactus'}
        className='hover:scale-105 hover:text-purple-500 cursor-pointer'
      >
        Contact Us
      </Link>
      <Link
        href={'/priceChart'}
        className='hover:scale-105 hover:text-purple-500 cursor-pointer'
      >
        Price Chart
      </Link>
    </div>
  </div>

  {/* Right Side Buttons */}
  <div className='flex items-center gap-4'>

    

    <Show when="signed-out">
      <SignInButton />

      <SignUpButton>
        <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
          Sign Up
        </button>
      </SignUpButton>
    </Show>

    <Show when="signed-in">
      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
      <Link href={'/mybooking'}>My Booking</Link>
    </Button>
      <UserButton />
    </Show>

  </div>
</div>
   
            
          
  )
}

export default Header