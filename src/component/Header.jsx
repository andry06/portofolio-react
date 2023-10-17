import React, { useEffect } from 'react';
import Profile  from '../assets/profile.png';
import { Nodejs, Mongodb, Reactjs, Express } from '../assets';
import Typed from 'typed.js';
import { BiSolidFileDoc } from 'react-icons/bi';
import MyPDF from '../assets/cv-andri-suryono.pdf';

const Header = () => {
    const el = React.useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Graduate of Informatics Engineering', 'Web Developer', 'Full Stack Developer'],
          typeSpeed: 50,
          backSpeed: 20,
          backDelay: 1000,
          loop: true,
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);
  return (
    
    <div className='w-full flex flex-col lg:flex-row px-8  gap-10 md:gap-1 lg:gap-10 lg:py-20  '>
         <div className='lg:basis-[35%] w-[320px] h-[320px] md:w-[360px] md:h-[360px]  mx-auto rounded-3xl border  border-gray-600 dark:border-gray-200  relative lg:mt-0 flex items-center justify-center hover:scale-110'>
            <img src={Profile} alt="profile" className='w-auto h-full scale-80 absolute  ease-in-out ' data-aos='fade-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'/>
            <div className='relative w-full h-full rounded-full' data-aos='fade-up' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <img src={Reactjs} alt="react.js" className=' absolute  top-7 left-5 w-12 h-12 ' />
                <img src={Express} alt="expressjs" className='absolute bottom-7 left-5 w-12 h-12 dark:bg-white dark:rounded-full' />
                <img src={Mongodb} alt="mongodb" className='absolute top-6 right-5  w-[54px] h-[54px]' />
                <img src={Nodejs} alt='nodejs' className='absolute bottom-7  right-7 w-12 h-12 ' />
            </div>
        </div>
        <div className='flex flex-col mb-5 lg:mb-0 lg:basis-[65%] lg:my-20'>
            <span className='text-2xl font-bold text-gray-800 dark:text-neutral-100'>Hello It's Me</span>
            <div className='flex gap-3 items-center my-1'>
                <h1 className='text-gray-800 dark:text-neutral-100 text-4xl 2xl:text-5xl font-bold text-center'>
                Andri Suryono
                </h1>
            </div>

            <span className='text-2xl font-bold text-gray-800 dark:text-neutral-100 tracking-wider'>
            And I'm a <span ref={el}  className='text-sky-600 dark:text-sky-300' />
            </span>
           
            <div className='mt-8 flex gap-10'>
                <a href='#about' className='bg-sky-500 text-md text-white font-semibold rounded-xl py-2 px-3 align-middle'>
                    About Me
                </a>
                
                <a href={MyPDF} className='text-lg text-white font-semibold rounded-xl py-2 px-4 bg-black dark:bg-[#224cff10] '>
                  
                <BiSolidFileDoc className="inline" /> Download CV
                   
                </a>
            </div>
        </div>
        
       
    </div>
  )
}

export default Header;