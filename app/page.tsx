'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
const ThemeButton = dynamic(() => import('@/components/ThemeButton'), { ssr: false })

// import Header from '@/components/Header'
import Hero from '@/components/Hero'

import useWindowSize from '@/helpers/useWindowsSize'

import { ProgrammingIcon } from '@/assets/const'
import './globals.css'

export default function Home() {

  const data = [
    {
      title: 'Profile',
      desc: 'My Name Tiar, I am a front-end developer with over 1 year of professional experience in building and maintaining web apps. I have a strong interest in web development and how web development technologies are evolving today. I am quite familiar with front-end frameworks like Next.js. I enjoy in collaborating with a team and I am happy to learn new things.',
      subDesc: "",
    },
    {
      title: 'Education',
      desc: 'I am graduated with Bachelor Degree in Electronic Engineering form Politeknik Elektronika Negeri Surabaya. ',
      subDesc: ""
    },
    {
      title: "Experience",
      desc: 'With over 1 year of experience as a Junior Software Engineer - Front End at PT Linkar Niaga Solusindo (SIRCLO), I have been responsible for developing new features based on UI/UX design and product or business requirements, maintaining and enhancing over 10 webstore templates, collaborating with the team to streamline the product selling process for sellers (Cekatan), increasing merchant store readiness through the development of a Quick Setup feature in the admin panel, creating Premium Templates with specific client-requested features, and managing other responsibilities as a Front End Engineer.',
      subDesc: "Tech Stack: React Js, Next Js, Typescript, Apollo Client (GraphQL), SASS, Tailwind"
    }
  ]

  const dataPortfolio = [
    {
      title: 'Web App',
      desc: "This is a project that I've been working on while pursuing my career in web app development. The projects I've worked on have utilized various technologies, starting from the fundamentals like HTML, CSS, and JavaScript, and advancing to the use of frameworks such as React JS.",
      image: "",
      url: '/?portfolio=web-app'
    },
    {
      title: 'Mobile App',
      desc: "This is a project I've worked on to explore the Mobile App development field, aiming to enhance my skills in Front End. The project utilizes React Native. There are still relatively few projects in the Mobile App domain, and I aspire to continue expanding my knowledge in Mobile App development.",
      image: "",
      url: '/?portfolio=mobile-app'
    },
  ]

  const isMobileSize = useWindowSize().width < 768

  const [isActiveTab, setIsActiveTab] = useState<number>(0)

  return (
    <div className='dark:after:infinite-background after:infinite-background-black relative'>
      {/* {theme === 'dark' && <div className='absolute top-[-30px] left-1/2 transform -translate-x-1/2 md:w-[900px] h-[150px] rounded-[50%] bg-gradient-to-b from-[#161e1b] to-slate-700 blur-3xl' />} */}
      {/* <Header /> */}
      {/*  Welcome Section */}
      <div className='flex flex-col h-screen justify-center items-start px-[50px] md:px-[70px]'>
        {/* <div className='flex flex-col justify-center bg-[#3c6e71da] w-full h-[80%] rounded-3xl p-[50px]'> */}
        <Hero />
        {/* </div> */}
      </div>
      {/* About Me */}
      <div className='flex flex-col justify-center items-center gap-2 h-screen p-10'>
        <p className='text-4xl font-sans font-bold mb-[50px] text-slate-700 dark:text-white uppercase'>About Me</p>
        <div className='flex flex-col md:flex-row gap-2'>
          {data.map((item, index) => (
            <AnimatePresence key={item.title} mode='wait' initial={false}>
              <motion.div
                initial={{ width: 600 }}
                animate={{ width: !isMobileSize ? index === isActiveTab ? 600 : 100 : 'auto', height: isMobileSize ? index === isActiveTab ? 600 : 100 : 600, opacity: 1 }}
                transition={{ duration: 0.2, type: "tween" }}
                className={`relative h-[600px] box-border p-10 dark:bg-[#ffffffd8] bg-[rgb(30,41,59,0.9)] transition-all rounded-md cursor-pointer overflow-hidden`}
                onClick={() => setIsActiveTab(index)}>
                <p className={index === isActiveTab ? 'text-2xl pb-2 uppercase font-bold dark:text-slate-800' : 'absolute md:left-0 bottom-8 md:bottom-16  md:-rotate-90 w- text-4xl w-[100px] uppercase font-bold dark:text-[rgb(30,41,59,0.5)] text-[rgb(255,255,255,0.5)]'}>{item.title}</p>
                {index === isActiveTab &&
                  <div className='md:w-[500px]'>
                    <p className='dark:text-slate-800 text-xl'>
                      {item.desc}
                    </p>
                    <p className='dark:text-slate-800 mt-4'>{item.subDesc}</p>
                  </div>
                }
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
      {/* Tech Stack */}
      <div className='flex flex-col justify-center items-center gap-2 h-[80vh]'>
        <p className='text-4xl font-sans font-bold mb-[50px] text-slate-700 dark:text-white uppercase'>What i am used</p>
        <div className='flex w-screen flex-wrap justify-center items-center gap-[75px] px-10'>
          {ProgrammingIcon.map((data) => (
            <React.Fragment key={data.alt}>
              <Image
                className='hidden dark:block text-slate-200 hover:scale-125 transition-all ease-in-out cursor-pointer'
                alt={data.alt}
                height={100}
                placeholder='empty'
                loading='lazy'
                src={data.imageDark}
              />
              <Image
                className='block dark:hidden text-slate-200 hover:scale-125 transition-all ease-in-out cursor-pointer'
                alt={data.alt}
                height={100}
                placeholder='empty'
                loading='lazy'
                src={data.image}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* My Project */}
      <div className='flex flex-col w-full items-center justify-center gap-2 h-[100vh]'>
        <p className='text-4xl font-sans font-bold mb-[40px] text-slate-800 dark:text-white uppercase'>Portfolio</p>
        <div className='w-[816px]'>
          {dataPortfolio.map((item, index) => (
            <div className='dark:bg-[#ffffffd8] bg-[rgb(30,41,59,0.9)] mb-[20px] w-[100%] p-[50px] rounded-2xl' key={item.title}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                <h2 className='dark:text-slate-800 text-white text-2xl font-bold uppercase mb-2'>{item.title}</h2>
                <p className={`w-[300px] dark:text-slate-800 text-white ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ThemeButton />

    </div>
  )
}
