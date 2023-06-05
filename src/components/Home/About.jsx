import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
        <div className='bg-skin overflow-hidden relative border border-white shadow-[0px 4px 4px rgba(255, 255, 255, 0.25)] rounded-2xl py-12 flex flex-col justify-center items-center gap-10 sm:px-10 md:px-40 xl:px-56 mt-10 sm:-mt-12 z-[99]'>
            <div className='absolute bottom-5 -left-24 hidden md:block'>
                <div className='ellipse p-2 flex justify-center items-center'>
                    <div className='border-[3px] w-[170px] h-[170px] border-white rounded-full'></div>
                </div>
            </div>
            <p className='subtitle uppercase'>Who we are</p>
            <h4 className='section_title'>We Help To Get Solutions</h4>

            <p className='section_desc text-center'>
                Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed. Tincidunt porttitor eget et adipiscing sagittis diam. Vitae sed nam vulputate bibendum ornare vitae. Scelerisque sit sed.
            </p>

            <div className='flex flex-row gap-7 justify-center items-center'>
                <div className="flex items-center gap-4">
                    <Image 
                        src='/assets/img/groupflight.png'
                        width={55}
                        height={55}
                        alt='icon'
                    />
                    <div className="flex flex-col gap-3 max-w-[166px]">
                        <span className='text-gray-200 text-base font-bold'>Lorem Ipsum</span>
                        <span className='text-gray-200 text-xs font-normal'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Image 
                        src='/assets/img/bulb.png'
                        width={55}
                        height={55}
                        alt='icon'
                    />
                    <div className="flex flex-col gap-3 max-w-[166px]">
                        <span className='text-gray-200 text-base font-bold'>Lorem Ipsum</span>
                        <span className='text-gray-200 text-xs font-normal'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div className='grid grid-flow-col lg:grid-cols-2 gap-8 mt-24 items-center justify-center'>
            <Image 
                src='/assets/img/robot_life.png'
                width={500}
                height={450}
                alt='robot'
                className='ml-5 w-[500px] hidden lg:block'
            />
            <div className='flex flex-col gap-8 px-2 lg:mr-5'>
                <p className='subtitle uppercase'>Lorem Ipsum</p>
                <h4 className='section_title'>AI Robots Technology</h4>

                <p className='section_desc text-justify'>
                    Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed. Tincidunt porttitor eget et adipiscing sagittis diam. Vitae sed nam vulputate bibendum ornare vitae. Scelerisque sit sed.Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed. Tincidunt porttitor eget et adipiscing sagittis diam. Vitae sed nam vulputate bibendum ornare vitae. Scelerisque sit sed.Lorem ipsum dolor sit amet consectetur. Ac pellentesque velit ullamcorper nulla odio massa. Viverra dignissim ac vitae interdum consequat elementum sed. Tincidunt porttitor eget et adipiscing sagittis diam. Vitae sed nam vulputate bibendum ornare vitae. Scelerisque sit sed.
                </p>
            </div>
        </div>
    </>
  )
}

export default About