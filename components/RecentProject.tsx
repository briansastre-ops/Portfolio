import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/PinContainer'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProject = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className='heading'>
          A small selection of {''}
          <span className='text-purple'>
            recent projects
          </span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
          {projects.map(({id, title, img, des, iconLists, link}) => (
            <div 
              key={id} 
              className="sm:h-[30rem] h-[24rem] lg:min-h-[28rem] flex items-center justify-center sm:w-80 w-[70vw] mt-10" // Changed mt-8 to mt-10 for more spacing
            >
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full h-full"
              >
                <PinContainer title={link} href={link}>
                  <div className='relative flex items-center justify-center sm:w-80 w-[70vw] overflow-hidden h-[18vh] lg:h-[25vh] mb-10'> 
                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                      <img src="/bg.png" alt="background" className='w-full h-full object-cover' />
                      <img 
                        src={img} 
                        alt={title} 
                        className='absolute bottom-0 w-full h-full object-cover' 
                      />
                    </div>
                  </div>
                  <h1 className='font-bold lg:text-xl md:text-lg text-base line-clamp-1'> 
                    {title}
                  </h1>
                  <p className='lg:text-lg lg:font-normal font-light text-sm line-clamp-2'>
                    {des}
                  </p>
                  <div className='flex items-center justify-between mt-5 mb-3'>
                    <div className='flex items-center'>
                      {iconLists.map((icon, index) => (
                        <div 
                          key={icon} 
                          className='border border-white/[0.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center'
                          style={{
                            transform: `translateX(-${4 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt={icon} className='p-1' />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-lg md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </a>
            </div>
          ))}
      </div>
    </div>
  )
}

export default RecentProject
