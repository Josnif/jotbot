import Image from 'next/image'
import React from 'react'
import { Play } from 'react-feather'

const Hero = () => {
  return (
    <div className="flex flex-row justify-between items-center min-h-[600px] h-[calc(100vh-85px)] bg_hero overflow-hidden px-2 sm:px-12 lg:px-28 py-36">
      <div className='flex flex-col justify-start max-w-[300px] w-auto z-10'>
        <p className='text-primary font-[500] text-sm ml-1'>AI & Robotics</p>
        <h3 className='hero_head_text'>Next Level Machine intelligence</h3>
        {/* <div className="flex flex-col justify-start text-white text-6xl mt-1">
          <h2 className='mb-3'>Next Level</h2>
          <h2 className='mb-3'>Machine</h2>
          <h2 className='mb-3'>intelligence</h2>
        </div> */}
        <button className='bg-primary text-white text-[16px] leading-7 font-medium mt-12 rounded-[30px] py-2 px-2 w-auto flex flex-row justify-center items-center max-w-[160px]'>
          <Play size={16} color='white' />
          <span>Play Demo</span>
        </button>
      </div>

      <div className='flex flex-row items-center justify-start rotate-90 gap-6 relative pr-0 sm:pr-5 lg:pr-16 -mr-20 sm:mr-0'>
        <div className='hexagon rotate-[270deg] bg-contain w-16 h-16 bg-no-repeat flex justify-center items-center'>
          <Image 
            src='assets/img/star.svg'
            width={20}
            height={20}
            className='mr-2'
          />
        </div>
        <div className='border border-white rounded-none px-3 py-1 break-keep whitespace-nowrap'>
          <span className='text-white uppercase break-keep leading-6 text-base font-medium'>Artifical Intelligence</span>
        </div>
        <Image 
          src='assets/img/subtract.svg'
          width={100}
          height={100}
          alt='subtract'
          className='rotate-90 absolute -right-32 bottom-4'
        />
      </div>

      <Image 
        src='/assets/img/robot-hand-finger.png'
        width={200}
        height={200}
        alt='robot hand'
        className='hidden lg:block absolute top-52 right-0'
      />
    </div>
  )
}

export default Hero