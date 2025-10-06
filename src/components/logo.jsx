import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className='flex items-center gap-3 font-semibold text-white text-2xl'>
        <Image src="/logo.svg" alt="Logo" width={56} height={40}/>
        AlphaVee
    </Link>
  )
}

export default Logo