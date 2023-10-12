'use client'
import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { ProgrammingIcon } from '@/assets/const'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import './globals.css'

// bg-gradient-to-t from-[#161e1b] to-[#041c23]

export default function Home() {
  const data = [
    {
      title: 'About Me',
      desc: 'haloo'
    },
    {
      title: 'Education',
      desc: 'haloo2'
    },
    {
      title: "Experience",
      desc: 'haloo3'
    }
  ]
  const [theme, setTheme] = useState<string>('')
  const [isActiveTab, setIsActiveTab] = useState<number>(0)

  const onDarkMode = (theme: string) => {
    const htmlElement = document.querySelector('html')
    if (theme === 'dark') {
      htmlElement?.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      htmlElement?.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    const darkMode = localStorage?.getItem('theme')

    if (darkMode === null) {
      localStorage.setItem('theme', 'dark')
      htmlElement?.classList.add('dark')
    } else if (darkMode === 'dark') {
      htmlElement?.classList.add('dark')
      setTheme(darkMode)
    }
  }, [])

  return (
    <div className={`${theme === 'dark' ? 'infinite-background' : 'infinite-background-black'} relative`}>
      {theme === 'dark' && <div className='absolute top-[-30px] left-1/2 transform -translate-x-1/2 md:w-[900px] h-[150px] rounded-[50%] bg-gradient-to-b from-[#161e1b] to-slate-700 blur-3xl' />}
      <Header />
      {/*  Welcome Section */}
      <div className='flex flex-col w-screen h-screen justify-center items-start px-[20px] md:px-[100px]'>
        <Hero />
      </div>
      {/* About Me */}
      <div className='flex justify-center items-center gap-2 h-screen'>
        {data.map((item, index) => (
          <AnimatePresence key={item.title} mode='wait' initial={false}>
            <motion.div
              initial={{width: 400}}
              animate={{ width: index === isActiveTab ? 500 : 100, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className={`h-[500px] box-border p-10 bg-blue-500 transition-all rounded-md`}
              onClick={() => setIsActiveTab(index)}>
              <p>{item.title}</p>
              {index === isActiveTab &&
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9 }}
                >
                  {item.desc}
                </motion.p>
              }
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
      {/* Tech Stack */}
      <div className='flex flex-col justify-center items-center gap-2 h-screen'>
        <p className='text-4xl font-sans font-medium mb-[50px] text-slate-800 dark:text-white'>What i am used</p>
        <div className='flex w-screen flex-wrap justify-center items-center gap-[75px] px-10'>
          {ProgrammingIcon.map((data) => (
            <Image
              className='text-slate-200 hover:scale-125 transition-all ease-in-out cursor-pointer'
              key={data.alt}
              alt={data.alt}
              height={100}
              src={theme === 'dark' ? data.imageDark : data.image}
            />
          ))}
        </div>
        <div>
          <p></p>
        </div>
      </div>
      {/* My Project */}
      <div className='flex flex-col justify-center items-center gap-2 h-screen'>

      </div>

      <AnimatePresence mode='wait' initial={false}>
        {theme === "dark" ?
          <motion.div
            key={'moon'}
            onClick={() => onDarkMode(theme)}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed flex justify-center items-center bottom-10 right-10 bg-slate-900 h-[70px] w-[70px] p-[20px] rounded-full text-white cursor-pointer'>

            <FontAwesomeIcon icon={faMoon} size="xl" color='#fff' />
          </motion.div> :
          <motion.div
            key={'sun'}
            onClick={() => onDarkMode(theme)}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed flex justify-center items-center bottom-10 right-10 bg-slate-200 h-[70px] w-[70px] p-[20px] rounded-full text-white cursor-pointer'>

            <FontAwesomeIcon icon={faSun} size="xl" color='#000' />
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}
