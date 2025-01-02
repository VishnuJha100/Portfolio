import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='relative' id='about'>
        <div className='bg-gray-100 py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>About Me</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I'm Vishnu Deb Jha</p>
                    <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>A full stack MERN developer</p>
                </div>
                <div className='mt-10'>
                    <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                        <div>
                            <h3 className='text-2xl font-semibold text-gray-900'>My Journey</h3>
                            <p className='mt-4 text-lg text-gray-600'>
                                I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the MERN stack (MongoDB, Express.js, React.js, Node.js), I have built projects such as a full stack e-commerce website, a study-sync clone and even a chat application. My projects demonstrate my ability to integrate powerful backend solutions with sleek, user-friendly frontend designs.
                            </p>
                            <img src={assets.mernstack} alt="" className='p-2 rounded-lg w-52 mt-4' />
                        </div>
                        <div className='border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
                            <h3 className='font-semibold text-2xl text-red-600'>Skills & Expertise</h3>
                            <div className='flex items-center justify-center flex-wrap gap-3'>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={assets.html_icon} className='w-10' alt="" />
                                    <span className='font-semibold'>HTML</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={assets.html_icon} className='w-10' alt="" />
                                    <span className='font-semibold'>CSS</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={assets.js_logo} className='w-10' alt="" />
                                    <span className='font-semibold'>JavaScript</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={assets.mongodb_logo} className='w-10' alt="" />
                                    <span className='font-semibold'>MongoDB</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={assets.expressjs_logo} className='w-10' alt="" />
                                    <span className='font-semibold'>Express Js</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={assets.react_logo} className='w-10' alt="" />
                                    <span className='font-semibold'>React</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={assets.nodejs_logo} className='w-10' alt="" />
                                    <span className='font-semibold'>Node Js</span>
                                </div>
                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                    <img src={assets.tailwind_logo} className='w-10' alt="" />
                                    <span className='font-semibold'>Tailwind CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <h3 className='text-2xl font-semibold text-gray-900'>More About Me</h3>
                    <p className='mt-4 text-lg text-gray-600'>What sets me apart is my dedication to continuous learning and my proactive approach to problem-solving. Whether it's diving into the latest web development trends, experimenting with cutting-edge tools, or contributing to open source projects, I'm always eager to expand my horizons and share my knowledge with the community.</p>
                    <p className='mt-4 text-lg text-gray-600'>In addition to my technical skills, I believe in the power of collaboration and effective communication. I thrive in team environments and enjoy brainstorming and exchanging ideas with fellow developers. I am an advocate for clean code, best practices, and web accessibility, ensuring that my work is not only functional but also inclusive and user-centric.</p>
                    <p className='mt-4 text-lg text-gray-600'>Outside of coding, you can find me attending tech meetups, writing tutorials and blogs, or participating in hackathons. I am passionate about giving back to the community and love connecting with like-minded individuals who share my enthusiasm for technology.</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default About
