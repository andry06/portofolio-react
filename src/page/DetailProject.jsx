import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { detailProject } from '../data';
import Pos from '../assets/pos_project.mp4';
import sistem_produksi from '../assets/sistem-produksi.mp4';

const DetailProject = () => {
    const params = useParams();
    const darkMode = 'true';
    const navigate = useNavigate();

    return(

        <div className={`w-full h-full min-h-[100vh] bg-white ${darkMode===params.mode && "dark"}`}>
              <button onClick={() => navigate(-1)} className="p-1 ml-auto  border-0 text-white md:me-7 me-3 float-right text-2xl leading-none font-semibold outline-none focus:outline-none">
                    <span className="dark:text-white text-red-500 text-3xl block outline-none focus:outline-none">
                      x
                    </span>
               </button>
            <section className="w-full px-0 lg:px-5 2xl:px-40 pt-10 pb-1 lg:py-1 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]">
          
                <h4 className='text-3xl font-bold text-black dark:text-white  text-center'>Project</h4>
            
                <div className="w-full flex flex-col lg:flex-row px-8 md:px-19 gap-10 lg:gap-20 py-14 ">
                    <div className="w-full lg:mt-3 lg:basis-[50%]">
                    <video className='w-full mx-auto cursor-pointer mb-4' controls >
                    <source 
                    src={params.id == 0 ? Pos :
                        params.id == 1 ? sistem_produksi : null } 
                    type="video/mp4" />
                </video>
                    </div>
                    <div className="w-full flex flex-col lg:basis-[50%] text-black dark:text-white ">
                        <h3 className="text-2xl font-semibold">
                            {detailProject[params.id].title}
                        </h3>
                        <div className='text-black dark:text-white mt-5'>
                        <div className='font-semibold '>Details : </div><span className="text-justify">   {detailProject[params.id].details} </span>
                        <div className='font-semibold mt-2'>Tools :</div>	 {detailProject[params.id].tools}
                        <div className='font-semibold mt-2'>Link Github :</div> <a href={detailProject[params.id].github_1} className='text-blue-400'>{detailProject[params.id].github_1}</a>
                        {detailProject[params.id].github_2 && 
                       
                        <div className='font-semibold mt-2'>Backend  : <a href={detailProject[params.id].github_2} className='text-blue-400'>{detailProject[params.id].github_2}</a>
                        </div>
                        }
                        </div>
                    </div>
               
                </div>
                <div className="dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e] dark:text-white flex items-center justify-end p-1 border-t border-solid border-blue-200 rounded-b ">
                  <button onClick={() => navigate(-1)} className="text-red-500 float-right font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button">
                    Close
                  </button>
                </div>
            </section>
        </div>
    )
}

export default DetailProject;
