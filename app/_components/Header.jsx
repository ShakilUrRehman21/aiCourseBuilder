import React from 'react'
import Image from 'next/image'
import Link from 'next/link'; // Import Link from Next.js
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='flex justify-between p-4 shadow-md'>
        <Image src={'/logo.png'} width={150} height={80}/>
          <Link href="/dashboard">
          <Button>
            Get Started
          </Button>
          </Link>
    </div>
  )
}

export default Header