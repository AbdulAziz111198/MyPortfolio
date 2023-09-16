import React from 'react';
// icon 
import {BsArrowUpRight} from 'react-icons/bs';
// motion 
import {motion} from 'framer-motion'
// variant 
import {fadeIn} from '../variants';
// servise data 
const services = [
  {
    name:'Landing page',
    describtion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus enim facilis!',
    link:'Learn more',

  },
  {
    name:'Development',
    describtion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus enim facilis!',
    link:'Learn more',

  },
  {
    name:'Responsive Web site',
    describtion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus enim facilis!',
    link:'Learn more'},
  {
    name:'Product Branding',
    describtion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus enim facilis!',
    link:'Learn more'

  }
]

const Services = () => {
  return <section className='section' id='servises'>
    <div className='container mx-auto'>

  <div className='flex flex-col lg:flex-row'>
    {/* {text  and  } */}
  <motion.div 
   variants={fadeIn('right', 0.4)}
   initial="hidden"
   whileInView={"show"}
   viewport={{once:false , amount:0.3}}
  className='flex-1 lg:bg-services lg:bg-top bg-no-repeat mix-blend-lighten  mb-12  lg:mb-0'>
    <h2 className='h2 text-accent mb-6'>What I Do</h2> 
    <h3 className='h3 mb-16 max-w-[455px]'>I'm a Freelance and Mentor Front-end Developer with over 1 years of experience</h3>
  </motion.div>
    {/* {service } */}
  <motion.div 
  variants={fadeIn('left', 0.4)}
  initial="hidden"
  whileInView={"show"}
  viewport={{once:false , amount:0.3}}
  className='flex-1'>
    {/* {servisec list } */}
    <div>
      {services.map((service,index)=>{
      // destrukture servise 
      const{name,describtion,link}=service;
        return <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
          <div className='max-w-[376px]'>
            <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
            <p className='font-secondary leading-tight'>{describtion}</p>
          </div>
          <div className='flex flex-col flex-1 items-end'>
            <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
              <BsArrowUpRight/>
            </a>
            <a href='# ' className='text-gradient text-sm'>{link}</a>
          </div>
        </div>;
      }
      )}
    </div>
  </motion.div>
  </div>

    </div>
    
    </section>;
};

export default Services;
