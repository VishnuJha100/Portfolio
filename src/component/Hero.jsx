import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
            <div className='md:w-[1/2] mb:8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
                <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi there, <br/>I'm Vishnu <span className='text-red-500'>Jha</span></h1>
                <p className='md:text-2xl text-xl mb-4'>Full stack developer</p>
                <p className='mb:4'>I'm a passionate web developer with experties in React, Express.js and modern web technologies. I love creating beautiful and functional website that solve real world problems.</p>
                <button className='text-white px-3 bg-black py-2 w-max rounded-md'>Download CV</button>
            </div>
            <div className='md:w-1/2 relative flex justify-center item-end'>
                <img src={assets.hero} alt="" />
                <img className='w-10 absolute md:hidden top-36 left-0 rounded-full' src={assets.react_logo} alt="" />
                <img className='w-10 absolute top-0 right-5 md:hidden' src={assets.nodejs_logo} alt="" />
                <img className='w-10 absolute rounded-full right-0 bottom-36 md:hidden' src={assets.tailwind_logo} alt="" />
            </div>
        </div>
      </div>
      <div className='absolute top-44 right-8 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'>
        <img className='w-20' src={assets.linkedin_logo} alt="" />
        <img className='w-20' src={assets.instagram_logo} alt="" />
        <img className='w-20' src={assets.x_logo} alt="" />
        <img className='w-20' src={assets.facebook_logo} alt="" />
      </div>
    </section>
  )
}

export default Hero
