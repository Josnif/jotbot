'use client';

import {RobotsCanvas} from "@/components/canvas/";
import Carousel from "../Carousel";

const EventCard = ({ scene, scale }) => {
    return (
        <div className='flex flex-col justify-center gap-0 w-[300px]'>
            <div className='flex items-center justify-center h-[300px] py-5 border border-white rounded-t-full bg-[#0182AA1A]'>
                {/* <Image 
                    src='/assets/img/robot_life.png'
                    width={290}
                    height={290}
                    alt='event-card'
                    className='rounded-t-full w-[90%] mx-auto'
                /> */}
                <RobotsCanvas scene={scene} scale={scale} />
            </div>
            <div className='border-primary border-4 flex items-center justify-start bg-[#06071B] py-3 px-3 gap-3'>
                <div className="flex flex-col items-start gap-0">
                    <p className='text-primary uppercase text-[11px] font-bold'>Apr</p>
                    <p className='text-white font-bold text-2xl'>14</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='text-white font-bold text-base'>
                        Lorem ipsum dolor sit amet consectetur. Mi massa.
                    </p>
                    <p className='text-[#DFDDDD] text-sm font-normal'>
                        We'll get you directly seated and inside for you to enjoy the show.
                    </p>
                </div>
            </div>
        </div>
    )
}

const Events = () => {
  return (
    <section className='mt-24 flex flex-col gap-16'>
        <h3 className="section_title text-center">Upcoming Events</h3>
        <Carousel slidesToShow={2} autoplay={false} controls={true} speed={6000}>
            <EventCard scene='./robot_model/scene.gltf' />
            <EventCard scene='./robot/scene.gltf' scale={0.35} />
            <EventCard scene='./animated_robot_sdc/scene.gltf' scale={2.5} />
            <EventCard scene='./robot_puteado/scene.gltf' scale={3} />
        </Carousel>
    </section>
  )
}

export default Events