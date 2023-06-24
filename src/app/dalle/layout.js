// https://rsms.me/inter/inter.css

import './style.css'
import Link from 'next/link'
import Image from 'next/image'
import { logo } from '../../../public/assets/dalle'


export const metadata = {
  title: 'Jotbot DAlle AI',
  description: 'jotbot Dalle Image Generation',
}

export default function DalleLayout({ children }) {
  return (
    <>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link href='/dalle'>
          <Image 
            src={logo}
            alt='dalle logo'
            width={28}
            height={28}
            className='w-28 object-contain'
          />
        </Link>

        <Link href='/dalle/create-post' className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
          Create Post
        </Link>
      </header>

      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        {children}
      </main>
    </>
  )
}