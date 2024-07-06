'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from '../components/CustomButton'

function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="mx-auto max-w-[1440px] flex justify-between items-center sm:px-16 px:6 py-4">
        <Link href={'/'} className="flex items-center justify-center">
          <Image
            src={'/logo.svg'}
            alt="Car Hub"
            width={180}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          containerStyle="text-primary-blue rounded-full bg-white min-x-[130px]"
          handleClick={() => console.log('Sign In')}
        />
      </nav>
    </header>
  )
}

export default Navbar
