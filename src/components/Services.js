import React from 'react'
import Section from './Section'
import residential from '../assets/images/residential.png'
import commercial from '../assets/images/commercial.png'
import charging from '../assets/images/charging.png'
import industrial from '../assets/images/industrial.png'
import solar from '../assets/images/solar.png'
import outdoor from '../assets/images/outdoor.png'

const Services = () => {
  return (
    <Section>
        <div className='ml-12 mt-12 mr-12 sm:ml-8'>
            <div className='flex ml-[8%] sm:flex-col sm:ml-0'>
                <div className='text-5xl sm:text-3xl text-black mt-16 w-[420px] sm:w-fit sm:mt-2'>Our <span className='font-bold'>Solar</span><span className='font-bold text-cyan-600'> Services</span></div>
                <div className='w-[500px] h-[150px] ml-[18%] sm:w-auto sm:ml-0 sm:mt-4'>
                    <div className='font-semibold text-lg sm:text-sm'>COMPLETE END TO END SOLAR SOLUTIONS</div>
                    <div className='text-neutral-500 text-justify text-semibold text-lg sm:text-sm mt-4'>From initial assessment to final installation, we specialize in recommending the best solar designs customized to suit your energy requirements. Our commitment extends beyond installation—we offer ongoing support and maintenance to ensure your system operates efficiently for years to come. </div>
                </div>
            </div>
            <div className='mt-12 sm:mt-20'>
                <div className='flex justify-between w-full sm:flex-col'>
                <div className='relative w-[480px] h-[545px] sm:w-full sm:h-[380px] border-[1px] border-zinc-300 ml-16 sm:ml-0 cursor-pointer overflow-hidden hover:before:w-full hover:before:left-0 transition-all duration-300 before:content-[""] before:absolute before:top-0 before:left-[-100%] before:w-0 before:h-full before:bg-gradient-to-r before:from-indigo-900 before:to-cyan-600 before:transition-all before:duration-300 group'>
                        <div className='absolute top-4 left-4 sm:left-2'>
                        <div className='text-3xl sm:text-2xl text-neutral-430 font-thin sm:w-auto group-hover:text-white'>Residential <span className='font-semibold text-neutral-800 group-hover:text-white'>Installation</span></div>
                        </div>
                        <img className='absolute top-6 w-[480px] h-[470px] sm:w-full sm:h-[350px] mt-[50px] sm:mt-[40px] hover:scale-105 transition-transform' src={residential}/>
                    </div>
                    <div className='relative top-16 w-[470px] h-[545px] sm:w-full sm:h-[380px] border-[1px] border-zinc-300 mr-16 sm:top-16 sm:ml-0 cursor-pointer overflow-hidden hover:before:w-full hover:before:left-0 transition-all duration-300 before:content-[""] before:absolute before:top-0 before:left-[-100%] before:w-0 before:h-full before:bg-gradient-to-r before:from-indigo-900 before:to-cyan-600 before:transition-all before:duration-300 group'>
                        <img className='w-[480px] h-[470px] sm:w-full sm:h-[320px] hover:scale-105 transition-transform' src={commercial}/>
                        <div className='absolute mt-5 sm:mt-3 ml-4 sm:ml-2'>
                        <div className='text-3xl sm:text-2xl text-neutral-430 font-thin group-hover:text-white'>Commercial <span className='font-semibold text-neutral-800 group-hover:text-white'>Installation</span></div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between w-full mt-24 sm:mt-32 sm:flex-col'>
                    <div className='relative w-[480px] h-[545px] sm:w-full sm:h-[360px] border-[1px] border-zinc-300 ml-16 sm:ml-0 cursor-pointer overflow-hidden hover:before:w-full hover:before:left-0 transition-all duration-300 before:content-[""] before:absolute before:top-0 before:left-[-100%] before:w-0 before:h-full before:bg-gradient-to-r before:from-indigo-900 before:to-cyan-600 before:transition-all before:duration-300 group'>
                        <div className='absolute top-4 left-4 sm:left-2'>
                        <div className='text-3xl sm:text-2xl text-neutral-430 font-thin group-hover:text-white'>Industrial <span className='font-semibold text-neutral-800 group-hover:text-white'>Installation</span></div>
                        </div>
                        <img className='absolute top-12 w-[480px] h-[470px] sm:w-full sm:h-[350px] mt-[20px] hover:scale-105 transition-transform' src={industrial}/>
                    </div>
                    <div className='relative top-16 w-[470px] h-[545px] sm:w-full sm:h-[380px] border-[1px] border-zinc-300 mr-16 sm:top-16 sm:ml-0 cursor-pointer overflow-hidden hover:before:w-full hover:before:left-0 transition-all duration-300 before:content-[""] before:absolute before:top-0 before:left-[-100%] before:w-0 before:h-full before:bg-gradient-to-r before:from-indigo-900 before:to-cyan-600 before:transition-all before:duration-300 group'>
                        <img className='w-[480px] h-[470px] sm:w-full sm:h-[320px] hover:scale-105 transition-transform' src={outdoor}/>
                        <div className='absolute mt-5 sm:mt-3 ml-4 sm:ml-1'>
                        <div className='text-3xl sm:text-2xl text-neutral-430 font-thin group-hover:text-white'>Outdoor <span className='font-semibold text-neutral-800 group-hover:text-white'>Spaces</span></div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between w-full mt-24 sm:mt-32 sm:flex-col'>
                    <div className='relative w-[480px] h-[545px] sm:w-full sm:h-[380px] border-[1px] border-zinc-300 ml-16 sm:ml-0 cursor-pointer overflow-hidden  hover:before:w-full hover:before:left-0 transition-all duration-300 before:content-[""] before:absolute before:top-0 before:left-[-100%] before:w-0 before:h-full before:bg-gradient-to-r before:from-indigo-900 before:to-cyan-600 before:transition-all before:duration-300 group'>
                        <div className='absolute top-4 left-4 sm:left-2'>
                        <div className='text-3xl sm:text-2xl text-neutral-430 font-thin group-hover:text-white'>Charging <span className='font-semibold text-neutral-800 group-hover:text-white'>Stations</span></div>
                        </div>
                        <img className='absolute top-6 w-[480px] h-[500px] sm:w-full sm:h-[350px] mt-[50px] hover:scale-105 transition-transform' src={charging}/>
                    </div>
                    <div className='relative top-16 w-[470px] h-[545px] sm:w-full sm:h-[380px] border-[1px] border-zinc-300 mr-16 mt-2 sm:ml-0 sm:mt-0 cursor-pointer overflow-hidden  hover:before:w-full hover:before:left-0 transition-all duration-300 before:content-[""] before:absolute before:top-0 before:left-[-100%] before:w-0 before:h-full before:bg-gradient-to-r before:from-indigo-900 before:to-cyan-600 before:transition-all before:duration-300 group'>
                        <img className='w-[480px] h-[470px] sm:w-full sm:h-[320px] hover:scale-105 transition-transform' src={solar}/>
                        <div className='absolute mt-5 sm:mt-3 ml-4 sm:ml-1'>
                        <div className='text-3xl sm:text-2xl text-neutral-430 font-thin group-hover:text-white'>Solar <span className='font-semibold text-neutral-800 group-hover:text-white'>Poles</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Services