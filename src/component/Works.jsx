import React from 'react';
import Sejam from '../assets/sejam.png';
// import { projects } from '../data'


const Works = () => {
  return (
    <div className='w-full flex flex-col  px-8 md:px-10 gap-10 lg:gap-20 lg:pb-20 '>
        <h4 className='text-3xl font-bold text-black dark:text-white mt-10'>Projects</h4>

        <div className='flex flex-wrap gap-10  justify-center' data-aos='fade-up' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
            <div className='w-[320px] h-[320px] cursor-pointer shadow-xl hover:scale-110 rounded-md ease-in-out' >
                        <img src={Sejam} alt="pos_food" className='w-full h-[250px]  rounded-md' />
                        
                        <div className='w-full h-[150px] bg-white dark:bg-[#04133e] shadow-2xl'>
                            <h4 className='text-2xl text-black dark:text-white font-semibold py-2 px-3 '>
                                POS Food Store
                            </h4>
                           
                            <p className='text-sm text-orange-600 px-3 uppercase'>FULL STACK MERN</p>
                            <a href="https://github.com/andry06/project-eduwork" className='dark:text-blue-500 px-3'>Github Link</a>
                            <br />
                            <button className='dark:text-blue-500 dark:bg-white px-4 py-1 mt-2 ms-2 rounded-lg block bg-blue-700 text-white \'>Detail</button>
                        </div>
                    </div>
            {/* {projects.map((p, index) => (
                <div key={index} className='w-[320px] h-[320px] cursor-pointer shadow-xl hover:scale-110 rounded-md ease-in-out' data-aos='fade-up' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                    <img src={p.img} alt={p.name} className='w-full h-[250px] object-cover rounded-md' />
                    
                    <div className='w-full h-[100px] bg-white dark:bg-[#04133e]'>
                        <h4 className='text-2xl text-black dark:text-white font-semibold py-2 px-1 '>
                            {p.title}
                        </h4>
                        <p className='text-sm text-orange-600 px-1 uppercase'>{p.cat}</p>
                    </div>
                </div>
            ))} */}
        </div>
    </div>
  )
}

export default Works