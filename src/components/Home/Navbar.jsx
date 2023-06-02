import Image from 'next/image'
import Link from 'next/link'

import { Globe } from 'react-feather'

const menuList = [
    {
        link: '/',
        name: 'Home'
    },
    {
        link: 'services',
        name: 'Service'
    },
    {
        link: 'features',
        name: 'Features'
    },
    {
        link: 'about-us',
        name: 'About us'
    },
];
const Navbar = () => {
    const active = '/';
    return (
        <nav className='flex flex-row justify-between items-center isolate border-b py-[22px] px-5 sm:px-14 lg:px-[120px] bg-skin shadow shadow-[inset 0px -1px 1px rgba(0, 0, 0, 0.1)]'>
            <Link href='/'>
                <Image 
                    src='assets/img/logo.svg'
                    width={130}
                    height={35}
                    alt='logo'
                />
            </Link>

            <div className='hidden md:visible md:flex flex-row items-center p-0 gap-[30px]'>
                {menuList.map((item, index) => (
                    <Link 
                        href={item.link}
                        key={`${item.name}-${index}`}
                        className={`${active == item.link ? 'active_link' : 'text-[#ACACAC]'} font-[500] text-sm flex flex-col relative items-center hover:text-primary`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            <div className='flex flex-row items-center gap-3 md:gap-6'>
                <div className='flex items-center gap-2'>
                    <Globe size={24} color='white' stroke='#fff' />
                    <span className='text-white font-sm font-[700] uppercase'>EN</span>
                </div>
                {/* <button className='flex items-center gap-2 py-2 bg-primary rounded-[100px] text-white'> */}
                <button className='main_button_type px-[22px]'>
                    Login
                </button>
            </div>
        </nav>
    )
}

export default Navbar