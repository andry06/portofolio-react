import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <hr className='hidden dark:block' />

        {/* <div className='w-full flex flex-col md:flex-row py-2 px-8 md:px-10 gap-10 lg:gap-20 justify-between'>
           
            <div className='flex flex-col md:flex-row text-md gap-5 md:gap-20 text-white'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#project">Project</a>
            </div>
            
        </div> */}

        <div className='flex flex-col gap-10 items-center justify-center py-5 '>
            <p className='text-gray-400 text-md tracking-wider'>
                @2023 Andri Suryono
            </p>
        </div>
    </footer>
  )
}

export default Footer