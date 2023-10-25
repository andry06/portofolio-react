import React from 'react'
import { BiSolidFileDoc } from 'react-icons/bi'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div className='w-full flex flex-col py-10'>
    <h4 className='text-3xl font-bold text-black dark:text-white mb-10 text-center'>
        Contact Me
    </h4>  

    <div className="mt-5 2xl:mt-10 flex flex-wrap gap-5 mx-12 " >

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

            </div>
    </div>
  )
}

export default Contact