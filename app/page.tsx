'use client'
import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { ProgrammingIcon } from '@/assets/const'
import './globals.css'

// bg-gradient-to-t from-[#161e1b] to-[#041c23]

export default function Home() {
  return (
      <div className='infinite-background relative'>
        <div className='absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-[900px] h-[150px] rounded-[50%] bg-gradient-to-b from-[#161e1b] to-slate-700 blur-3xl' />
        <Header />
        {/*  Welcome Section */}
        <div className='flex flex-col w-screen h-screen justify-center items-center'>
          <Hero />
        </div>
        {/* Tech Stack */}
        <div className='flex flex-col justify-center items-center gap-2 h-screen'>
          <p className='text-4xl font-sans font-medium mb-[50px]'>What iam used</p>
          <div className='flex w-screen flex-wrap justify-center items-center gap-[75px] px-10'>
            {ProgrammingIcon.map((data) => (
              <Image
                className='hover:scale-125 transition-all ease-in-out cursor-pointer'
                key={data.alt}
                alt={data.alt}
                height={100}
                src={data.image}
              />
            ))}
          </div>
        </div>
        {/* About Me */}
        <div className='flex flex-col justify-center items-center gap-2 h-screen'>

        </div>
      </div>
  )
}
