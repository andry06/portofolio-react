import React, { useState } from 'react';
import Sejam from '../assets/sejam.png';
import sistem_produksi from '../assets/sistem_produksi.png';
import hijja_store from '../assets/hijja-store.png';
import travlog from '../assets/travlog.png';

  
const Works = ({darkMode}) => {
    const body = document.querySelector("body"); 
    console.log(darkMode)

    return (
      
    <div className='w-full flex flex-col  px-8 md:px-10 gap-10 lg:gap-10 pb-20 '>
        
        <h4 className='text-3xl font-bold text-black dark:text-white mt-10 text-center'>Projects</h4>

        <div className='flex flex-wrap gap-10  justify-center  ' data-aos='fade-up' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
            <div className='w-[320px] h-[320px]  shadow-xl hover:scale-110  ease-in-out  rounded-xl' >
                <img src={Sejam} alt="pos_food" className='w-full h-[250px]  rounded-t-lg' />
                
                <div className='w-full h-[150px] bg-white dark:bg-[#04133e] shadow-2xl  border rounded-b-lg'>
                    <h4 className='text-2xl text-black dark:text-white font-semibold py-2 px-3 '>
                        POS Food Store
                    </h4>
                   
                    <p className='text-sm text-orange-600 px-3 uppercase'>MERN STACK</p>
                    <a href="https://pos-sejamcafe.vercel.app/" target="_blank" className='dark:text-blue-500 px-3'>Link Demo</a>
                    <br />
                    <a href={`/0/project/${darkMode}`} className='bg-sky-400 hover:bg-sky-500 text-md text-white text-center font-semibold py-1 px-4 align-middle mt-6 block rounded-b-lg'>
                        Detail</a>
                </div>
            </div>

            <div className='w-[320px] h-[320px]  shadow-xl hover:scale-110  ease-in-out  rounded-xl mt-20 md:mt-0' >
                <img src={sistem_produksi} alt="pos_food" className='w-full h-[250px]  rounded-t-lg' />
                
                <div className='w-full h-[150px] bg-white dark:bg-[#04133e] shadow-2xl  border rounded-b-lg'>
                    <h4 className='text-2xl text-black dark:text-white font-semibold py-2 px-3 '>
                        Aplikasi Produksi Garment 
                    </h4>
                    <p className='text-sm text-orange-600 px-3 uppercase'>FULL STACK PHP</p>
                    <a href="#" className='dark:text-blue-500 px-3'>Private</a>
                    <br />
                    <a href={`/1/project/${darkMode}`} className='bg-sky-400 hover:bg-sky-500 text-md text-white text-center font-semibold py-1 px-4 align-middle mt-6 block rounded-b-lg' >
                        Detail</a>
                </div>
            </div>

            <div className='w-[320px] h-[320px]  shadow-xl hover:scale-110  ease-in-out  rounded-xl mt-20 md:mt-20 lg:mt-0' >
                <img src={hijja_store} alt="pos_food" className='w-full h-[250px]  rounded-t-lg' />
                
                <div className='w-full h-[150px] bg-white dark:bg-[#04133e] shadow-2xl  border rounded-b-lg'>
                    <h4 className='text-2xl text-black dark:text-white font-semibold py-2 px-3 '>
                        FE Homepage Hijja Store
                    </h4>
                    <p className='text-sm text-orange-600 px-3 uppercase'>React JS</p>
                    <a href="https://hijja-store.vercel.app/" target="_blank" className='dark:text-blue-500 px-3'>Link Demo</a>
                    <br />
                    <a href={`/2/project/${darkMode}`} className='bg-sky-400 hover:bg-sky-500 text-md text-white text-center font-semibold py-1 px-4 align-middle mt-6 block rounded-b-lg' >
                        Detail</a>
                </div>
            </div>
            
            <div className='w-[320px] h-[320px]  shadow-xl hover:scale-110  ease-in-out  rounded-xl mt-20 lg:mt-20' >
                <img src={travlog} alt="pos_food" className='w-full h-[250px]  rounded-t-lg' />
                
                <div className='w-full h-[150px] bg-white dark:bg-[#04133e] shadow-2xl  border rounded-b-lg'>
                    <h4 className='text-2xl text-black dark:text-white font-semibold py-2 px-3 '>
                        Slicing Home Page Travlog
                    </h4>
                    <p className='text-sm text-orange-600 px-3 uppercase'>React JS</p>
                    <a href="https://slicing-travel-web.vercel.app/" target="_blank" className='dark:text-blue-500 px-3'>Link Demo</a>
                    <br />
                    <a href={`/3/project/${darkMode}`} className='bg-sky-400 hover:bg-sky-500 text-md text-white text-center font-semibold py-1 px-4 align-middle mt-6 block rounded-b-lg' >
                        Detail</a>
                </div>
            </div>
        </div>

       

   
  
    </div>
  )
}

export default Works