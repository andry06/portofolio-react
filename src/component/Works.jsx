import React, { useState } from 'react';
import Sejam from '../assets/sejam.png';
import sistem_produksi from '../assets/sistem_produksi.png';
import Modal from './Modal';

  
const Works = () => {
    const body = document.querySelector("body"); 
    const [idModal, setIdModal] = useState(0);
    const [showModal, setShowModal] = useState(false);
    console.log(idModal)

    return (
      
    <div className='w-full flex flex-col  px-8 md:px-10 gap-10 lg:gap-20 lg:pb-20 '>
        
        <h4 className='text-3xl font-bold text-black dark:text-white mt-10 text-center'>Projects</h4>

        <div className='flex flex-wrap gap-10  justify-center  ' data-aos='fade-up' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
            <div className='w-[320px] h-[320px]  shadow-xl hover:scale-110  ease-in-out  rounded-xl' >
                <img src={Sejam} alt="pos_food" className='w-full h-[250px]  rounded-t-lg' />
                
                <div className='w-full h-[150px] bg-white dark:bg-[#04133e] shadow-2xl  border rounded-b-lg'>
                    <h4 className='text-2xl text-black dark:text-white font-semibold py-2 px-3 '>
                        POS Food Store
                    </h4>
                   
                    <p className='text-sm text-orange-600 px-3 uppercase'>Production Garment System</p>
                    <a href="https://github.com/andry06/project-eduwork" className='dark:text-blue-500 px-3'>Github Link</a>
                    <br />
                    <button  className='bg-sky-400 hover:bg-sky-500 text-md text-white font-semibold py-1 px-4 align-middle ml-2 mt-2'  onClick={() => {
                        setShowModal(true);
                        setIdModal(0);
                        // body.style.overflow = "hidden"; 
                        }}>
                        Detail</button>
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
                    <button  className='bg-sky-400 hover:bg-sky-500 text-md text-white font-semibold py-1 px-4 align-middle ml-2 mt-2'  onClick={() => {
                        setShowModal(true);
                        setIdModal(1);
                        // body.style.overflow = "hidden"; 
                        }}>
                        Detail</button>
                </div>
            </div>
        </div>

        {showModal ? (
       <Modal setShowModal={setShowModal} body={body} idModal={idModal} />
        
      ) : null}

   
  
    </div>
  )
}

export default Works