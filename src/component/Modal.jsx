import React from 'react'

import Pos from '../assets/pos_project.mp4';

const Modal = ({setShowModal, body}) => {
    
  return (
    <>  
          <div
            className="justify-center items-end flex w-full  overflow-x-hidden overflow-y-auto fixed bottom-2  inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-full my-6 mx-3 max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e] dark:text-white flex items-start justify-between p-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    POS Food Store
                  </h3>
                  <button
                    className="p-1 ml-auto  border-0 text-white me-3  float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                        setShowModal(false);
                        // body.style.overflow = "auto";
                    }}
                  >
                    <span className="text-white  text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e] dark:text-white lg:max-h-[420px] lg:overflow-y-auto">
                <video className='w-10/12 h-10/12 mx-auto cursor-pointer mb-4' controls autoplay>
                    <source src={Pos} type="video/mp4" />
                </video>
                <p>
                <span className='font-semibold'>Details</span> :  A system that can support sales transactions, purchases, product management and transaction reports digitally. <br />
                <span className='font-semibold'>Tools </span>	: React.JS, Node JS, Express JS MongoDB, CSS Boostrap <br/>
                <span className='font-semibold'>Link Github</span>	: <a href="https://github.com/andry06/project-eduwork" className='text-blue-400'>https://github.com/andry06/project-eduwork</a>
                </p>
                </div>
                {/*footer*/}
                <div className="dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e] dark:text-white flex items-center justify-end p-1 border-t border-solid border-blue-200 rounded-b ">
                  <button
                    className="text-red-500  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                        setShowModal(false);
                        // body.style.overflow = "auto";
                    }}
                  >
                    Close
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  )
}

export default Modal