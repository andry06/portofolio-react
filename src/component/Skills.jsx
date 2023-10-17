import React from 'react'
import { skills, softskills } from '../data'
import { BsCheck2All }  from 'react-icons/bs'
import { Nodejs, Mongodb, Reactjs, Express, HTML5, CSS3, } from '../assets';
import Php from '../assets/php.png';
import Mysql from '../assets/mysql.png';
import Bootstrap from '../assets/bootstrap.png';
import Tailwind from '../assets/tailwind.png';
import Restapi from '../assets/restapi.png';
import Postman from '../assets/postman.png';
import Git from '../assets/git.png';

const Skills = () => {
  return (
    <div className='w-full flex flex-col py-20'>
        <h4 className='text-3xl font-bold text-black dark:text-white mb-10 text-center'>
            Technical Skills
        </h4>        
        <div className='w-full flex flex-wrap gap-10 items-center justify-center'>
            {/* {skills.map((skill, index) => (
                <div key={index} className='flex gap-4 shadow-lg py-2 px-6 bg-[#04133e] rounded-full items-center hover:animate-bounce easy-in-out duration-300' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                    <div className='w-10 h-10'>
                        <img src={skill.icon} className='w-full h-full rounded-full' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className='flex items-center justify-between'>
                            <p className='text-md text-semibold text-white'>{skill.name}</p>
                            <p className='text-md text-semibold text-white'>{skill.value + " %"}</p>
                        </div>
                        <div className='w-[200px] h-[10px] bg-slate-800 rounded-lg mb-1'>
                            <div className='bg-neutral-300 h-full' style={{ width: skill.value + '%' }}></div>
                        </div>
                    </div>
                </div>
            ))}
             */}
            <div className='grid-tech-skill easy-in-out' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <div className='w-10 h-10'>
                    <img src={Reactjs} className='w-full h-full rounded-full' />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center justify-between'>
                        <p className='text-md text-semibold text-white'>React JS</p>
                    </div>
                </div>
            </div>
            <div className='grid-tech-skill easy-in-out' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <div className='w-10 h-10'>
                    <img src={Nodejs} className='w-full h-full rounded-full' />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center justify-between'>
                        <p className='text-md text-semibold text-white'>Node JS</p>
                    </div>
                </div>
            </div>
            <div className='grid-tech-skill easy-in-out' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <div className='w-10 h-10'>
                    <img src={Express} className='w-full h-full rounded-full bg-white ' />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center justify-between'>
                        <p className='text-md text-semibold text-white'>Express JS</p>
                    </div>
                </div>
            </div>
            <div className='grid-tech-skill easy-in-out' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <div className='w-10 h-10'>
                    <img src={Mongodb} className='w-full h-full rounded-full ' />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center justify-between'>
                        <p className='text-md text-semibold text-white'>Mongo DB</p>
                    </div>
                </div>
            </div>
            <div className='grid-tech-skill easy-in-out' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <div className='w-10 h-10'>
                    <img src={HTML5} className='w-full h-full rounded-full ' />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center justify-between'>
                        <p className='text-md text-semibold text-white'>HTML5</p>
                    </div>
                </div>
            </div>
            <div className='grid-tech-skill easy-in-out' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <div className='w-10 h-10'>
                    <img src={CSS3} className='w-full h-full rounded-full ' />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center justify-between'>
                        <p className='text-md text-semibold text-white'>CSS3</p>
                    </div>
                </div>
            </div>
            <div className='grid-tech-skill easy-in-out' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <div className='w-16 h-10'>
                    <img src={Php} className='w-full h-full rounded-full ' />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center justify-between'>
                        <p className='text-md text-semibold text-white'>PHP</p>
                    </div>
                </div>
            </div>
            <div className='grid-tech-skill easy-in-out' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <div className='w-16 h-10'>
                    <img src={Mysql} className='w-full h-full rounded ' />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center justify-between'>
                        <p className='text-md text-semibold text-white'>MySQL</p>
                    </div>
                </div>
            </div>
            <div className='grid-tech-skill easy-in-out' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <div className='w-13 h-10'>
                    <img src={Bootstrap} className='w-full h-full rounded ' />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center justify-between'>
                        <p className='text-md text-semibold text-white'>Bootstrap</p>
                    </div>
                </div>
            </div>
            <div className='grid-tech-skill easy-in-out' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <div className='w-14 h-10'>
                    <img src={Tailwind} className='w-full h-full rounded ' />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center justify-between'>
                        <p className='text-md text-semibold text-white'>TailwindCSS</p>
                    </div>
                </div>
            </div>
            <div className='grid-tech-skill easy-in-out' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <div className='w-14 h-10'>
                    <img src={Restapi} className='w-full h-full rounded-2xl bg-white' />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center justify-between'>
                        <p className='text-md text-semibold text-white '>Rest Full Api</p>
                    </div>
                </div>
            </div>
            <div className='grid-tech-skill easy-in-out' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <div className='w-10 h-10'>
                    <img src={Postman} className='w-full h-full rounded-full' />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center justify-between'>
                        <p className='text-md text-semibold text-white '>Postman</p>
                    </div>
                </div>
            </div>
            <div className='grid-tech-skill easy-in-out' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <div className='w-10 h-10'>
                    <img src={Git} className='w-full h-full rounded-full' />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center justify-between'>
                        <p className='text-md text-semibold text-white '>Git</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-[5rem]' >
            <h4 className='text-3xl font-bold text-black dark:text-white mb-14 text-center'>Soft Skills</h4>

            <div className="grid md:grid-cols-4  gap-5 lg:gap-14 items-center justify-center"  >
                <div className='md:col-start-2 grid-soft-skill' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                    <div className='flex items-center gap-3 p-3' >
                        <BsCheck2All color='white' size={22}  />
                        <p className='text-white'>Time Management</p>
                    </div>
                    <div className='flex items-center gap-3 p-3' >
                        <BsCheck2All color='white' size={22}  />
                        <p className='text-white'>Problem Solving</p>
                    </div>
                    <div className='flex items-center gap-3 p-3' >
                        <BsCheck2All color='white' size={22}  />
                        <p className='text-white'>Team Work</p>
                    </div>
                    <div className='flex items-center gap-3 p-3' >
                        <BsCheck2All color='white' size={22}  />
                        <p className='text-white'>Helpfulness</p>
                    </div>
                 
                  
                </div>

                <div className='grid-soft-skill' data-aos='zoom-in-down' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                   
                    <div  className='flex items-center gap-3 p-3'>
                        <BsCheck2All color='white' size={22}  />
                        <p className='text-white'>Critical Thinking</p>
                    </div>

                    <div  className='flex items-center gap-3 p-3'>
                        <BsCheck2All color='white' size={22}  />
                        <p className='text-white'>Emotional Intelligence</p>
                    </div>

                    <div  className='flex items-center gap-3 p-3'>
                        <BsCheck2All color='white' size={22}  />
                        <p className='text-white'>Communication </p>
                    </div>

                    <div className='flex items-center gap-3 p-3' >
                        <BsCheck2All color='white' size={22}  />
                        <p className='text-white'>Inovatif</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Skills