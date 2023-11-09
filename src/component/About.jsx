import React from 'react'
import Profile  from '../assets/profile.png';
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { BiSolidFileDoc } from 'react-icons/bi';


const About = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20'>
        <div className='lg:mt-3 w-full md:h-[290px] lg:basis-[35%]  flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md'>
            <img src={Profile} alt='profile' className='h-[290px] p-1 rounded-md scale-95 ease-in-out duration-300 hover:scale-125'/>
        </div>

        <div className="w-full flex flex-col lg:basis-[65%] " data-aos='fade-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
            <p className='text-3xl font-bold text-black dark:text-white mt-5'>About Me</p>
            <p className='text-lg text-black dark:text-gray-400 leading-10 text-justify mt-5'>
            I'm a graduate of informatics engineering and have experience as an IT staff in garment manufacturing for 5 years. Have an interested in programming and currently have completed a bootcamp course at Eduwork with the Mern Stack class. Have an experienced to create or develop programmes with PHP programming language, My Sql database, dan MERN STACK ( Mongo DB, Express JS, React JS, and Node JS).
            </p>

            {/* <div className="mt-5 2xl:mt-10 flex flex-wrap gap-5" data-aos='fade-up' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
                    <FaUserAlt size={14} /> Andri Suryono
                </p>
                <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
                    <MdOutlineAlternateEmail size={14} /> andri.suryono@mail.com
                </p>
                <a href='https://wa.me/+6285878183521' target='_blank' rel="noreferrer"  className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
                    <BsWhatsapp size={14} /> +6285878183521
                </a>
                <a href='https://www.linkedin.com/in/andri-suryono' target='_blank' rel="noreferrer"  className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
                    <BsLinkedin size={14} /> Linkedin
                </a>
                <a href='https://github.com/andry06' target='_blank' rel="noreferrer" className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
                    <BsGithub size={14} /> Github
                </a>
                <a href='https://wa.me/+6285878183521' target='_blank' rel="noreferrer"  className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
                    <BiSolidFileDoc size={14} /> Download CV
                </a>

            </div> */}
        </div>
    </div>
  )
}

export default About