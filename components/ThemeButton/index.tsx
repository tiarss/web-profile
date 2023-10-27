'use client'
import { useState, useEffect } from "react"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "next-themes"

const ThemeButton = () => {
  const {theme, setTheme} = useTheme()
  console.log(theme)

  return (
    <AnimatePresence mode='wait' initial={false}>
        {theme === "dark" ?
          <motion.div
            key={'moon'}
            onClick={() => setTheme('light')}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed flex justify-center items-center bottom-10 right-10 bg-slate-900 border border-slate-900 hover:border-white transition-colors ease-in-out h-[70px] w-[70px] p-[20px] rounded-full text-white cursor-pointer'
          >
            <FontAwesomeIcon icon={faMoon} size="xl" color='#fff' />
          </motion.div> :
          <motion.div
            key={'sun'}
            onClick={() => setTheme('dark')}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed flex justify-center items-center bottom-10 right-10 bg-slate-100 border border-slate-100 hover:border-slate-800 transition-colors ease-in-out h-[70px] w-[70px] p-[20px] rounded-full text-white cursor-pointer'
          >
            <FontAwesomeIcon icon={faSun} size="xl" color='#000' />
          </motion.div>
        }
      </AnimatePresence>
  )
}

export default ThemeButton